import QuestionsDisplay from "./QuestionsDisplay";
import ScoreBoard from "./ScoreBoard";
import "./QuizDisplay.css";
import Nav from "../Nav/Nav";
import { useState } from "react";
import Result from "./Result";

const QuizDisplay = () => {
  const [questionStatuses, setQuestionStatuses] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [userScoreDetails, setUserScoreDetails] = useState([]);
  return (
    <div className="main-frame">
      <Nav />
      <div className="content-outer-frame">
        {isCompleted ? (
          <Result userScoreDetails={userScoreDetails} />
        ) : (
          <QuestionsDisplay
            questionStatuses={questionStatuses}
            setQuestionStatuses={setQuestionStatuses}
            setIsCompleted={setIsCompleted}
            setUserScoreDetails={setUserScoreDetails}
          />
        )}
        <ScoreBoard questionStatuses={questionStatuses} />
      </div>
    </div>
  );
};

export default QuizDisplay;
