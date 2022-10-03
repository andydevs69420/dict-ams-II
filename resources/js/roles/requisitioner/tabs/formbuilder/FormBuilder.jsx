/*
 *   Copyright (c) 2022 andydevs69420
 *   All rights reserved.
 */

import React, { useState } from "react";
import "./style/formbuilder.css";


/*
 | Other components
 */
import Dropdown from "../../../../components/dropdown/Dropdown";

import PurchaseRequest from "../../../../components/purchaserequest/PurchaseRequest";
import JobOrder from "../../../../components/joborder/JobOrder";

const FormBuilder = () => {

    const [formType, updateFormType] = useState(1);

    const onSelectType = (value) => {
        updateFormType(parseInt(value));
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
                            <PurchaseRequest />
                            :
                            <JobOrder />
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FormBuilder;
