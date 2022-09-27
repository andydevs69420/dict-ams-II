/*
 *   Copyright (c) 2022
 *   All rights reserved.
 */



import React from "react"
import "./style/app.css";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


/*
| Page
*/

import Signin from "../page/signin/Signin";
import Signup from "../page/signup/Signup";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<h1 className="display-1">INDEX</h1>}></Route>
                <Route path="/signin" element={<Signin />}></Route>
                <Route path="/signup" element={<Signup />}></Route>
            </Routes>
        </Router>
    );
}

export default App;
