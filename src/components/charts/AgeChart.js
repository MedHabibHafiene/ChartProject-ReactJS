import React, { useState, useEffect } from "react";
import Chart from "chart.js/auto";
import BarChart from "../../components/BarChart.js";
import { salary } from "../../data/SalaryData.js";

const AgeRaceChart = () => {
  const uniqueRaceLabels = Array.from(new Set(salary.map((data) => data.Race)));

  const [userData] = useState({
    labels: uniqueRaceLabels,
    datasets: [
      {
        label: "Age",
        data: salary.map((data) => data.Age),
        borderColor: "#B6FFFA",
        borderWidth: 1,
        backgroundColor: ["#89CFF3", "#AEDEFC", "#A0E9FF", "#CDF5FD"],
      },
    ],
  });

  useEffect(() => {
    const barChartCanvas = document.getElementById("barChartCanvas");

    if (barChartCanvas) {
      new Chart(barChartCanvas, {
        type: "bar",
        data: userData,
      });
    }

   
    return () => {};
  }, [userData]);

  return (
    <>
      <div id="barChartContainer" style={{ width: 550 }}>
        <BarChart chartData={userData} />
      </div>
    </>
  );
};

export default AgeRaceChart;
