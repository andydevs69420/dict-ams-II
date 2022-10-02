/*
 *   Copyright (c) 2022 andydevs69420
 *   All rights reserved.
 */

import React, { useState } from "react";
import "./style/dropdown.css";


/**
 * Dropdown
 * @param {String} id input id
 * @param {JSX.Element} icon input icon
 * @param {Number} elevation button elevation
 * @param {String} name input name
 * @param {String} size input size variant ["sm"|"md"|"lg"]
 * @param {Number} borderWidth border around the input ex: {borderWidth}px solid color
 * @param {String} borderColor border color for input ex: {borderWidth}px solid {borderColor}
 * @param {String} placeholder input placeholder
 * @param {String} fillColor background color
 * @param {String} value input initial value
 * @param {Array[Object]}  children list of options [{id:..., value: ...}]
 * @param {Function} onChange default onchange callback
 * @returns JSXElement
 **/
const Dropdown = ({
    id,
    icon=(<i className="bi bi-file-earmark"></i>),
    elevation=0,
    name,
    size,
    borderWidth=1,
    borderColor="transparent",
    placeholder="form select",
    fillColor="inherit",
    required,
    value,
    children=[],
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

    switch(size)
    {
        case "sm":
        case "SM":
            form_size = " form-select-sm";
            break;
        case "md":
        case "MD":
            form_size = "";
            break;
        case "lg":
        case "LG":
            form_size = " form-select-lg";
            break;
    }

    const [defaultValue, updateValue] = useState(value);

    const onSelect = (e) => {
        onChange?.call(null, e.target.value);
        updateValue(e.target.value);
    }

    return (
        <div className={"dropdown_wrapper input-group position-relative rounded " + elevate} style={{
            backgroundColor: fillColor
        }}>
            <span className="dropdown_icon input-group-text text-muted text-center opacity-75 border-0">{icon}</span>
            <select id={id} className={"dropdown form-select" + form_size} name={name} onChange={onSelect} placeholder={placeholder} style={{
                border: `${borderWidth}px solid ${borderColor}`
            }} required={required} value={defaultValue}>

                {/* default */}
                <option value="default" hidden>{placeholder}</option>

                {/* generate */}
                {children.map((e) => (<option value={e.id} key={e.id}>{e.value}</option>))}

            </select>
        </div>
    );
}

export default Dropdown;
