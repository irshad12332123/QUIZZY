import React from "react";
import "./CustomButton.css";
const CustomButton = ({ text, type }) => {
  return (
    <>
      <button className={`custom-btn custom-${type}-btn `}>{text}</button>
    </>
  );
};

export default CustomButton;
