import React from "react";
import "./FieldAnswers.css";

const FieldAnswers = ({ handleChange }) => {
  return (
    <div className="field-container">
      <input
        type="text"
        name="text"
        autoComplete="off"
        onChange={handleChange}
      />
    </div>
  );
};

export default FieldAnswers;
