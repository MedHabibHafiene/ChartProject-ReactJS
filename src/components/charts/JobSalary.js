import React, { useState, useEffect } from "react";
import Chart from "chart.js/auto";
import BarChart from "../../components/BarChart.js";
import { salary } from "../../data/SalaryData.js";

const Gender = () => {
  const uniqueRaceLabels = Array.from(
    new Set(salary.map((data) => data["Job Title"]))
  );

  const [userData] = useState({
    labels: uniqueRaceLabels,
    datasets: [
      {
        label: "Salary",
        data: salary.map((data) => data.Salary),
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

    return () => {
      // Cleanup if needed
    };
  }, [userData]);

  return (
    <>
      <div id="barChartContainer" style={{ width: 750, height: 500 }}>
        <BarChart chartData={userData} />
      </div>
    </>
  );
};

export default Gender;
