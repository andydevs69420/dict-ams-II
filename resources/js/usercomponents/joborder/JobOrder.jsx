/*
 *   Copyright (c) 2022 andydevs69420
 *   All rights reserved.
 */

import React, { useState, useEffect } from "react";



/*
 | Other components
 */
import JobOrderItem from "../joborderitem/JobOrderItem";
import TextArea from "../../components/textarea/TextArea";
import Dropdown from "../../components/dropdown/Dropdown";


/**
 * PurchaseRequest
 * @param {Array[Object]} items purchase items [{stock:..., unit:..., description:...}, {...}]
 * @returns JSXElement
 **/
const JobOrder= ({
    items = [],
    onSave,
}) => {

    const [jobItem, updateItem] = useState(
        items.map((e, idx) => (<JobOrderItem key={idx} jokey={idx + 1} onDestroy={removeItem} />))
    );

    const [personel, personelUpdate] = useState({
        budgetOfficer       : [],
        recommendingApproval: [],
    });

    // add default item onload
    useEffect(() => {
        if (jobItem.length <= 0) addItem(null);
    }, []);

    // get required personel
    useEffect(async () => {
        let bo, ra;
        try {
            bo = await axios.get("/requisitioner/get/role?role=Budget%20Officer");
            ra = await axios.get("/requisitioner/get/role?role=Regional%20director");

            if (bo.data.status === "ok")
            { personelUpdate((old) => ({...old, budgetOfficer: bo.data.data})); }

            if (ra.data.status === "ok")
            { personelUpdate((old) => ({...old, recommendingApproval: ra.data.data})); }
        } catch(err) {
            console.error(err);
        }
    }, []);

    const addItem = (e) => {
        updateItem((oldItems) => [
            ...oldItems,
            // append new item
            <JobOrderItem key={oldItems.length} jokey={oldItems.length + 1} onDestroy={removeItem} />
        ]);
    }

    const removeItem = (jokey) => {
        updateItem((old) => {
            let newArr = [... old];
            delete newArr[jokey-1];
            return newArr;
        });
    }

    const submit = (e) => {
        e.preventDefault();

        let jobtitle, quantity, salary, total, descr, purpose, budgetOfficer, recommendingApproval;

        jobtitle = $("[name='jobtitle[]']"   );
        quantity = $("[name='quantity[]']"   );
        salary   = $("[name='salary[]']"     );
        total    = $("[name='totalcost[]']"  );
        descr    = $("[name='jobdescription[]']");

        /* format items */
        let formatted = [];

        for (let idx = 0; idx < jobtitle.length; idx++)
        {
            formatted.push({
                jobtitle: jobtitle[idx].value,
                quantity: quantity[idx].value,
                salary: salary[idx].value,
                total: total[idx].value,
                description: descr[idx].value
            });
        }

        purpose = $("#purpose");
        budgetOfficer = $("#job__order-budgetofficer");
        recommendingApproval = $("#job__order-recommending-approval");

        onSave?.call(null, {
            items: formatted,
            purpose: purpose[0].value,
            budgetOfficer: budgetOfficer[0].value,
            recommendingApproval: recommendingApproval[0].value
        });
    }

    return (
        <div className="card w-100 rounded-0">

            {/* modal placement */}

            <div className="card-header border-0 bg-transparent">
                <h3 className="card-title">JobOrder</h3>
            </div>
            <div className="card-body">
                <form action="#" method="POST" onSubmit={submit}>
                    <ul className="list-group">
                        {jobItem}
                    </ul>
                    <div className="row">
                        <div className="col-12 my-2">
                            {
                                // render if no item | not read-only mode
                                (!(jobItem.length <= 0)) &&
                                // add control
                                <span className="d-inline-block rounded-1 shadow-sm float-end">
                                    <button className="btn btn-sm btn-primary px-3" onClick={addItem}>
                                        <i className="bi bi-plus"></i> Add
                                    </button>
                                </span>
                            }
                        </div>

                        {/* purpose */}
                        <div className="col-12 my-2">
                            <label htmlFor="purpose" className="text-muted">purpose</label>
                            <TextArea
                                id="purpose"
                                name="purpose"
                                borderColor="#a8bdb7"
                                placeholder="purpose" />
                        </div>

                        {/* budget officer */}
                        <div className="col-12 col-md-6 my-2">
                            <label htmlFor="job__order-budgetofficer" className="text-muted">budget officer</label>
                            <Dropdown
                                id="job__order-budgetofficer"
                                icon={<i className="bi bi-person-fill"></i>}
                                name="budget-officer"
                                borderColor="#a8bdb7"
                                placeholder="budget officer"
                                required
                                children={
                                    personel.budgetOfficer?.map((bo) => ({id: bo.user_id, value: `${bo.lastname} ${bo.firstname}`}))
                                } />
                        </div>

                        {/* recommending approval */}
                        <div className="col-12 col-md-6 my-2">
                            <label htmlFor="job__order-recommending-approval" className="text-muted">recommending approval</label>
                            <Dropdown
                                id="job__order-recommending-approval"
                                icon={<i className="bi bi-person-fill"></i>}
                                name="recommending-approval"
                                borderColor="#a8bdb7"
                                placeholder="recommending approval"
                                required
                                children={
                                    personel.recommendingApproval?.map((ra) => ({id: ra.user_id, value: `${ra.lastname} ${ra.firstname}`}))
                                } />
                        </div>

                        {/* generate btn */}
                        <div className="col-12 my-2">
                            {
                                // render if no item | not read-only mode
                                (!(jobItem.length <= 0)) &&
                                // add control
                                <span className="d-inline-block rounded-1 shadow-sm float-end">
                                    <button className="btn btn-sm btn-primary px-3" type="submit">
                                        <i className="bi bi-save"></i> Save
                                    </button>
                                </span>
                            }
                        </div>

                    </div>
                </form>
            </div>
        </div>
    );
}

export default JobOrder;
