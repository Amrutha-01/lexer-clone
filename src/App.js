import React from "react";
import NavBar from "./components/navbar/navbar";
import Dashboard from "./components/dashboard/dashboard";
import LexStake from "./components/lexStake/lexStake";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route
            path="/lexstake"
            element={
              <LexStake
                isDropdownVisible={isDropdownVisible}
                setDropdownVisible={setDropdownVisible}
              />
            }
          ></Route>
          <Route path="/lexer-clone" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}
