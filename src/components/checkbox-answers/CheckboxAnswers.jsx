import React from "react";

import "./CheckBoxAnswers.css";

const CheckboxAnswers = ({ answer, step, handleChange }) => {
  return (
    <div className="check-container">
      {answer[step].map((e, id) => {
        return (
          <div key={id} className="check">
            <input id={id} type="checkbox" value={id} onChange={handleChange} />
            <label htmlFor={id} className="check-label">
              {e.value}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default CheckboxAnswers;
