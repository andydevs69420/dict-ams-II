/*
 *   Copyright (c) 2022 andydevs69420
 *   All rights reserved.
 */


import React from "react";
import "./style/purchaserequestitem.css";


/*
 | Other components
 */
import TextFormField from "../textformfield/TextFormField";
import Dropdown from "../dropdown/Dropdown";


const PurchaseRequestItem = ({
    prkey,
}) => {

    return (
        <li className="purchaserequestitem list-group-item p-0 rounded-0">
            <div className="card border-0 rounded-0">
                <div className="card-body px-0">
                    <div className="container-fluid p-0">
                        <div className="row">
                            {/* stock number */}
                            <div className="col-12 col-sm-6">
                                <label htmlFor="stock" className="text-muted">stock no</label>
                                <TextFormField
                                    id="stock"
                                    type="number"
                                    borderColor="#a8bdb7"
                                    placeholder="stock number" />
                            </div>

                            {/* unit */}
                            <div className="col-12 col-sm-6">
                                <label htmlFor="unit" className="text-muted">unit</label>
                                <Dropdown
                                    id="unit"
                                    borderColor="#a8bdb7"
                                    placeholder="stock number"
                                    children={[
                                        {id: 1, value: "inches"    },
                                        {id: 2, value: "pieces"    },
                                        {id: 3, value: "centimeter"},
                                        {id: 4, value: "millimeter"},
                                    ]} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
}

export default PurchaseRequestItem;
