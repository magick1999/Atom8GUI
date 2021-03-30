import React from "react";
import StockChart from "../Components/StockChart";

export default function  DataDisplayGraph(props) {
    console.log(props);
    return (
            <StockChart info={props.deviceData} />
    );
}

