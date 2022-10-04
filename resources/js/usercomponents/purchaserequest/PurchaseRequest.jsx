/*
 *   Copyright (c) 2022 andydevs69420
 *   All rights reserved.
 */

import React, { useState, useEffect } from "react";


/*
 | Other components
 */
import PurchaseRequestItem from "../purchaserequestitem/PurchaseRequestItem";
import TextArea from "../../components/textarea/TextArea";
import Dropdown from "../../components/dropdown/Dropdown";



/**
 * PurchaseRequest
 * @param {Array[Object]} items purchase items [{stock:..., unit:..., description:...}, {...}]
 * @returns JSXElement
 **/
const PurchaseRequest = ({
    items = [],
}) => {

    const [purchaseItem, updateItem] = useState(
        items.map((e, idx) => (<PurchaseRequestItem key={idx} prkey={idx + 1} onDestroy={removeItem} />))
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
            <PurchaseRequestItem key={oldItems.length} prkey={oldItems.length + 1} onDestroy={removeItem} />
        ]);
    }

    const removeItem = (prkey) => {
        updateItem((old) => {
            let newArr = [... old];
            delete newArr[prkey-1];
            return newArr;
        });
    }

    const submit = (e) => {
        e.preventDefault();

        let stock, units, qntty, unitc, total, descr, purpose;
        
        stock = $("[name='stockno[]']"    );
        units = $("[name='unit[]']"       );
        qntty = $("[name='quantity[]']"   );
        unitc = $("[name='unitcost[]']"   );
        total = $("[name='totalcost[]']"  );
        descr = $("[name='description[]']");

        /* format items */
        let formatted = [];

        for (let idx = 0; idx < stock.length; idx++)
        {
            formatted.push({
                stock: stock[idx].value,
                unit: units[idx].value,
                quantity: qntty[idx].value,
                unitCost: unitc[idx].value,
                totalCost: total[idx].value,
                description: descr[idx].value
            });
        }
        
        purpose = $("#purpose");

        console.log({
            items: formatted,
            purpose: purpose.value
        });
    }

    return (
        <div className="card w-100 rounded-0">

            <div className="card-header border-0 bg-transparent">
                <h3 className="card-title">Purchase Request</h3>
            </div>

            <div className="card-body">
                <form action="#" method="POST" onSubmit={submit}>
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
                                    <button className="btn btn-sm btn-primary px-3" type="button" onClick={addItem}>
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
                                placeholder="purpose"
                                required />
                        </div>

                        {/* budget officer */}
                        <div className="col-12 col-md-6 my-2">
                            {/* <label htmlFor="purchase__request-budgetofficer" className="text-muted">budget officer</label>
                            <Dropdown
                                id="purchase__request-budgetofficer"
                                icon={<i className="bi bi-person-fill"></i>}
                                name="budget-officer"
                                borderColor="#a8bdb7"
                                placeholder="budget officer"
                                required /> */}
                        </div>

                        {/* recommending approval */}
                        <div className="col-12 col-md-6 my-2">
                            {/* <label htmlFor="purchase__request-recommending-approval" className="text-muted">recommending approval</label>
                            <Dropdown
                                id="purchase__request-recommending-approval"
                                icon={<i className="bi bi-person-fill"></i>}
                                name="recommending-approval"
                                borderColor="#a8bdb7"
                                placeholder="recommending approval"
                                required /> */}
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
                </form>
            </div>
        </div>
    );
}

export default PurchaseRequest;
