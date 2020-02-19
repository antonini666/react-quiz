import React from "react";
import "./SelectAnswers.css";

const SelectAnswers = ({ answer, step, handleSelect }) => {
  return (
    <div className="select-container">
      <select onChange={handleSelect}>
        <option>Выберите ответ</option>
        {answer[step].map((e, id) => {
          return (
            <option key={id} value={id}>
              {e.value}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectAnswers;
