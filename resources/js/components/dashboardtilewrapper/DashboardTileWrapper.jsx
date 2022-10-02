/*
 *   Copyright (c) 2022 andydevs69420
 *   All rights reserved.
 */

import React from "react";
import "./style/dashboardtilewrapper.css";


/**
 * DashboardTileWrapper
 * @param {String} id wrapper id
 * @param {Array[JSX.Element]} items list items
 * @return JSXElement
 **/
const DashboardTileWrapper = ({
    id,
    items=[],
}) => {

    return (
        <ul id={id} className="dashboardtilewrapper d-flex flex-column flex-sm-row flex-wrap m-0 p-0 justify-content-around justify-content-md-start align-items-center align-content-start">
            {items}
        </ul>
    );
}

export default DashboardTileWrapper;
