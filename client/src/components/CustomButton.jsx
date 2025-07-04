import React from "react";
import "./CustomButton.css";
import { Link } from "react-router-dom";
const CustomButton = ({ text, type, link, handleClick }) => {
  return (
    <>
      <button
        className={`custom-btn custom-${type}-btn `}
        onClick={handleClick}
      >
        {text}
      </button>
    </>
  );
};

export default CustomButton;
