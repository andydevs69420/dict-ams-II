/*
 *   Copyright (c) 2022 andydevs69420
 *   All rights reserved.
 */

import React, { useState } from "react";
import "./style/requisitionerdashboard.css";


/*
 | Other components
 */
import DashboardTileWrapper from "../../../../components/dashboardtilewrapper/DashboardTileWrapper";
import DashboardTile from "../../../../components/dashboardtile/DashboardTile";


const RequisitionerDashboard = () => {

    return (
        <div id="requisitioner-dashboard" className="d-block w-100">
            <div className="d-block p-2 bg-white shadow-sm">
                <DashboardTileWrapper
                    items={[
                        // purchase order
                        <DashboardTile
                            icon={
                                <i className="bi bi-card-checklist"></i>
                            }
                            label="Purchase Request"
                            data={90}
                            key={"foc1"} />,
                        // job order
                        <DashboardTile
                            icon={
                                <i className="bi bi-credit-card"></i>
                            }
                            label="Job Order"
                            data={30}
                            key={"foc2"} />,
                        // unknown
                        <DashboardTile
                            label="foooc3"
                            data={10}
                            key={"foc3"} />,
                    ]}/>
            </div>
        </div>
    );
}

export default RequisitionerDashboard;
