/*
 *   Copyright (c) 2022
 *   All rights reserved.
 */



import React from "react"
import "./style/app.css";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


/*
 | Roles
 */
import Requisitioner from "../roles/requisitioner/Requisitioner";
    import RequisitionerDashboard from "../roles/requisitioner/tabs/dashboard/RequisitionerDashboard";
    import FormBuilder from "../roles/requisitioner/tabs/formbuilder/FormBuilder";


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/app" index element={<h1 className="display-1">INDEX</h1>} />

                {/* requisitioner role */}
                <Route path="/app/requisitioner" element={<Requisitioner />}>

                    <Route index exact element={<RequisitionerDashboard />} />
                    {/* create form */}
                    <Route path="formbuilder" exact element={<FormBuilder />} />
                    {/* request */}
                    <Route path="newrequest" exact element={<FormBuilder />} />

                </Route>

            </Routes>
        </Router>
    );
}

export default App;
