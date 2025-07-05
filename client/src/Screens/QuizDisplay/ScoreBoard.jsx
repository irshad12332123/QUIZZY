import React from "react";
import "./QuizDisplay";
import CustomOption from "../../components/CustomOption";

const ScoreBoard = ({ questionStatuses }) => {
  const totalQuestions = 5;

  return (
    <div className="score-board">
      <div className="list-questions-done">
        <h5>Quiz Questions list</h5>
        <div className="questions-options-list">
          {[...Array(totalQuestions)].map((_, index) => (
            <CustomOption
              key={index}
              text={`Quiz question ${index + 1}`}
              type="tertiary"
              optionChecker={questionStatuses[index] || "normal"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScoreBoard;
