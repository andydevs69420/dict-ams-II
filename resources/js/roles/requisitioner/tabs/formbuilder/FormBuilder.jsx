/*
 *   Copyright (c) 2022 andydevs69420
 *   All rights reserved.
 */

import React, { useState } from "react";
import "./style/formbuilder.css";

import { useNavigate } from "react-router-dom";

/*
 | Other components
 */
import Dropdown from "../../../../components/dropdown/Dropdown";
import PurchaseRequest from "../../../../usercomponents/purchaserequest/PurchaseRequest";
import JobOrder from "../../../../usercomponents/joborder/JobOrder";




async function send(route, data, onOk, onBad)
{
    try {
        let response = await axios.post(`/requisitioner/${route}`, data, {
            headers: {
                "content-type": "application/json"
            }
        });

        switch(response.data.status)
        {
            case "ok":
                return onOk?.call(null, response.data);
            case "bad":
                return onBad?.call(null, response.data);
        }
    } catch(err) {
        console.error(err);
    }
}

const FormBuilder = () => {
    const navigate = useNavigate();
    const [formType, updateFormType] = useState(1);

    const onSelectType = (value) => {
        updateFormType(parseInt(value));
    }

    const savePR = (formInfo) => {
        send("newPurchaseRequest", formInfo, (okData) => {
            /*statement*/
            navigate("/app/requisitioner/newrequest");
        }, (badData) => {
            /*statement*/
            // TODO: add error
        });
    }

    const saveJO = (formInfo) => {
        send("newJobOrder", formInfo, (okData) => {
            /*statement*/
            console.log("Ok!", okData);
        }, (badData) => {
            /*statement*/
            // TODO: add error
            console.log("Bad!");
        });
    }

    return (
        <div id="formbuilder" className="d-block w-100">
            <div className="container-fluid p-2 bg-white shadow-sm">
                {/* controls */}
                <div className="row justify-content-between">

                    {/* label */}
                    <div className="col-12 col-md-auto d-flex align-items-center">
                        <span className="text-muted">Form Generator v.0.1</span>
                    </div>

                    {/* selector */}
                    <div className="col-12 col-md-auto">
                        <Dropdown
                            fillColor="#eeeeee"
                            elevation={1}
                            borderColor="#ffffff"
                            placeholder="select form type"
                            onChange={onSelectType}
                            value={formType}
                            children={[
                                {id: 1, value: "Purchase Request"},
                                {id: 2, value: "Job Order"},
                            ]} />
                    </div>
                </div>
                {/* main editor */}
                <div className="row mt-2">
                    <div className="col-12">
                        {
                            (formType == 1)?
                            <PurchaseRequest onSave={savePR} />
                            :
                            <JobOrder onSave={saveJO} />
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FormBuilder;
