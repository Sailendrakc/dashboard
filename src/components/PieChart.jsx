import { Chart as ChartJS, SubTitle } from "chart.js/auto";
import { Chart } from "react-chartjs-2";
import { Pie } from "react-chartjs-2";
import { useRef } from "react";

function PieChart({ piedata }) {
  let pieColors = useRef();
  let options = useRef();

  function prepPieData() {
    pieColors.current = {
      backgroundColor: [
        "rgba(255, 205, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(72, 189, 80, 0.2)",
      ],
      borderColor: [
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
        "rgb(54, 162, 235)",
        "rgb(153, 102, 255)",
        "rgba(14, 187, 25, 0.2)",
      ],
      borderWidth: 1,
    };

    piedata.datasets[0] = {
      ...piedata.datasets[0],
      ...pieColors.current,
    };

    options.current = {
      plugins: {
        legend: {
          position: "right",
        },
        title: {
          display: true,
          text: "Age groups of users",
          align: "center",
        },
      },
    };
  }

  if (!pieColors.current) {
    prepPieData();
  }

  return <Pie datasetIdKey="3" data={piedata} options={options.current} />;
}

export default PieChart;
