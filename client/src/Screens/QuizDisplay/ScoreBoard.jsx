import React from "react";
import "./QuizDisplay";
import CustomOption from "../../components/CustomOption";

const ScoreBoard = () => {
  return (
    <div className="score-board">
      <div className="list-questions-done">
        <h5>Quiz Questions list</h5>
        <div className="questions-options-list">
          <CustomOption text={"Quix question 1"} type="tertiary" />
          <CustomOption text={"Quix question 2"} type="tertiary" />
          <CustomOption text={"Quix question 3"} type="tertiary" />
          <CustomOption text={"Quix question 4"} type="tertiary" />
          <CustomOption text={"Quix question 5"} type="tertiary" />
        </div>
      </div>
    </div>
  );
};

export default ScoreBoard;
