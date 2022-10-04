

<?php

function generateCode()
{
    $code = "";

    for ($_ = 0; $_ < 6; $_++)
    { $code .= rand(0,9); }

    return $code;
}

