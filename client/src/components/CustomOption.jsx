import React from "react";
import "./CustomOption.css";
const CustomOption = ({
  option = "A",
  text,
  type = "primary",
  decisionType = "normal",
  isCorect = false,
  optionNameRequired = false,
}) => {
  return (
    <>
      <div className={`${type}-option-frame option-border-${decisionType}`}>
        {optionNameRequired ? <div className="option-num">{option}</div> : null}
        <button className={`${type}-option option`}>{text}</button>
        {/*  Only active if the option is correct! */}
        {isCorect ? (
          <i
            className="bi bi-check-circle-fill"
            style={{ color: "limegreen", marginRight: "1rem" }}
          ></i>
        ) : null}
      </div>
    </>
  );
};

export default CustomOption;
