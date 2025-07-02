import QuestionsDisplay from "./QuestionsDisplay";
import ScoreBoard from "./ScoreBoard";
import "./QuizDisplay.css";
import Nav from "../Nav/Nav";
const QuizDisplay = () => {
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

export default QuizDisplay;
