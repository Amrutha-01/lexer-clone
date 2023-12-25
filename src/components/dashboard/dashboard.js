import { ImageOutlined } from "@mui/icons-material";
import React from "react";
import "./dashboard.css";
import { PieChart } from "@mui/x-charts/PieChart";
import logo1 from "./lex-logo1.svg";
import logo2 from "./lex-logo2.svg";
import { useState, useRef, useEffect } from "react";

export default function Dashboard() {
  const chartStyles = {
    padding: 0,
    borderRadius: "50%",
  };

  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const closeDropdown = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownVisible(false);
    }
  };

  const contents = {
    APR: "59.12%",
    "Total Stacked": "13,517,537.47 LEX ($65,870.96)",
  };

  useEffect(() => {
    document.addEventListener("click", closeDropdown);

    return () => {
      document.removeEventListener("click", closeDropdown);
    };
  }, []);

  return (
    <div className="dashboard" style={{ marginTop: "2%" }}>
      <div className="card1" style={{ marginLeft: "2%" }}>
        <h2>Total Trading Volume</h2>
        <p>$272,852.21</p>
      </div>
      <div className="card1">
        <h2>Total Fees</h2>
        <p>$466.29</p>
      </div>
      <div className="card1" style={{ marginRight: "2%" }}>
        <h2>Total Value Locked</h2>
        <p>$70,620.76</p>
      </div>

      <div className="card1 card2" style={{ marginLeft: "2%" }}>
        <PieChart
          colors={["orange", "#f0f8ff", "blue", "green"]}
          series={[
            {
              data: [
                { id: 0, value: 20, label: "24.76% BTC" },
                { id: 1, value: 20, label: "19.6% ETH" },
                { id: 2, value: 20, label: "27.62% USDC.e" },
                { id: 3, value: 20, label: "27.99% USDT" },
              ],
              innerRadius: 87,
              cx: 300,
            },
          ]}
          width={400}
          height={200}
          slotProps={{
            legend: { hidden: true },
          }}
          styles={chartStyles}
        />
      </div>
      <div style={{ position: "absolute", left: "37.75%", top: "88%" }}>
        {" "}
        <h3>mXLP</h3>
      </div>
      <div className="text">
        <img src={logo1} style={{ height: "7vh" }} />
        <h2 className="text-head">mXLP</h2>
        <div className="textcont">
          <pre className="text-cont1">Price $1.021</pre>
          <pre className="text-cont1">TVL $52,719.35</pre>
          <pre className="text-cont1">APR 29.06%</pre>
          <pre className="text-cont1">Stables Percentage 55.71%</pre>
        </div>
      </div>

      <div className="card1 card2" style={{ marginRight: "2%" }}>
        <PieChart
          colors={["orange", "#f0f8ff", "blue", "green"]}
          series={[
            {
              data: [
                { id: 0, value: 20, label: "24.76% BTC" },
                { id: 1, value: 20, label: "19.6% ETH" },
                { id: 2, value: 20, label: "27.62% USDC.e" },
                { id: 3, value: 20, label: "27.99% USDT" },
              ],
              innerRadius: 87,
              cx: 300,
            },
          ]}
          width={400}
          height={200}
          slotProps={{
            legend: { hidden: true },
          }}
          styles={chartStyles}
        />
      </div>
      <div style={{ position: "absolute", left: "85.5%", top: "88%" }}>
        {" "}
        <h3>sXLP</h3>
      </div>
      <div className="text2">
        <img src={logo2} style={{ height: "7vh" }} />
        <h2 className="text-head">mXLP</h2>
        <div className="textcont">
          <pre className="text-cont1">Price $0.897</pre>
          <pre className="text-cont1">TVL $18000.12</pre>
          <pre className="text-cont1">APR 13.58%</pre>
          <pre className="text-cont1">Stables Percentage 100.00%</pre>
        </div>
      </div>
      <div>

        <div className={`dropdown-container ${isDropdownVisible ? 'open' : ''}`} ref={dropdownRef} style={{marginLeft:'3%'}}>
      <button onClick={toggleDropdown} className="dropdown-button">
        <span style={{ fontSize: "x-large", marginLeft: "8px" }}>LEX</span>
        <div>
          <span style={{ fontSize: "x-large", marginRight: "8px" }}>$0.0048</span>
          <span className={`arrow ${isDropdownVisible ? 'up' : 'down'}`}></span>
        </div>
      </button>
      {isDropdownVisible && (
        <div className="dropdown-content">
          <div style={{display:"flex",justifyContent:"space-between"}}>
            <p>APR</p>
            <p>59.12%</p>
          </div>
          <div style={{display:"flex",justifyContent:"space-between"}}>
            <p>Total Stacked</p>
            <p>13,517,537.47 LEX ($65,870.96)</p>
          </div>
        </div>
      )}
    </div>
      </div>
    </div>
  );
}
