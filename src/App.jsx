import { useRef, useState } from "react";
import "./App.css";
import "./componentStyles.css";
import LeftBar from "./components/LeftBar";
import DataBox from "./components/DataBox";
import data from "./assets/mockdata";
import LineChart from "./components/LineChart";
import BarChart from "./components/BarChart";
import { Line, Pie } from "react-chartjs-2";
import PieChart from "./components/PieChart";
import TrafficInfo from "./components/TrafficInfo";

import Posts from "./components/Posts";

function App() {
  function renderDataBox() {
    let dataBoxArray = [];
    if (data.databox) {
      data.databox.forEach((e) => {
        dataBoxArray.push(
          <DataBox title={e.title} value={e.value} key={e.title}></DataBox>
        );
      });
    }

    return dataBoxArray;
  }

  return (
    <div id="contentHolder">
      <div className="leftBarHolder">
        <div className="logoIcon"></div>
        <LeftBar className="LeftBar"></LeftBar>
      </div>

      <div className="midFlexHolder">
        <div className="header">
          <h3>Engagement Dashboard</h3>
        </div>
        <div className="boxHolder">{renderDataBox()}</div>
        <div className="lineChartHolder">
          <LineChart lineData={data.linechart} />
        </div>
        <div className="barChartHolder">
          <BarChart bardata={data.barchart} />
        </div>

        <div className="pieChartHolder">
          <PieChart piedata={data.piechart} />
        </div>

        <div className="trafficInfoHolder">
          <TrafficInfo />
        </div>
      </div>

      <div className="rightFlexHolder">
        <div className="header">
          <h3>Activity Dashboard</h3>
        </div>

        <div className="postHolder">
          <Posts count={12} />
        </div>
      </div>
    </div>
  );
}

export default App;
