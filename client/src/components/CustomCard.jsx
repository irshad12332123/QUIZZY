import React from "react";
import "./CustomCard.css";
const CustomCard = ({ title, value, styleType = "primary" }) => {
  return (
    <div className={`card-frame ${styleType}-card-frame`}>
      <h5>{title}</h5>
      <p>{value}</p>
    </div>
  );
};

export default CustomCard;
