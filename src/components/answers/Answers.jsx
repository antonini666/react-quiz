import React from "react";
import RadioAnswers from "../radio-answers";
import CheckboxAnswers from "../checkbox-answers";
import FieldAnswers from "../field-answers";
import SelectAnswers from "../select-answers";

import "./Answers.css";

const Answers = ({ answer, step, rightAnswer, nextStep }) => {
  const renderAnswer = () => {
    switch (step) {
      case 0:
        return (
          <RadioAnswers
            answer={answer}
            step={step}
            rightAnswer={rightAnswer}
            nextStep={nextStep}
          />
        );
      case 1:
        return (
          <CheckboxAnswers
            answer={answer}
            step={step}
            rightAnswer={rightAnswer}
            nextStep={nextStep}
          />
        );
      case 2:
        return (
          <RadioAnswers
            answer={answer}
            step={step}
            rightAnswer={rightAnswer}
            nextStep={nextStep}
          />
        );
      case 3:
        return <FieldAnswers answer={answer} step={step} nextStep={nextStep} />;
      case 4:
        return (
          <SelectAnswers
            answer={answer}
            step={step}
            rightAnswer={rightAnswer}
            nextStep={nextStep}
          />
        );
      default:
        break;
    }
  };

  return (
    <div className="answers">
      <h3>Выберите правильный ответ</h3>
      <div className="answer-container">{renderAnswer()}</div>
    </div>
  );
};

export default Answers;
