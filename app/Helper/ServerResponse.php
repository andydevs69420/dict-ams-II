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
            ...$data
        ]);
    }

    /**
     * Specifies fail response
     **/
    public static function bad($message="fail!", $data=[])
    {
        $fmt = ["status" => "bad", "message" => $message];
        $fmt = array_merge($fmt, $data);
        return response()->json($fmt);
    }
}
