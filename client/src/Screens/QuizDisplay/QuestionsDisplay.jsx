import React from "react";
import "./QuizDisplay";
import CustomOption from "../../components/CustomOption";
import CustomButton from "../../components/CustomButton";

const QuestionsDisplay = () => {
  return (
    <div className="questions-display">
      <div className="questions-display-listing-frame">
        <h6>1. This is the first question Lorem ipsum dolor sit amet ..</h6>
        <div className="options-frame">
          <CustomOption text={"Delhi"} optionNameRequired />
          <CustomOption text={"Guwahti"} optionNameRequired option="B" />
          <CustomOption text={"Shillong"} optionNameRequired option="C" />
          <CustomOption text={"Manipur"} optionNameRequired option="D" />
        </div>
        <CustomButton type={"secondary"} text={"Next"} />
      </div>
    </div>
  );
};

export default QuestionsDisplay;
