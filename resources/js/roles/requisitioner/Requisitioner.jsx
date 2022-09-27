/*
 *   Copyright (c) 2022 andydevs69420
 *   All rights reserved.
 */

import React from "react";
import { Outlet } from "react-router-dom";

/*
 | Other component
 */
import Sidebar from "../../components/sidebar/Sidebar";



const Requisitioner = () => {
    return (
        <div className="d-flex position-relative w-100 h-100">
            {/* navigation | drawer */}
            <Sidebar id="requisitioner__sidebar">
                <button
                    className="btn btn-close"
                    data-bs-toggle="collapse"
                    data-bs-target="#requisitioner__sidebar"></button>

            </Sidebar>

            {/* content */}
            <div className="d-block w-100 h-100">
                <Outlet />
            </div>
        </div>
    );
}

export default Requisitioner;

