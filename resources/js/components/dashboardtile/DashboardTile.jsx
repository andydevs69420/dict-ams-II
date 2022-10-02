
/*
 *   Copyright (c) 2022 andydevs69420
 *   All rights reserved.
 */

import React from "react";
import "./style/dashboardtile.css";

import { Doughnut } from "react-chartjs-2";
import {Chart, ArcElement, Tooltip, Legend,} from "chart.js";
Chart.register([Tooltip, ArcElement, Legend]);




/**
 * DashboardTile
 * @param {JSX.Element} icon tile icon
 * @param {String} label tile label
 * @param {Number} data tile data
 * @return JSXELEMENT
 **/
const DashboardTile = ({
    icon=(<i className="bi bi-android2"></i>),
    label="Tile label",
    data=69,
    iconFill
}) => {

    let color="";

    if (data < 25)
        color = "#7d4de3";
    else if (data < 50)
        color = "#5cc918";
    else if (data < 75)
        color = "#a65170";
    else
        color = "#ff0048";

    const DoughnutData = {
        labels: ["max", "value"],
        datasets: [{
            label: "data",
            data: [(100 - data < 0)?0:100 - data, data],
            backgroundColor: ["#fefefe", color],
            zIndex: 2,
            order:1,
        }],
    };

    const options = {
        maintainAspectRatio: false,
        fullSize: false,
        legend: {
            display: false,
            position: "right",
        },
        plugins: {
            legend: {
                display: true,
                position: "right",
                align: "center",
                labels: {
                    usePointStyle: true,
                    pointStyle: "circle",
                    textAlign: "left",
                }
            },
            tooltip: {
                display: true,
                usePointStyle: true
            },
        },
        elements: {
            arc: {
                borderWidth: 0,
            }
        },
        borderRadius: [{
            outerStart: 360/2,
            innerStart: 360/2
        }, {
            outerStart: 360/2,
            innerStart: 360/2
        }],
        spacing: -4,
        circumference: 365,
        radius: "65%",
        cutout: "80%"
    };

    return (
        <li className="dashboardtile d-block position-relative border-white rounded-1 shadow-sm" style={{
            backgroundColor: "#eeeeee"
        }}>
            {/* icon pill */}
            <span className="dashboardtile__icon d-flex justify-content-center align-items-center rounded-1 text-light shadow" style={{
                backgroundColor: iconFill?? color
            }}>
                {icon}
            </span>

            <div className="dashboardtile__resizer d-block position-relative">

                {/* content */}
                <div className="d-flex flex-column justify-content-end align-items-start position-absolute top-0 w-100 h-100">
                    {/* chart */}
                    <Doughnut className="position-absolute top-0" data={DoughnutData} options={options} height={"100%"} />
                    <h5 className="dashboardtile__label w-100 m-0 px-3 py-1 fw-bold text-end text-muted text-truncate">{label}</h5>
                </div>
            </div>
        </li>
    );
}

export default DashboardTile;
