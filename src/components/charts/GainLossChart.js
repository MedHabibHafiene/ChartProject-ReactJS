import React, { useState, useEffect } from "react";
import Chart from "chart.js/auto";
import BarChart from "../../components/BarChart.js";
import LineChart from "../../components/LineChart.js";
import { UserData } from "../../data/Data.js";

const ChartComponent = () => {
  const [userData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        borderColor: "#B6FFFA",
        borderWidth: 1,
        backgroundColor: ["#89CFF3", "#AEDEFC", "#A0E9FF", "#CDF5FD"],
      },
      {
        label: "Users Lost",
        data: UserData.map((data) => data.userLost),
        borderColor: "#AE445A",
        backgroundColor: "#FF6969",
        borderWidth: 1.3,
      },
    ],
  });

  useEffect(() => {
    // Create and destroy charts here if needed
    const barChartCanvas = document.getElementById("barChartCanvas");
    const lineChartCanvas = document.getElementById("lineChartCanvas");

    if (barChartCanvas) {
      new Chart(barChartCanvas, {
        type: "bar",
        data: userData,
      });
    }

    if (lineChartCanvas) {
      new Chart(lineChartCanvas, {
        type: "line",
        data: userData,
      });
    }

    return () => {};
  }, [userData]);

  useEffect(() => {
    document.title = "Gain & Loss Chart";
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div
        id="barChartContainer"
        style={{
          width: "45%",
          marginLeft: "50px",
          marginTop: "40px",
          flex: "0 0 auto",
        }}
      >
        <BarChart chartData={userData} />
      </div>
      <div
        id="lineChartContainer"
        style={{
          width: "45%",
          marginTop: "40px",
          marginRight: "55px",
          flex: "0 0 auto",
        }}
      >
        <LineChart chartData={userData} />
      </div>
    </div>
  );
};

export default ChartComponent;
