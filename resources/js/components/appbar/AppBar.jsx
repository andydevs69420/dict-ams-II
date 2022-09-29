/*
 *   Copyright (c) 2022 andydevs69420
 *   All rights reserved.
 */

import React from "react";
import "./style/appbar.css";


const AppBar = ({id, sidebarID, username}) => {

    return (
        <nav id={id} className="appbar__navbar navbar navbar-light fixed-top bg-white shadow-sm">
            <div className="container-fluid justify-content-start justify-content-sm-between">

                <button
                    className="p-1 navbar-toggler text-primary"
                    data-bs-toggle="collapse"
                    data-bs-target={"#" + sidebarID}>
                        <i className="navbar-toggler-icon"></i>
                    </button>

                <span className="ms-3 ms-sm-0 fs-6 fw-bold" role="textbox">
                    Welcome {username??"user"}!
                </span>
            </div>
        </nav>
    );
}


export default AppBar;
