import React, { useEffect } from 'react';
import AgeRaceChart from "./AgeChart";
import CountryChart from "./CountryChart";
import Gender from "./JobSalary";
import "../../css/SalaryChart.css";


const SalaryChart = () => {
  useEffect(() => {
    // Set the title when the component mounts
    document.title = "Salary Chart";

    // Optionally, you can reset the title when the component unmounts
  }, []);
  return (
    <div className="chart-container">
      <div className="chart">
        <AgeRaceChart />
      </div>
      <div className="chart">
        <CountryChart />
      </div>
      <div className="chart">
        <Gender />
      </div>
    </div>
  );
};

export default SalaryChart;
