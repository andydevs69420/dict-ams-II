/*
 *   Copyright (c) 2022
 *   All rights reserved.
 */


import "./bootstrap";
import React from "react";
import ReactDOM from "react-dom";

/*
| Other components
*/
import App from "./app/App";


ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
