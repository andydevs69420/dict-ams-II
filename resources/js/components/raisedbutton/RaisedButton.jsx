/*
 *   Copyright (c) 2022
 *   All rights reserved.
 */

import React from "react";
import "./style/raisedbutton.css";


/**
 * RaisedButton
 * @param {String} id button id
 * @param {String} text button text
 * @param {String} type button type ["button"|"submit"|etc]
 * @param {String} variant color variant ["primary"|"secondary"|"success"|"danger"|"light"|"white"|"warning"|"dark"]
 * @param {String} size button size variant
 * @param {Number} borderWidth border width of the button
 * @param {Number} borderColor border color of the button
 * @returns JSXElement
 **/
const RaisedButton = ({
    id,
    text="button",
    type="button",
    variant="primary",
    size,
    borderWidth=1,
    borderColor="transparent",
    onClick
}) => {
    let supportedVariant = ["primary","secondary","success","danger","light","white","warning", "dark"];
    let mainVariant = "";

    if (supportedVariant.includes(variant))
        mainVariant = " btn-" + variant;

    let supportedSize = ["sm","md","lg"];
    let mainSize = "";

    if (supportedSize.includes(size))
        mainSize = (size === "md")?"":" btn-" + size;

    return (
        <span className="raisedbutton_wrapper d-inline-block p-0 w-100 rounded shadow-sm">
            <button id={id} className={"raisedbutton btn" + mainVariant + mainSize + " w-100"} type={type} onClick={onClick} style={{
                border: `${borderWidth}px solid ${borderColor}`
            }}>
                {text}
            </button>
        </span>
    );
}


export default RaisedButton;
