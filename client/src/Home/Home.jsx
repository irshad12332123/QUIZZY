import React from "react";
import QuestionsDisplay from "./QuestionsDisplay";
import ScoreBoard from "./ScoreBoard";
import "./Home.css";
import Nav from "./Nav/Nav";
const Home = () => {
  return (
    <div className="main-frame">
      <Nav />
      <div className="content-outer-frame">
        <QuestionsDisplay />
        <ScoreBoard />
      </div>
    </div>
  );
};

export default Home;
