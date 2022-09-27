/*
 *   Copyright (c) 2022 andydevs69420
 *   All rights reserved.
 */




import React from "react";
import "./style/sidebar.css";


const Sidebar = (props={id, children}) => {

    return (
        <div className="sidebar shadow-sm">
            <div id={props.id} className="sidebar__sidebar-collapse collapse collapse-horizontal show">
                <nav className="sidebar__nav navbar navbar-light bg-light">
                    {props.children}
                </nav>
            </div>
        </div>
    );
}

export default Sidebar;
