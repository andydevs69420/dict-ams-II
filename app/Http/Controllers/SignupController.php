<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class SignupController extends Controller
{
    //
    public function onSignup(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "email"    => "email|unique:users,email",
            "password" => "min:8|confirmed",
            "division" => "exists:division,division_id",
            "office"   => "exists:office,office_id",
            "role"     => "exists:role,role_id"
        ]);

        if ($validator->fails())
        return response()->json($validator->messages());

        // success?

        return response()->json(["fooc"=>"yeah!"]);
    }
}
