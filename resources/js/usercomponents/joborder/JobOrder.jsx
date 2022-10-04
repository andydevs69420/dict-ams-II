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
}) => {

    const [purchaseItem, updateItem] = useState(
        items.map((e, idx) => {
            return (
                <JobOrderItem
                    key={idx}
                    jokey={idx + 1}
                    onDestroy={removeItem} />
            );
        })
    );

    const [person, personUpdate] = useState({
        budgetOfficer       : null,
        recommendingApproval: null,
    });

    useEffect(() => {
        if (purchaseItem.length <= 0) addItem(null);
    }, []);

    const addItem = (e) => {
        updateItem((oldItems) => [
            ...oldItems,
            // append new item
            <JobOrderItem
                key={oldItems.length}
                jokey={oldItems.length + 1}
                onDestroy={removeItem} />
        ]);
    }

    const removeItem = (jokey) => {
        updateItem((old) => {
            let newArr = [... old];
            delete newArr[jokey-1];
            return newArr;
        });
    }

    return (
        <div className="card w-100 rounded-0">

            {/* modal placement */}

            <div className="card-header border-0 bg-transparent">
                <h3 className="card-title">JobOrder</h3>
            </div>
            <div className="card-body">
                <ul className="list-group">
                    {purchaseItem}
                </ul>
                <div className="row">
                    <div className="col-12 my-2">
                        {
                            // render if no item | not read-only mode
                            (!(purchaseItem.length <= 0)) &&
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
                            id="purose"
                            name="purpose"
                            borderColor="#a8bdb7"
                            placeholder="purpose" />
                    </div>

                    {/* budget officer */}
                    <div className="col-12 col-md-6 my-2">
                        <label htmlFor="purchase__request-budgetofficer" className="text-muted">budget officer</label>
                        <Dropdown
                            id="purchase__request-budgetofficer"
                            icon={<i className="bi bi-person-fill"></i>}
                            name="budget-officer"
                            borderColor="#a8bdb7"
                            placeholder="budget officer" />
                    </div>

                    {/* recommending approval */}
                    <div className="col-12 col-md-6 my-2">
                        <label htmlFor="purchase__request-recommending-approval" className="text-muted">recommending approval</label>
                        <Dropdown
                            id="purchase__request-recommending-approval"
                            icon={<i className="bi bi-person-fill"></i>}
                            name="recommending-approval"
                            borderColor="#a8bdb7"
                            placeholder="recommending approval" />
                    </div>

                    {/* generate btn */}
                    <div className="col-12 my-2">
                        {
                            // render if no item | not read-only mode
                            (!(purchaseItem.length <= 0)) &&
                            // add control
                            <span className="d-inline-block rounded-1 shadow-sm float-end">
                                <button className="btn btn-sm btn-primary px-3" type="submit">
                                    <i className="bi bi-gear-fill"></i> GENERATE
                                </button>
                            </span>
                        }
                    </div>

                </div>
            </div>
        </div>
    );
}

export default JobOrder;
