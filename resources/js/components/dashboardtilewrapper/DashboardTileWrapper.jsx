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
        <ul className="dashboardtilewrapper d-flex flex-row flex-wrap p-0 justify-content-start align-items-center align-content-start">
            {items}
        </ul>
    );
}

export default DashboardTileWrapper;
