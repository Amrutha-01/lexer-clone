import React from "react";
import "./lexStake.css";
import "../dropdown.css";
import { ImageOutlined } from "@mui/icons-material";
import { useState, useRef, useEffect } from "react";

export default function LexStake() {
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
  //dropdown
  const contents = {
    "ETH (WETH)": "0.0000 ($0.00)",
    LEX: "0.0000 ($0.00)",
    "Escrowed LEX": "0.0000 ($0.00)",
    "Multiplier Points": "0.0000",
    "Stacked Multiplier Points": "0.0000",
    Total: "$0.00",
    connect: "button",
  };
  
  return (
    <div className="lexstake">
      <p className="heading">
        Stake{" "}
        <a
          href="https://docs.lexer.markets/token-and-economics/tokenomics"
          target="_blank"
        >
          LEX
        </a>{" "}
        and{" "}
        <a
          href="https://docs.lexer.markets/token-and-economics/tokenomics#escrowed-lex"
          target="_blank"
        >
          esLEX
        </a>{" "}
        to earn rewards from variant LP pools.
      </p>

      <div
        className={`dropdown-container ${isDropdownVisible ? "open" : ""}`}
        ref={dropdownRef}
        style={{ marginLeft: "3%" }}
      >
        <button onClick={toggleDropdown} className="dropdown-button">
          <span style={{ fontSize: "x-large", marginLeft: "8px" }}>Claimable Rewards: $0.00</span>
          <div>
            <span
              className={`arrow ${isDropdownVisible ? "up" : "down"}`}
            ></span>
          </div>
        </button>
        {/* style={{display:isDropdownVisible ?'block':'none'}} */}
        {isDropdownVisible && (
          <div className="dropdown-content">
            {Object.entries(contents).map(([key, value]) => (
              <div>
                {value == "button" ? (
                  <button className="connect-button">{key}</button>
                ) : (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      color: "white",
                    }}
                  >
                    <p>{key}</p>
                    <p>{value}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>


      <div className="cards">
        <div className="card">
          <div className="card-head">
            <span>
              <h3 style={{ height: "auto" }}> LEX</h3>
            </span>
            <span>
              <h4>$0.0048</h4>
            </span>
          </div>
          <div className="card-body">
            <div className="key-value">
              <p>Wallet</p>
              <p>0.00 LEX ($0.00)</p>
            </div>
            <div className="key-value">
              <p>Staked</p>
              <p>0.00 LEX ($0.00)</p>
            </div>
            <hr />
            <div className="key-value">
              <p>APR</p>
              <p>59.51%</p>
            </div>
            <div className="key-value">
              <p>Rewards</p>
              <p>$0.00</p>
            </div>
            <div className="key-value">
              <p>Multiplier Points APR</p>
              <p>100.00%</p>
            </div>
            <div className="key-value">
              <p>Boost Percentage</p>
              <p>0.00%</p>
            </div>
            <div className="card-tot">
              <p>Total Staked</p>
              <p style={{ marginLeft: "14%" }}>
                13,317,172.36 LEX ($66,319.51)
              </p>
            </div>
            <button className="connect-button" style={{ marginTop: "3%" }}>
              Buy LEX
            </button>
          </div>
        </div>

        <div className="card" style={{ left: "51%" }}>
          <div className="card-head">
            <span>
              <h3 style={{ height: "auto" }}> esLEX</h3>
            </span>
            <span>
              <h4>$0.0049</h4>
            </span>
          </div>
          <div className="card-body">
            <div className="key-value">
              <p>Wallet</p>
              <p>0.00 esLEX ($0.00)</p>
            </div>
            <div className="key-value">
              <p>Staked</p>
              <p>0.00 esLEX ($0.00)</p>
            </div>
            <hr />
            <div className="key-value">
              <p>APR</p>
              <p>59.51%</p>
            </div>
            <div className="key-value">
              <p>Multiplier Points APR</p>
              <p>100.00%</p>
            </div>
            <div className="key-value">
              <p>Boost Percentage</p>
              <p>0.00%</p>
            </div>
            <div className="card-tot-div">
              <div className="card-tot" style={{ width: "18vw" }}>
                <p>Total Staked</p>
                <p style={{ marginLeft: "14%" }}>
                  2,560,428.85 esLEX ($12,840.55)
                </p>
              </div>
              <div className="card-tot" style={{ width: "18vw" }}>
                <p>Total Supply</p>
                <p style={{ marginLeft: "14%" }}>7,218,494 esLEX ($36,200)</p>
              </div>
            </div>
            <button className="connect-button" style={{ marginTop: "5%" }}>
              Buy LEX
            </button>
          </div>
        </div>

        <div className="lex-text" style={{ width: "100vw" }}>
          <p style={{ textAlign: "center", marginBottom: "0%" }}>
            Convert esLEX tokens to LEX tokens.
          </p>
          <p style={{ textAlign: "center", marginTop: "0%" }}>
            Please read the{" "}
            <a
              href="https://docs.lexer.markets/token-and-economics/tokenomics#vesting"
              style={{ color: "grey" }}
            >
              vesting details
            </a>{" "}
            before using the vaults.
          </p>
        </div>

        <div
          className="card"
          style={{
            top: isDropdownVisible ? "190vh" : "140vh",
            height: "60vh",
            width: "80vw",
            marginLeft: "5%",
          }}
        >
          <h3>LEX Vault</h3>
          <div className="key-value" style={{ marginTop: "3%" }}>
            <p>Staked Tokens</p>
            <p>0.00</p>
          </div>
          <div className="key-value" style={{ marginTop: "3%" }}>
            <p>Reserved for Vesting</p>
            <p>0.00 / 0.00</p>
          </div>
          <div className="key-value" style={{ marginTop: "3%" }}>
            <p>Vesting Status</p>
            <p>0.0000/0.0000</p>
          </div>
          <div className="key-value" style={{ marginTop: "3%" }}>
            <p>Cliamable</p>
            <p>0.0000 LEX</p>
          </div>
          <button className="connect-button">Connect Wallet</button>
        </div>
      </div>
    </div>
  );
}
