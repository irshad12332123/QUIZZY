import React from "react";
import "./Nav.css";
import CustomButton from "../../components/CustomButton";
const Nav = () => {
  return (
    <div className="nav">
      <h5>Quizzy</h5>
      <div className="links">
        <CustomButton text={"Made by Irshad ❤️"} type={"secondary"} />
      </div>
    </div>
  );
};

export default Nav;
