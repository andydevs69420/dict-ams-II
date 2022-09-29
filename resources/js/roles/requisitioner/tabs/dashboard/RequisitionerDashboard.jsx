/*
 *   Copyright (c) 2022 andydevs69420
 *   All rights reserved.
 */

import React, { useState } from "react";
import "./style/requisitionerdashboard.css";


/*
 | Other components
 */
import TextFormField from "../../../../components/textformfield/TextFormField";
import DashboardTileWrapper from "../../../../components/dashboardtilewrapper/DashboardTileWrapper";
import DashboardTile from "../../../../components/dashboardtile/DashboardTile";


const RequisitionerDashboard = () => {

    const [search, searchUpdate] = useState("");

    function onSearch(e) {
        console.log(e.target.value)
        searchUpdate(e.target.value);
    }

    return (
        <div id="requisitioner-dashboard" className="d-block">
            <div className="d-block p-2 bg-white shadow-sm">
                <DashboardTileWrapper
                    items={[
                        <DashboardTile label="foooc1" key={"foc1"} />,
                        <DashboardTile label="foooc2" key={"foc2"}/>,
                        <DashboardTile label="foooc3" key={"foc3"}/>,
                        // <DashboardTile label="foooc" />,
                    ]}/>
            </div>
        </div>
    );
}

export default RequisitionerDashboard;
