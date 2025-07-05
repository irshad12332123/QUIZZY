import React, { useEffect, useState } from "react";
import "./QuizDisplay";
import CustomOption from "../../components/CustomOption";
import CustomButton from "../../components/CustomButton";
import data from "../../data/questionData.json";

const QuestionsDisplay = ({
  questionStatuses,
  setQuestionStatuses,
  setIsCompleted,
  setUserScoreDetails,
}) => {
  const [questionNumberIncrementer, setQuestionNumberIncrementer] = useState(0);
  const [question, setQuestion] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState(null);
  const [error, setError] = useState(null);
  const [btnText, setBtnText] = useState("Next");
  const [correctAns, setCorrectAns] = useState(0);
  useEffect(() => {
    setQuestion(data["G.k"][questionNumberIncrementer]);
    setIsLoading(false);
    setSelectedOption(null);
    setError(null);
  }, [questionNumberIncrementer]);

  const checkAnswer = (chosenOption) => {
    if (selectedOption) {
      setError("You have already chosen an option!");
      return;
    }

    setSelectedOption(chosenOption);
    const isCorrect = chosenOption === question["ans"];

    // increment the correctAns to get the total correct answers
    if (isCorrect) {
      setCorrectAns((prev) => prev + 1);
    }
    const updatedStatuses = [...questionStatuses];
    updatedStatuses[questionNumberIncrementer] = isCorrect
      ? "correct"
      : "wrong";

    setQuestionStatuses(updatedStatuses);
  };

  const handleNext = () => {
    if (!selectedOption) {
      setError("Please select an option!");
      return;
    }
    questionNumberIncrementer === 3 ? setBtnText("Subit") : "Next";
    setQuestionNumberIncrementer((prev) => prev + 1);
  };

  const handleSubmit = () => {
    setIsCompleted(true);
    setUserScoreDetails([
      questionNumberIncrementer + 1, // total questions
      correctAns, // number of correct answers
      questionNumberIncrementer + 1 - 1, // number of wrong aswers
    ]);
  };

  const getOptionStatus = (optionKey) => {
    if (!selectedOption) return "normal";
    if (selectedOption === optionKey && question["ans"] === optionKey)
      return "correct";
    if (selectedOption === optionKey && question["ans"] !== optionKey)
      return "wrong";
    return "normal";
  };

  return isLoading ? (
    <div
      className="loader"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
      }}
    >
      Loading..
    </div>
  ) : (
    <div className="questions-display">
      <div className="questions-display-listing-frame">
        <h5>{question["question"]}</h5>
        <div className="options-frame">
          <CustomOption
            text={question["options"]["A"]}
            optionNameRequired
            handleClick={() => checkAnswer("A")}
            optionChecker={getOptionStatus("A")}
          />
          <CustomOption
            text={question["options"]["B"]}
            optionNameRequired
            handleClick={() => checkAnswer("B")}
            optionChecker={getOptionStatus("B")}
          />
          <CustomOption
            text={question["options"]["C"]}
            optionNameRequired
            handleClick={() => checkAnswer("C")}
            optionChecker={getOptionStatus("C")}
          />
          <CustomOption
            text={question["options"]["D"]}
            optionNameRequired
            handleClick={() => checkAnswer("D")}
            optionChecker={getOptionStatus("D")}
          />
        </div>
        <CustomButton
          type={"secondary"}
          text={btnText}
          handleClick={
            questionNumberIncrementer === 4 ? handleSubmit : handleNext
          }
        />
        {error && (
          <div className="error-message" style={{ color: "red" }}>
            {error}
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionsDisplay;
