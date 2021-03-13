import { Line } from "react-chartjs-2";
import React from "react";

const formatter = (number) =>
    number > 999999 ? (number / 1000000).toFixed(1) + "M" : number;

const buildData = (chartData) => {
    console.log(chartData);
    var i;
    var pinValues = [];
    var limit;
    if(chartData[0].pins.length < 20){
        limit = chartData[0].pins.length - 1;
    } else{
        limit = 20;
    }
    console.log(limit);
    console.log();
    for (i = chartData[0].pins.length - 1; i > chartData[0].pins.length - limit ; i-=2) {
        pinValues.push(chartData[0].pins[i].pinValue)
    }
    pinValues = pinValues.reverse();
    console.log(pinValues);
    var labelValues = [];
    for (i = chartData[0].pins.length - 1; i > chartData[0].pins.length - limit ; i-=2) {
        var tempLabel = chartData[0].pins[i].creationTime;
        tempLabel = tempLabel.slice(11,16);
        labelValues.push(tempLabel)
    }
    labelValues = labelValues.reverse();
    console.log(labelValues);

    return ({labels: labelValues,
    datasets: [
        {
            label: "",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            borderColor: "rgba(255, 255, 255, 1)",
            pointBackgroundColor: "rgba(255, 255, 255, 1)",
            data: pinValues,
        },
    ]});
};

const options = {
    legend: {
        display: false,
    },
    scales: {
        yAxes: [
            {
                ticks: {
                    fontColor: "rgba(255, 255, 255, 1)",
                },
                gridLines: {
                    display: false,
                },
            },
        ],
        xAxes: [
            {
                ticks: {
                    fontColor: "rgba(255, 255, 255, 1)",
                },
                gridLines: {
                    color: "rgba(255, 255, 255, .2)",
                    borderDash: [5, 5],
                    zeroLineColor: "rgba(255, 255, 255, .2)",
                    zeroLineBorderDash: [5, 5],
                },
            },
        ],
    },
    layout: {
        padding: {
            right: 10,
        },
    },
};

const StockChart = ({ info }) => {
    const data = buildData(info);
    console.log(info[0].name);
    return (
        <>
            <div
                className="rounded shadow-xl overflow-hidden w-full md:flex"
                style={{ maxWidth: "900px", margin: 'auto' }}
            >
                <div className="flex w-full md:w-1/2 px-5 pb-4 pt-8 bg-indigo-500 text-white items-center">
                    <Line data={data} options={options} />
                </div>
                <div className="flex w-full md:w-1/2 p-10 bg-gray-100 text-gray-600 items-center">
                    <div className="w-full">
                        <h3 className="text-lg font-semibold leading-tight text-gray-800">
                            {info[0].name}
                        </h3>
                        <div className="flex w-full text-xs">
                            <div className="flex w-5/12">
                                <div className="flex-1 pr-3 text-left font-semibold">
                                    Min Value
                                </div>
                                <div className="flex-1 px-3 text-right">
                                    {0}
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full text-xs">
                            <div className="flex w-5/12">
                                <div className="flex-1 pr-3 text-left font-semibold">
                                    Max Value
                                </div>
                                <div className="px-3 text-right">
                                    {1800}
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full text-xs">
                            <div className="flex w-5/12">
                                <div className="flex-1 pr-3 text-left font-semibold">
                                    Threshold
                                </div>
                                <div className="px-3 text-right">
                                    {825}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StockChart;
