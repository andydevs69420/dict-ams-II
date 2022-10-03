/*
 *   Copyright (c) 2022 andydevs69420
 *   All rights reserved.
 */


import React from "react";

/*
 | Other components
 */
import TextFormField from "../textformfield/TextFormField";
import TextArea from "../textarea/TextArea";


/**
 * JobOrderItem
 * @param {any} jokey item key
 * @param {CallableFunction} onDestroy on item close callback
 * @returns JSXElement
 **/
const JobOrderItem = ({
    jokey,
    onDestroy
}) => {

    const onDelete = (e) => {
        onDestroy?.call(null, jokey);
    }

    return (
        <li className="purchaserequestitem list-group-item p-0 rounded-0">
            <div className="card border-0 rounded-0">
                <div className="card-header d-flex justify-content-between align-items-center border-0 bg-transparent">
                    <h4 className="d-inline h4 m-0">Item {jokey}</h4>
                    {(jokey != 1) && <button className="btn btn-close rounded-circle" onClick={onDelete}></button>}
                </div>
                <div className="card-body">
                    <div className="container-fluid p-0">
                        <div className="row">
                            {/* stock number */}
                            <div className="col-12 col-md-6 mb-2">
                                <label htmlFor={"stock" + jokey} className="text-muted">job title</label>
                                <TextFormField
                                    id={"stock" + jokey}
                                    icon={<i className="bi bi-person-workspace"></i>}
                                    type="text"
                                    name="jobtitle[]"
                                    borderColor="#a8bdb7"
                                    placeholder="job title"
                                    required />
                            </div>

                            {/* quantity */}
                            <div className="col-12 col-md-6 my-2 mt-md-0">
                                <label htmlFor={"quantity" + jokey} className="text-muted">quantity</label>
                                <TextFormField
                                    id={"quantity" + jokey}
                                    icon={<i className="bi bi-calculator"></i>}
                                    type="number"
                                    name="quantity[]"
                                    borderColor="#a8bdb7"
                                    placeholder="quantity"
                                    required />
                            </div>

                            {/* job salary */}
                            <div className="col-12 col-md-6 my-2">
                                <label htmlFor={"salary" + jokey} className="text-muted">salary</label>
                                <TextFormField
                                    id={"salary" + jokey}
                                    icon={<i className="bi bi-cash"></i>}
                                    type="number"
                                    name="salary[]"
                                    borderColor="#a8bdb7"
                                    placeholder="salary"
                                    required />
                            </div>

                            {/* total cost */}
                            <div className="col-12 col-md-6 my-2">
                                <label htmlFor={"totalcost" + jokey} className="text-muted">total cost</label>
                                <TextFormField
                                    id={"totalcost" + jokey}
                                    icon={<i className="bi bi-cash-coin"></i>}
                                    type="number"
                                    name="totalcost[]"
                                    borderColor="#a8bdb7"
                                    placeholder="total cost"
                                    required />
                            </div>

                            {/* job description */}
                            <div className="col-12 my-2">
                                <label htmlFor={"description" + jokey} className="text-muted">job description</label>
                                <TextArea
                                    id={"description" + jokey}
                                    type="text"
                                    name="jobdescription[]"
                                    borderColor="#a8bdb7"
                                    placeholder="job description"
                                    required />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
}

export default JobOrderItem;
