/*
 *   Copyright (c) 2022 andydevs69420
 *   All rights reserved.
 */

import React from "react";
import "./style/dashboardtile.css";

const DashboardTile = ({
    label,
    iconFill="rgb(13, 110, 253)"
}) => {

    return (
        <li className="dashboardtile d-block border-white rounded-1 shadow-sm" style={{
            backgroundColor: "#eeeeee"
        }}>
            <div className="dashboardtile__resizer d-block position-relative">
                {/* icon pill */}
                <span className="dashboardtile__icon d-flex justify-content-center align-items-center rounded-1 text-light shadow" style={{
                    backgroundColor: iconFill
                }}>
                    <i className="bi bi-android2"></i>
                </span>

                {/* content */}
                <div className="d-flex position-absolute top-0 w-100 h-100">
                    {/* asd */}
                </div>
            </div>
        </li>
    );
}

export default DashboardTile;
