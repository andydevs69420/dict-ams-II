/*
 *   Copyright (c) 2022
 *   All rights reserved.
 */
import React from "react";
import "./style/signin.css";

import { useNavigate } from "react-router-dom";


/*
 | Other component
 */
import TextFormField from "../../components/textformfield/TextFormField";
import RaisedButton from "../../components/raisedbutton/RaisedButton";


const Signin = () => {

    const navigate = useNavigate();

    return (
        <div id="signin__bg" className="d-block position-relative w-100 h-100">
            {/* overlay */}
            <div id="signin__overlay" className="d-block position-absolute top-0 w-100 h-100"></div>

            {/* main */}
            <div id="signin__expanded-panel" className="ms-0 ms-sm-5 py-5 border shadow-sm">
                {/*  */}
                <h2 id="signin__label" className="px-3 h2 fw-bold">SIGNIN</h2>

                <form className="mt-5 px-3" action="#" method="POST">
                    <div className="container-fluid px-0">
                        <div className="row">
                            {/* email field */}
                            <div className="col-12 pb-2">
                                <TextFormField
                                    elevation={1}
                                    icon={
                                        <i className="bi bi-envelope-fill"></i>
                                    }
                                    type="email"
                                    borderColor="grey"
                                    required={true}
                                    placeholder="email" />
                            </div>
                            {/* password field */}
                            <div className="col-12 py-2">
                                <TextFormField
                                    elevation={1}
                                    icon={
                                        <i className="bi bi-lock-fill"></i>
                                    }
                                    type="password"
                                    borderColor="grey"
                                    required={true}
                                    placeholder="password" />
                            </div>
                            {/* remember */}
                            <div className="col-12">
                                <span className="form-check">
                                    <input id="signin__remember-me" className="form-check-input" type="checkbox" />
                                    <label htmlFor="signin__remember-me" className="form-check-label" style={{
                                        userSelect: "none"
                                    }}>Remember me</label>
                                </span>
                            </div>
                            {/* signin button */}
                            <div className="col-12 py-2">
                                <RaisedButton id="signin_signin-btn" text="SIGNIN" variant="success" />
                            </div>
                            {/* to signup */}
                            <div className="col-12 pt-2 text-center">
                                <div className="d-inline-block rounded-pill shadow">
                                    <button className="btn btn-sm btn-dark px-3 py-1 rounded-pill" onClick={() => {
                                        navigate("/signup");
                                    }}>
                                        <span className="text-light">signup</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}


export default Signin;
