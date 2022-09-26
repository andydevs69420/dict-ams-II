/*
 *   Copyright (c) 2022
 *   All rights reserved.
 */
import React from "react";
import TextFormField from "../../components/textformfield/TextFormField";
import "./style/signin.css";

const Signin = () => {

    return (
        <div id="signin__bg" className="d-block position-relative w-100 h-100">
            {/* overlay */}
            <div id="signin__overlay" className="d-block position-absolute top-0 w-100 h-100"></div>

            {/* main */}
            <div id="signin__expanded-panel" className="ms-0 ms-sm-5 py-5 border shadow-sm">
                {/*  */}
                <h2 id="signin__label" className="px-3 h2 fw-bold">SIGNIN</h2>

                <form className="mt-5 px-3" action="" method="POST">
                    <div className="container-fluid px-0">
                        <div className="row">
                            <div className="col-12 pb-2">
                                <TextFormField placeholder="email" elevation={1}/>
                            </div>
                            <div className="col-12 py-2">
                                <TextFormField placeholder="password" elevation={1}/>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}


export default Signin;
