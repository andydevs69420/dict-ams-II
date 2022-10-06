<?php

namespace App\Helper;

class ServerResponse
{
    /**
     * Specifies success response
     **/
    public static function ok(String $message="success!", Array $data=[])
    {
        return response()->json([
            "status"  => "ok",
            "message" => $message,
            "data"    => [...$data]
        ]);
    }

    /**
     * Specifies fail response
     **/
    public static function bad(String $message="success!", Array $data=[])
    {
        return response()->json([
            "status"  => "bad",
            "message" => $message,
            "data"    => [...$data]
        ]);
    }
}
