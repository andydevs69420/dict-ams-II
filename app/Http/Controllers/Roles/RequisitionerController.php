<?php

namespace App\Http\Controllers\roles;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RequisitionerController extends Controller
{
    //
    public function __construct()
    {
        // assert(Auth::user()->hasRole("Admin"), "invalid role");
        $this->middleware(["auth", "verified"]);
    }

    public function index(Request $request) {
        error_log("override");
        return redirect()->intended("/requisitioner");
    }
}
