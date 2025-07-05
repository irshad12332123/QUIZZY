import React from "react";
import CustomCard from "../../components/CustomCard";

const Result = ({ userScoreDetails }) => {
  return (
    <div className="result">
      <div className="result-frame">
        <div className="result-inner-frame">
          <CustomCard title={"Total Questions"} value={userScoreDetails[0]} />
          <CustomCard title={"Correct"} value={userScoreDetails[1]} />
        </div>
        <CustomCard
          title={"Score"}
          value={`${(userScoreDetails[1] / userScoreDetails[0]) * 100}%`}
          styleType={"secondary"}
        />
      </div>
    </div>
  );
};

export default Result;
