import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getGraphData } from "../actions";
import { Line } from "react-chartjs-2";
import Chartplaceholder from "./chartplaceholder";

function Linegraph({ getGraphData, graph }) {
  let [loader, setloader] = useState(true);

  const fetchData = () => {
    setloader(true);
    getGraphData().then(() => setloader(false));
  };

  const options = {
    legend: {
      display: false,
    },
    elements: {
      point: {
        radius: 0,
      },
    },
    maintainAspectRatio: false,
    tooltips: {
      mode: "index",
      intersect: false,
      callbacks: {
        label: function (tooltipItem, data) {
          return tooltipItem.value;
        },
      },
    },
    scales: {
      xAxes: [
        {
          type: "time",
          time: {
            parser: "MM/DD/YY",
            tooltipFormat: "ll",
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            display: false,
          },
          ticks: {
            // Include a dollar sign in the ticks
            callback: function (value, index, values) {
              return value;
            },
          },
        },
      ],
    },
  };

  const buildChartData = (data) => {
    const chartData = [];
    let lastPoint = "";
    for (let i in data) {
      if (lastPoint) {
        chartData.push({
          x: i,
          y: data[i] - lastPoint,
        });
      }
      lastPoint = data[i];
    }
    return chartData;
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(() => fetchData(), 1000 * 60 * 10);
    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderContent = () => {
    if (loader || !graph) return <Chartplaceholder />;
    else {
      return (
        <div style={{paddingTop:'20px'}}>
          <Line
            data={{
              datasets: [
                {
                  backgroundColor: "rgba(204, 16, 52, 0.5)",
                  borderColor: "#CC1034",
                  data: buildChartData(graph["cases"]),
                },
              ],
            }}
            options={options}
            height={300}
          ></Line>
        </div>
      );
    }
  };

  return <div className="graph">{renderContent()}</div>;
}

const mapStateToProps = (state) => ({ graph: state.graph });

export default connect(mapStateToProps, { getGraphData })(Linegraph);
