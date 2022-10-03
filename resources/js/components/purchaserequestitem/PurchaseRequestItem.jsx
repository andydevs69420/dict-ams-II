/*
 *   Copyright (c) 2022 andydevs69420
 *   All rights reserved.
 */


import React, { createRef } from "react";

/*
 | Other components
 */
import TextFormField from "../textformfield/TextFormField";
import Dropdown from "../dropdown/Dropdown";
import TextArea from "../textarea/TextArea";


/**
 * PurchaseRequestItem
 * @param {any} prkey item key
 * @param {CallableFunction} onDestroy on item close callback
 * @returns JSXElement
 **/
const PurchaseRequestItem = ({
    prkey,
    onDestroy
}) => {

    const onDelete = (e) => {
        onDestroy?.call(null, prkey);
    }

    return (
        <li className="purchaserequestitem list-group-item p-0 rounded-0">
            <div className="card border-0 rounded-0">
                <div className="card-header d-flex justify-content-between align-items-center border-0 bg-transparent">
                    <h4 className="d-inline h4 m-0">Item {prkey}</h4>
                    {(prkey != 1) && <button className="btn btn-close rounded-circle" onClick={onDelete}></button>}
                </div>
                <div className="card-body">
                    <div className="container-fluid p-0">
                        <div className="row">
                            {/* stock number */}
                            <div className="col-12 col-md-6 mb-2">
                                <label htmlFor={"stock" + prkey} className="text-muted">stock no</label>
                                <TextFormField
                                    id={"stock" + prkey}
                                    icon={<i className="bi bi-upc"></i>}
                                    type="number"
                                    name="stockno[]"
                                    borderColor="#a8bdb7"
                                    placeholder="stock number"
                                    required />
                            </div>

                            {/* unit */}
                            <div className="col-12 col-md-6 my-2 mt-md-0">
                                <label htmlFor={"unit" + prkey} className="text-muted">unit</label>
                                <Dropdown
                                    id={"unit" + prkey}
                                    icon={<i className="bi bi-basket-fill"></i>}
                                    name="unit[]"
                                    borderColor="#a8bdb7"
                                    placeholder="select unit"
                                    children={[
                                        {id: 1, value: "inches"    },
                                        {id: 2, value: "pieces"    },
                                        {id: 3, value: "centimeter"},
                                        {id: 4, value: "millimeter"},
                                    ]}
                                    required />
                            </div>

                            {/* quantity */}
                            <div className="col-12 col-md-4 my-2">
                                <label htmlFor={"quantity" + prkey} className="text-muted">quantity</label>
                                <TextFormField
                                    id={"quantity" + prkey}
                                    icon={<i className="bi bi-calculator"></i>}
                                    type="number"
                                    name="quantity[]"
                                    borderColor="#a8bdb7"
                                    placeholder="quantity"
                                    required />
                            </div>

                            {/* unit cost */}
                            <div className="col-12 col-md-4 my-2">
                                <label htmlFor={"unit" + prkey} className="text-muted">unit cost</label>
                                <TextFormField
                                    id={"unit" + prkey}
                                    icon={<i className="bi bi-cash"></i>}
                                    type="number"
                                    name="unitcost[]"
                                    borderColor="#a8bdb7"
                                    placeholder="unit cost"
                                    required />
                            </div>

                            {/* total cost */}
                            <div className="col-12 col-md-4 my-2">
                                <label htmlFor={"totalcost" + prkey} className="text-muted">total cost</label>
                                <TextFormField
                                    id={"totalcost" + prkey}
                                    icon={<i className="bi bi-cash-coin"></i>}
                                    type="number"
                                    name="totalcost[]"
                                    borderColor="#a8bdb7"
                                    placeholder="total cost"
                                    required />
                            </div>

                            {/* description */}
                            <div className="col-12 my-2">
                                <label htmlFor={"description" + prkey} className="text-muted">description</label>
                                <TextArea
                                    id={"description" + prkey}
                                    type="text"
                                    name="description[]"
                                    borderColor="#a8bdb7"
                                    placeholder="description"
                                    required />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
}

export default PurchaseRequestItem;
