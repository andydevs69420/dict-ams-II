/*
 *   Copyright (c) 2022 andydevs69420
 *   All rights reserved.
 */

import React, { useState } from "react";



/**
 * TextFormField
 * @param {String} id input id
 * @param {JSX.Element} icon input icon
 * @param {Number} elevation button elevation
 * @param {String} type input type ["text"|"email"|"password"|etc]
 * @param {String} name input name
 * @param {String} size input size variant ["sm"|"md"|"lg"]
 * @param {Number} borderWidth border around the input ex: {borderWidth}px solid color
 * @param {String} borderColor border color for input ex: {borderWidth}px solid {borderColor}
 * @param {String} placeholder input placeholder
 * @param {String} value input initial value
 * @param {Function} onChange default onchange callback
 * @returns JSXElement
 **/
const TextArea = ({
    id,
    elevation=0,
    type="text",
    name,
    borderWidth=1,
    borderColor="transparent",
    placeholder="form field",
    fillColor="inherit",
    required,
    value="",
    onChange,
}) => {

    let elevate = "", form_size = "";
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

    const [defaultValue, valueChange] = useState(value);

    const onTextChange = (e) => {
        onChange?.call(null, e.target.value);
        valueChange(e.target.value);
    }

    return (
        <div className={"textformfield_wrapper input-group position-relative rounded " + elevate} style={{
            backgroundColor: fillColor
        }}>
            <textarea id={id} className={"textformfield form-control" + form_size} type={type} name={name} placeholder={placeholder} style={{
                border: `${borderWidth}px solid ${borderColor}`
            }} rows={3} onChange={onTextChange} value={defaultValue} required={required}></textarea>
        </div>
    );
}

export default TextArea;
