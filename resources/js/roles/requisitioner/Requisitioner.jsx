/*
 *   Copyright (c) 2022 andydevs69420
 *   All rights reserved.
 */

import React from "react";
import "./style/requisitoner.css";

import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";



/*
 | Other component
 */
import AppBar from "../../components/appbar/AppBar";
import Sidebar from "../../components/sidebar/Sidebar";



const Requisitioner = () => {
    return (
        <div className="d-block position-relative w-100 h-100">

            {/* appbar */}
            <AppBar sidebarID="requisitioner__sidebar" username="Andy404" />

            <div className="d-flex w-100 h-100">

                {/* navigation | drawer */}
                <Sidebar
                    id="requisitioner__sidebar"
                    items={{
                        "Create Form": {
                            icon: <i className="bi bi-file-plus-fill text-primary"></i>,
                            link: ["Form builder"]
                        },
                        "Request": {
                            icon: <i className="bi bi-list-nested text-primary"></i>,
                            link: ["Request list"]
                        },
                        "Account": {
                            icon: <i className="bi bi-person-fill text-primary"></i>,
                            link: ["Account settings"]
                        },
                    }} />

                {/* content */}
                <div id="requisitioner__content-area" className="d-block w-100 h-100">
                    <Outlet />
                </div>
            </div>

        </div>
    );
}

export default Requisitioner;

