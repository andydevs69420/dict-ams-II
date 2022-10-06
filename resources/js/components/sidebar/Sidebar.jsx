/*
 *   Copyright (c) 2022 andydevs69420
 *   All rights reserved.
 */




import React, {createRef, useCallback} from "react";
import "./style/sidebar.css";
import conf from "./particles.conf.json";


import { NavLink } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";


/*
 | Other component
 */
import DICT_LOGO from "../../assets/images/dict-logo.png"


/**
 * Sidebar
 * @param {String} id nav id
 * @param {Object} items nav items
 * @returns JSXElement
 **/
const Sidebar = ({
    id,
    children,
    items = {sample:{icon:<i className="bi bi-link"></i>, link:"sample"}}
}) => {
    id = (id)?id:"sidebar";

    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);


    return (
        <div className="sidebar bg-white shadow-sm">
            <div id={id} className="sidebar__sidebar-collapse collapse collapse-horizontal show">
                <nav className="sidebar__nav navbar navbar-light">
                    {/* close */}
                    <div className="d-block d-sm-none position-absolute top-0 mx-0 my-2 w-100" style={{zIndex: 4}}>
                        <button
                            className="d-block ms-auto me-3 btn btn-close"
                            data-bs-toggle="collapse"
                            data-bs-target={"#" + id}></button>
                    </div>
                    {/* brand */}
                    <div className="sidebar__brand-wrapper position-relative bg-primary">
                        {/* particles */}
                        <Particles id="tsparticles" init={particlesInit} options={conf} />
                        {/* brand main */}
                        <div className="d-flex position-absolute top-0 w-100 h-100 justify-content-center align-items-center">
                            <img src={DICT_LOGO} alt="dict-logo" className="img-fluid" width="60%" />
                        </div>
                    </div>

                    {/* default item | dashboard */}
                    <ul className="navbar-nav px-3 mx-0 my-2">
                        <li className="nav-item">
                            <NavLink className={
                                ({isActive}) => isActive?
                                    "d-block w-100 px-2 py-1 text-decoration-none rounded-1 text-center text-dark fw-bold"
                                    :
                                    "d-block w-100 px-2 py-1 text-decoration-none border border-primary rounded-1 text-center text-muted"
                            } style={({isActive}) => isActive?{backgroundColor: "cyan"}:undefined} to="/app/requisitioner" end>Dashboard</NavLink>
                        </li>
                    </ul>
                    {/* items */}
                    <ul className="navbar-nav px-3 py-2 ps-sm-5 pe-sm-2">
                        {Object.keys(items).map((key, index) => {
                            return (
                                <li className="sidebar__group-list nav-item" key={`ul->li:${key}`}>
                                    <span>
                                        {items[key].icon}
                                        <label htmlFor={key} key={`li->label:${key}`} className="sidebar__group-label ms-2 fs-6 fw-bolder text-dark antialiased">{key}</label>
                                    </span>
                                    <ul className="navbar-nav p-2" key={`li->ul:${key}`}>
                                        {items[key].link.map((link, index) => {
                                            return (
                                                <li className="sidebar__nav-item nav-item px-1" key={`li->ul->li:${link}`}>
                                                    <NavLink className={
                                                        ({isActive}) => isActive?
                                                            "px-2 py-1 text-decoration-none rounded-1 text-dark fw-bold"
                                                            :
                                                            "px-2 py-1 text-decoration-none rounded-1 text-muted"
                                                    } style={({isActive}) => isActive?{backgroundColor: "cyan"}:undefined} to={(link.toLowerCase()).replaceAll(/\s/g, "")}>{link}</NavLink>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Sidebar;
