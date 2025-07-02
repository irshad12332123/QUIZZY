import React from "react";
import QuizDisplay from "./Screens/QuizDisplay/QuizDisplay";
import Home from "./Screens/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<QuizDisplay />} />
      </Routes>
    </Router>
  );
};

export default App;
