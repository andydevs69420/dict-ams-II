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
                <Route path="/" index element={<h1 className="display-1">INDEX</h1>} />

                {/* requissitioner role */}
                <Route path="/requisitioner" element={<Requisitioner />}>

                    <Route index exact element={<RequisitionerDashboard />} />
                    <Route path="formbuilder" exact element={<FormBuilder />} />

                </Route>

            </Routes>
        </Router>
    );
}

export default App;
