import React from "react";
import CustomButton from "../../components/CustomButton";
import { Link } from "react-router-dom";

const Body = () => {
  return (
    <>
      <div className="content-packer">
        <h5>Welcome to Quizzy.</h5>
        <p>Test your general knowledge.</p>
        <Link to="/quiz">
          <CustomButton type={"primary"} text={"Start Quiz"} />
        </Link>
      </div>
    </>
  );
};

export default Body;
