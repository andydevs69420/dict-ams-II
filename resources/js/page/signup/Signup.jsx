/*
 *   Copyright (c) 2022 andydevs69420
 *   All rights reserved.
 */

import React, { useEffect, useState } from "react";
import "./style/signup.css";

import { useNavigate } from "react-router-dom";


/*
 | Other component
 */
import TextFormField from "../../components/textformfield/TextFormField";
import RaisedButton from "../../components/raisedbutton/RaisedButton";
import Dropdown from "../../components/dropdown/Dropdown";

import axios from "axios";


const Signup = () => {

    const navigate = useNavigate();
    const [response , updateResponse ] = useState({
        email   : "",
        password: "",
        division: "",
        office  : "",
        role    : "",
    });
    const [essential, updateEssential] = useState({
        division: [],
        office  : [],
        roles   : []
    });

    const [submition, updateSubmition] = useState(false);

    useEffect(async () => {
        try {
            let response = await axios.get(import.meta.env.VITE_APP_HOST + "/api/signup-essential");
                updateEssential(response.data);
        } catch(err) {
            console.error(err);
        }
    }, []);

    const submit = async (e) => {
        e.preventDefault();

        if (submition) return;

        try {
            // mark as submitting!
            updateSubmition(true);

            let response = await axios.post("/api/signup", {
                lastname : document.getElementById("lastname" ).value,
                firstname: document.getElementById("firstname").value,
                email    : document.getElementById("email"    ).value,
                password : document.getElementById("password" ).value,
                confirm_password: document.getElementById("confirmpassword").value,
                division : document.getElementById("division" ).value,
                office   : document.getElementById("office"   ).value,
                role     : document.getElementById("role"     ).value
            });



        } catch (err) {
            console.error(err);
            updateSubmition(false);
        }
    }

    return (
        <div className="d-block d-sm-flex justify-content-center align-items-center w-100 h-100">
            <div className="signup__card card py-5 py-sm-0 border-0 rounded-0 shadow-sm">

                {/* custom header */}
                <div id="signup__header" className="d-block p-0 p-sm-3">
                    <h2 className="px-3 px-sm-0 h2 fw-bold">SIGNUP</h2>
                    <small className="d-none d-sm-inline-block small text-light">DICT ams signup page</small>
                </div>

                <div className="signup__card-body card-body border-0">
                    <form className="mt-4 mt-sm-0" action="#" method="POST" onSubmit={submit}>
                        <div className="container-fluid px-0 py-0 py-sm-3">
                            <div className="row">
                                {/* last name */}
                                <div className="col-6 pb-2">
                                    <TextFormField
                                        id="lastname"
                                        icon={
                                            <i className="bi bi-person-circle"></i>
                                        }
                                        pattern="[a-zA-Z]+(\s\.?[a-zA-Z]+)?"
                                        size="sm"
                                        fillColor="#FFF3E0"
                                        elevation={1}
                                        placeholder="lastname"
                                        required />
                                </div>
                                {/* first name */}
                                <div className="col-6 pb-2">
                                    <TextFormField
                                        id="firstname"
                                        icon={
                                            <i className="bi bi-person-circle"></i>
                                        }
                                        pattern="[a-zA-Z\s+]+"
                                        size="sm"
                                        fillColor="#FFF3E0"
                                        elevation={1}
                                        placeholder="firstname"
                                        required />
                                </div>
                                {/* email */}
                                <div className="col-12 py-2">
                                    <TextFormField
                                        id="email"
                                        icon={
                                            <i className="bi bi-envelope-fill"></i>
                                        }
                                        size="sm"
                                        type="email"
                                        fillColor="#FFF3E0"
                                        elevation={1}
                                        placeholder="email"
                                        required />
                                </div>
                                {/* password */}
                                <div className="col-6 py-2">
                                    <TextFormField
                                        id="password"
                                        icon={
                                            <i className="bi bi-lock-fill"></i>
                                        }
                                        size="sm"
                                        fillColor="#FFF3E0"
                                        type="password"
                                        elevation={1}
                                        placeholder="password"
                                        required />
                                </div>
                                {/* confirm password */}
                                <div className="col-6 py-2">
                                    <TextFormField
                                        id="confirmpassword"
                                        icon={
                                            <i className="bi bi-check-circle-fill"></i>
                                        }
                                        size="sm"
                                        fillColor="#FFF3E0"
                                        name="confirm_password"
                                        type="password"
                                        elevation={1}
                                        placeholder="confirm password"
                                        required />
                                </div>
                                {/* division */}
                                <div className="col-12 col-sm-6 py-2">
                                    <Dropdown
                                        id="division"
                                        icon={
                                            <i className="bi bi-building"></i>
                                        }
                                        size="sm"
                                        fillColor="#FFF3E0"
                                        type="password"
                                        elevation={1}
                                        placeholder="select division"
                                        children={
                                            essential.division.map((e)=> ({id: e.division_id, value: e.division_name}))
                                        }
                                        required />
                                </div>
                                {/* office */}
                                <div className="col-12 col-sm-6 py-2">
                                    <Dropdown
                                        id="office"
                                        icon={
                                            <i className="bi bi-geo-alt-fill"></i>
                                        }
                                        size="sm"
                                        fillColor="#FFF3E0"
                                        type="password"
                                        elevation={1}
                                        placeholder="select office"
                                        children={
                                            essential.office.map((e)=> ({id: e.office_id, value: e.office_name}))
                                        }
                                        required />
                                </div>
                                {/* role */}
                                <div className="col-12 col-sm-6 py-2">
                                    <Dropdown
                                        id="role"
                                        icon={
                                            <i className="bi bi-universal-access"></i>
                                        }
                                        size="sm"
                                        fillColor="#FFF3E0"
                                        type="password"
                                        elevation={1}
                                        placeholder="select role"
                                        children={
                                            essential.roles.map((e)=> ({id: e.role_id, value: e.role_name}))
                                        }
                                        required />
                                </div>
                                {/* signup btn */}
                                <div className="col-12 col-sm-3 offset-0 offset-sm-3 py-2 text-right">
                                    <RaisedButton
                                        text="SIGNUP"
                                        size="sm"
                                        type="submit"
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
