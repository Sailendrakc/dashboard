import DataBox from "../components/DataBox";
import LineChart from "../components/LineChart";
import BarChart from "../components/BarChart";
import PieChart from "../components/PieChart";
import TrafficInfo from "../components/TrafficInfo";

export default function Dashboard({ data }) {
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
    <>
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
    </>
  );
}
