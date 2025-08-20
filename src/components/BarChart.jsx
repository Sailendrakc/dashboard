import { plugins } from "chart.js";
import { useRef } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";

function BarChart({ bardata }) {
  let barColors = useRef();
  let options = useRef();

  function prepBarData() {
    barColors.current = {
      backgroundColor: [
        "rgba(255, 205, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(153, 102, 255, 0.2)",
      ],
      borderColor: [
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
        "rgb(54, 162, 235)",
        "rgb(153, 102, 255)",
      ],
      borderWidth: 1,
    };

    bardata.datasets[0] = {
      ...bardata.datasets[0],
      ...barColors.current,
    };

    options.current = {
      plugins: {
        title: {
          display: true,
          text: "Users by Operating system",
        },
        legend: {
          display: false,
        },
      },
    };
  }

  if (!options.current) {
    prepBarData();
  }

  return <Bar datasetIdKey="2" data={bardata} options={options.current} />;
}

export default BarChart;
