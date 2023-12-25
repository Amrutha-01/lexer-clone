import React from "react";
import NavBar from "./components/navbar/navbar";
import Dashboard from "./components/dashboard/dashboard";
import LexStake from "./components/lexStake/lexStake";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home";

export default function App() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  return (
    <div>
      <Router>
        {/* <NavBar /> */}
        <Routes>
          <Route
            path="/lexstake"
            element={
              <div>
              <NavBar/>
              <LexStake
                isDropdownVisible={isDropdownVisible}
                setDropdownVisible={setDropdownVisible}
              />
              </div>
            }
          ></Route>
          <Route path="/lexer-clone" element={<div>
              <NavBar/><Dashboard /></div>} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}
