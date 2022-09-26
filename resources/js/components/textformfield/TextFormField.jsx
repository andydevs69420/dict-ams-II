/*
 *   Copyright (c) 2022
 *   All rights reserved.
 */
import React, { useEffect } from "react";

const TextFormField = ({
    placeholder="form field",
    elevation=0
}) => {

    var elevate = "";
    switch (elevation)
    {
        case 1:
            elevate = "shadow-sm";
            break;
        case 2:
            elevate = "shadow";
            break;
        case 3:
            elevate = "shadow-lg";
            break;
    }

    console.log(elevate, elevation);

    return (
        <div className={"input-group border-0 rounded " + elevate}>
            <input className="form-control border-0" placeholder={placeholder}/>
        </div>
    );
}

export default TextFormField;
