import React from "react";
import "./CustomOption.css";
const CustomOption = ({
  option = "A",
  text,
  type = "primary",
  optionChecker = "normal",
  optionNameRequired = false,
  handleClick,
}) => {
  const renderOptionChecker = (optionChecker) => {
    switch (optionChecker) {
      case "correct":
        return (
          <i
            className="bi bi-check-circle-fill"
            style={{ color: "limegreen", marginRight: "0.5rem" }}
          />
        );

      case "wrong":
        return (
          <i
            className="bi bi-x-circle-fill"
            style={{ color: "red", marginRight: "0.5rem" }}
          />
        );
      case "normal":
      default:
        return null;
    }
  };
  return (
    <>
      <div
        className={`${type}-option-frame option-border-${optionChecker}`}
        onClick={handleClick}
      >
        {optionNameRequired ? <div className="option-num">{option}</div> : null}
        <button className={`${type}-option option`}>{text}</button>
        {
          /*  Only active if the option is correct! */
          renderOptionChecker(optionChecker)
        }
      </div>
    </>
  );
};

export default CustomOption;
