import React from "react";
import "./Questions.css";

const Questions = ({ questions, step }) => {
  return (
    <div className="questions">
      <h2>{questions[step]}</h2>
    </div>
  );
};

export default Questions;
