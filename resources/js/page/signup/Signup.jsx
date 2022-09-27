/*
 *   Copyright (c) 2022
 *   All rights reserved.
 */


import React from "react";
import "./style/signup.css";

/*
 | Other component
 */
import TextFormField from "../../components/textformfield/TextFormField";
import RaisedButton from "../../components/raisedbutton/RaisedButton";


const Signup = () => {
    return (
        <div className="d-block d-sm-flex justify-content-center align-items-center w-100 h-100">
            <div className="signup__card card py-5 py-sm-0 border-0 rounded-0 shadow-sm">

                {/* custom header */}
                <div id="signup__header" className="d-block p-0 p-sm-3">
                    <h2 className="px-3 px-sm-0 h2 fw-bold">SIGNUP</h2>
                </div>

                <div className="signup__card-body card-body border-0">
                    <form className="mt-5 mt-sm-0" action="#" method="GET">
                        <div className="container-fluid px-0 py-0 py-sm-3">
                            <div className="row">
                                {/* last name */}
                                <div className="col-12 col-sm-6 pb-2">
                                    <TextFormField
                                        icon={
                                            <i className="bi bi-person-circle"></i>
                                        }
                                        fillColor="#FFF3E0"
                                        elevation={1}
                                        placeholder="lastname"/>
                                </div>
                                {/* first name */}
                                <div className="col-12 col-sm-6 py-2 pt-sm-0 pb-sm-2">
                                    <TextFormField
                                        icon={
                                            <i className="bi bi-person-circle"></i>
                                        }
                                        fillColor="#FFF3E0"
                                        elevation={1}
                                        placeholder="firstname"/>
                                </div>
                                {/* email */}
                                <div className="col-12 py-2">
                                    <TextFormField
                                        icon={
                                            <i className="bi bi-envelope-fill"></i>
                                        }
                                        type="email"
                                        fillColor="#FFF3E0"
                                        elevation={1}
                                        placeholder="email"/>
                                </div>
                                {/* password */}
                                <div className="col-6 py-2">
                                    <TextFormField
                                        icon={
                                            <i className="bi bi-lock-fill"></i>
                                        }
                                        fillColor="#FFF3E0"
                                        type="password"
                                        elevation={0}
                                        placeholder="password"/>
                                </div>
                                {/* password */}
                                <div className="col-6 py-2">
                                    <TextFormField
                                        icon={
                                            <i className="bi bi-check-circle-fill"></i>
                                        }
                                        fillColor="#FFF3E0"
                                        type="password"
                                        elevation={0}
                                        placeholder="confirm password" />
                                </div>
                                {/* signup btn */}
                                <div className="col-12 col-sm-3 offset-0 offset-sm-9 py-2 text-right">
                                    <RaisedButton
                                        text="SIGNUP"
                                        variant="danger" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signup;
