/*
 *   Copyright (c) 2022 andydevs69420
 *   All rights reserved.
 */

import React, { useState, useEffect } from "react";


/*
 | Other components
 */
import PurchaseRequestItem from "../purchaserequestitem/PurcahseRequestItem";


/**
 * PurchaseRequest
 * @param {Array[Object]} items purchase items
 * @param {Boolean} isGenerated if items is generated
 **/
const PurchaseRequest = ({
    items = [],
    isGenerated = false
}) => {

    const [purchaseItem, updateItem] = useState(items);

    useEffect(() => {
        if (!isGenerated) addItem(null);
    }, []);

    const addItem = (e) => {
        updateItem((oldItems) => [...oldItems, <PurchaseRequestItem />]);
    }

    return (
        <div className="card w-100 rounded-0">
            <div className="card-header border-0 bg-transparent">
                <h3 className="card-title">Purchase Request</h3>
            </div>
            <div className="card-body">
                <ul className="list-group shadow-sm">
                    {
                        // render list
                        purchaseItem.map((e, idx) => {
                            return (
                                <PurchaseRequestItem key={idx} />
                            );
                        })
                    }
                </ul>
                {
                    // render if no item | not read-only mode
                    (!isGenerated) &&
                    // add control
                    <span className="d-inline-block my-2 rounded-1 shadow-sm float-end">
                        <button className="btn btn-sm btn-primary px-3" onClick={addItem}>
                            <i className="bi bi-plus"></i> Add
                        </button>
                    </span>
                }
            </div>
        </div>
    );
}

export default PurchaseRequest;
