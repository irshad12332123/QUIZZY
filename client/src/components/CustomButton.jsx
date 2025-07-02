import React from "react";
import "./CustomButton.css";
import { Link } from "react-router-dom";
const CustomButton = ({ text, type, link }) => {
  return (
    <>
      <button className={`custom-btn custom-${type}-btn `}>{text}</button>
    </>
  );
};

export default CustomButton;
