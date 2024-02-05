import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import Calculate from "./Pages/Calculate/Calculate";
import About from "./Pages/About/About";
import Feedback from "./Pages/Feedback/Feedback";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Calculate" element={<Calculate />} />
          <Route path="/About" element={<About />} />
          <Route path="/Feedback" element={<Feedback />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
