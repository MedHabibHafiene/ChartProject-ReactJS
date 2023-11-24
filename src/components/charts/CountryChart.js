import React, { useState, useEffect } from "react";
import Chart from "chart.js/auto";
import LineChart from "../../components/LineChart.js";
import { salary } from "../../data/SalaryData.js";

const CountryChart = () => {
  const uniqueCountryLabels = Array.from(
    new Set(salary.map((data) => data.Country))
  );

  const [userData] = useState({
    labels: uniqueCountryLabels,
    datasets: [
      {
        label: "Salary",
        data: salary.map((data) => data.Salary),
        borderColor: "#B6FFFA",
        borderWidth: 1,
        backgroundColor: ["#89CFF3", "#AEDEFC", "#A0E9FF", "#CDF5FD"],
      },
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
    const lineChartCanvas = document.getElementById("lineChartCanvas");


    if (lineChartCanvas) {
      new Chart(lineChartCanvas, {
        type: "line",
        data: userData,
      });
    }
    return () => {};
  }, [userData]);

  return (
    <>

      <div id="lineChartContainer" style={{ width: 500 }}>
        <LineChart chartData={userData} />
      </div>
    </>
  );
};

export default CountryChart;
