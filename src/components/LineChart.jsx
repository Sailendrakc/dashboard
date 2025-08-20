import { useEffect, useRef } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";

function LineChart({ lineData }) {
  let options = useRef();

  function prepareData() {
    //add styles and other data to the lineData
    let colorArr = ["grey", "black"];

    for (let i = 0; i < 2; i++) {
      let data = lineData.datasets[i];
      data = {
        ...data,
        ...{
          borderColor: colorArr[i],
          tension: 0.2,
        },
      };
    }

    options.current = {
      title: {
        display: true,
        text: "2023 vs 2024 Revenue",
      },
    };
  }

  if (!options.current) {
    prepareData();
  }

  return <Line datasetIdKey="1" data={lineData} options={options.current} />;
}

export default LineChart;
