import React from "react";

import "./RadioAnswer.css";

const RadioAnswers = ({ answer, step, handleSelect }) => {
  return (
    <div className="radio-container">
      {answer[step].map((e, id) => {
        return (
          <div key={id} className="radio">
            <input
              id={id}
              type="radio"
              name="radio"
              onChange={() => handleSelect(id)}
            />
            <label htmlFor={id} className="radio-label">
              {e.value}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default RadioAnswers;
