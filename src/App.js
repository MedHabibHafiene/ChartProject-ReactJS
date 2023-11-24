import React, { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import "./css/App.css";
import { Error } from "./pages/Error";
import Home from "./pages/Home";
import SalaryChart from "./components/charts/SalaryChart";
import ChartComponent from "./components/charts/GainLossChart";
const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Salary Chart", path: "/salary_chart" },
    { label: "Gain & Loss Chart", path: "/gainloss_chart" },
  ];

  return (
    <nav className={`nav ${isNavOpen ? "nav-open" : ""}`}>
      <div
        className={`menu-icon ${isNavOpen ? "active" : ""}`}
        onClick={toggleNav}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className="nav-links">
        {navItems.map((item) => (
          <li key={item.path}>
            <Link to={item.path} onClick={toggleNav}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home  />} />
        <Route path="/salary_chart" element={<SalaryChart />} />
        <Route path="/gainloss_chart" element={<ChartComponent />} />
        <Route path="*" element={<Error />} />
      </Routes>
      
    </>
  );
}

export default App;
