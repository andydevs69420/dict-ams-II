/*
 *   Copyright (c) 2022 andydevs69420
 *   All rights reserved.
 */

import React from "react";
import "./style/dashboardtilewrapper.css";

const DashboardTileWrapper = ({
    id,
    items=[],
}) => {

    return (
        <ul className="dashboardtilewrapper d-flex flex-column flex-sm-row flex-wrap m-0 p-0 justify-content-around justify-content-md-start align-items-center align-content-start">
            {items}
        </ul>
    );
}

export default DashboardTileWrapper;
