import React, { useEffect, useState } from "react";
import "./QuizDisplay";
import CustomOption from "../../components/CustomOption";
import CustomButton from "../../components/CustomButton";
import data from "../../data/questionData.json";
const QuestionsDisplay = () => {
  const [questionNumberIncrementer, setQuestionNumberIncrementer] = useState(0);
  const [question, setQuestion] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOptionCorrect, setIsOptionCorrect] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setQuestion(data["G.k"][questionNumberIncrementer]);
    setIsLoading(false);
    setSelectedOption(null);
    setError(null);
  }, [questionNumberIncrementer]);

  // Check if the selcted answer is correct/wrong!
  const checkAnswer = (chosedOption) => {
    setSelectedOption(chosedOption);
  };

  // Switch to next question!
  const handleNext = () => {
    if (!selectedOption) {
      setError("Please select an option!");
      return;
    }
    let count = questionNumberIncrementer;
    count++;
    setQuestionNumberIncrementer(count);
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
            option="B"
            handleClick={() => checkAnswer("B")}
            optionChecker={getOptionStatus("B")}
          />
          <CustomOption
            text={question["options"]["C"]}
            optionNameRequired
            option="C"
            handleClick={() => checkAnswer("C")}
            optionChecker={getOptionStatus("C")}
          />
          <CustomOption
            text={question["options"]["D"]}
            optionNameRequired
            option="D"
            handleClick={() => checkAnswer("D")}
            optionChecker={getOptionStatus("D")}
          />
        </div>
        <CustomButton
          type={"secondary"}
          text={"Next"}
          handleClick={handleNext}
        />
      </div>
    </div>
  );
};

export default QuestionsDisplay;
