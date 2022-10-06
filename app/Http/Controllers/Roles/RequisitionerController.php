<?php

namespace App\Http\Controllers\roles;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

use \App\Helper\ServerResponse;
use \App\Models\PurchaseRequestForm;
use \App\Models\PurchaseRequestItem;

class RequisitionerController extends Controller
{
    /* constructor */
    public function __construct()
    { $this->middleware(["auth", "verified"]); }

    //======================================== INDEX ========================================

    /**
     * index
     * @param Request $request request
     * @param String $route route name
     * @return Array|JSON|Error
     **/
    public function index(Request $request, String $route) {

        if (!Auth::user()->hasRole("Requisitioner"))
            return abort(401);

        switch($route)
        {
            case "newPurchaseRequest":
                return $this->newPurchaseRequest($request);
            case "newJobOrder":
                return $this->newJobOrder($request);
            default:
                /*
                 | Just a fallback!
                 | usually not being executed
                 */
                return abort(404);
        }
    }

    /**
     * newPurchaseRequest
     * @param Request $request request
     * @return Array|JSON
     **/
    private function newPurchaseRequest(Request $request)
    {
        // validate
        $validator = Validator::make($request->all(), [
            "items" => "required|array|min:1",
            "items.*" => "required|array|distinct",
            "purpose" => "required|string",
            "budgetOfficer" => "required|exists:users,user_id",
            "recommendingApproval" => "required|exists:users,user_id"
        ]);

        if ($validator->fails())
        return ServerResponse::bad("error with input!", $validator->messages()->toArray());

        /* STEP1: save personel */
        $s1 = false;
        $prForm = new PurchaseRequestForm();
        // personels
        $prForm->requisitioner_id_fk  = Auth::user()->user_id;
        $prForm->budget_officer_id_fk = $request->input("budgetOfficer");
        $prForm->recommending_approval_id_fk = $request->input("recommendingApproval");
        $s1 = $prForm->save();

        if (!$s1)
        return ServerResponse::bad("error while making form!");

        /* STEP2: save items */
        $s2 = false;
        $inserted = [];
        foreach($request->input("items") as $item)
        {
            $newitem = new PurchaseRequestItem();
            // item
            $newitem->stockno     = $item["stock"      ];
            $newitem->unit_id_fk  = $item["unit"       ];
            $newitem->quantity    = $item["quantity"   ];
            $newitem->unit_cost   = $item["unitCost"   ];
            $newitem->total_cost  = $item["totalCost"  ];
            $newitem->description = $item["description"];
            $newitem->purchase_request_form_id_fk = $prForm->id;
            $s2 = $newitem->save();

            if (!$s2) break;
            array_push($inserted, $item);
        }

        if (!$s2)
        {   // DELETE INSERTED DATA
            $prForm->delete();

            foreach($inserted as $inserted_item)
            $inserted_item->delete();

            return ServerResponse::bad("error while inserting items!");
        }

        unset($inserted);
        return ServerResponse::ok();
    }


    /**
     * newJobOrder
     * @param Request $request request
     * @return Array|JSON
     **/
    private function newJobOrder(Request $request)
    {
        return ServerResponse::ok("oks!", $request->all());
    }


    //===================================== OTHER INDEX =====================================
    /**
     * getDataIndex
     * @param Request $request request
     * @param String $data route data
     * @return Array|JSON|Error
     **/
    public function getDataIndex(Request $request, String $data)
    {
        if (!Auth::user()->hasRole("Requisitioner"))
            return abort(401);

        switch($data)
        {
            case "role":
                return $this->getRole($request);
            default:
                /*
                 | Just a fallback!
                 | usually not being executed
                 */
                return abort(404);
        }
    }

    /**
     * getRole
     * @param Request $request request
     * @return Array|JSON
     **/
    private function getRole(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "role" => "required|string|min:5"
        ]);

        if ($validator->fails())
        return ServerResponse::bad("invalid role", $validator->messages()->toArray());

        return ServerResponse::ok("success!", Auth::user()->getWorkmate($request->input("role"))->toArray());
    }
}
