/*
 *   Copyright (c) 2022 andydevs69420
 *   All rights reserved.
 */

import React from "react";
import "./style/signup.css";

import { useNavigate } from "react-router-dom";

/*
 | Other component
 */
import TextFormField from "../../components/textformfield/TextFormField";
import RaisedButton from "../../components/raisedbutton/RaisedButton";
import Dropdown from "../../components/dropdown/Dropdown";


const Signup = () => {

    const navigate = useNavigate();

    return (
        <div className="d-block d-sm-flex justify-content-center align-items-center w-100 h-100">
            <div className="signup__card card py-5 py-sm-0 border-0 rounded-0 shadow-sm">

                {/* custom header */}
                <div id="signup__header" className="d-block p-0 p-sm-3">
                    <h2 className="px-3 px-sm-0 h2 fw-bold">SIGNUP</h2>
                    <small className="d-none d-sm-inline-block small text-light">DICT ams signup page</small>
                </div>

                <div className="signup__card-body card-body border-0">
                    <form className="mt-4 mt-sm-0" action="#" method="GET">
                        <div className="container-fluid px-0 py-0 py-sm-3">
                            <div className="row">
                                {/* last name */}
                                <div className="col-6 pb-2">
                                    <TextFormField
                                        icon={
                                            <i className="bi bi-person-circle"></i>
                                        }
                                        size="sm"
                                        fillColor="#FFF3E0"
                                        elevation={1}
                                        placeholder="lastname"/>
                                </div>
                                {/* first name */}
                                <div className="col-6 pb-2">
                                    <TextFormField
                                        icon={
                                            <i className="bi bi-person-circle"></i>
                                        }
                                        size="sm"
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
                                        size="sm"
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
                                        size="sm"
                                        fillColor="#FFF3E0"
                                        type="password"
                                        elevation={1}
                                        placeholder="password"/>
                                </div>
                                {/* password */}
                                <div className="col-6 py-2">
                                    <TextFormField
                                        icon={
                                            <i className="bi bi-check-circle-fill"></i>
                                        }
                                        size="sm"
                                        fillColor="#FFF3E0"
                                        type="password"
                                        elevation={1}
                                        placeholder="confirm password" />
                                </div>
                                {/* division */}
                                <div className="col-12 col-sm-6 py-2">
                                    <Dropdown
                                        icon={
                                            <i className="bi bi-building"></i>
                                        }
                                        size="sm"
                                        fillColor="#FFF3E0"
                                        type="password"
                                        elevation={1}
                                        placeholder="select division" />
                                </div>
                                {/* office */}
                                <div className="col-12 col-sm-6 py-2">
                                    <Dropdown
                                        icon={
                                            <i className="bi bi-geo-alt-fill"></i>
                                        }
                                        size="sm"
                                        fillColor="#FFF3E0"
                                        type="password"
                                        elevation={1}
                                        placeholder="select office" />
                                </div>
                                {/* role */}
                                <div className="col-12 col-sm-6 py-2">
                                    <Dropdown
                                        icon={
                                            <i className="bi bi-universal-access"></i>
                                        }
                                        size="sm"
                                        fillColor="#FFF3E0"
                                        type="password"
                                        elevation={1}
                                        placeholder="select role" />
                                </div>
                                {/* signup btn */}
                                <div className="col-12 col-sm-3 offset-0 offset-sm-3 py-2 text-right">
                                    <RaisedButton
                                        text="SIGNUP"
                                        size="sm"
                                        variant="danger" />
                                </div>
                                {/* signin btn */}
                                <div className="col-4 col-sm-3 offset-8 offset-sm-9 py-2 text-right">
                                    <RaisedButton
                                        text="SIGNIN"
                                        size="sm"
                                        variant="dark"
                                        onClick={() => {
                                            navigate("/signin");
                                        }} />
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
