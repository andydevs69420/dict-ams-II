<?php

namespace App\Helper;

class ServerResponse
{
    public static function OK(String $message="success!", Array $data=[])
    {
        return json_encode([
            "status"  => "ok",
            "message" => $message,
            ...$data
        ]);
    }
}
