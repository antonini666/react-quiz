import React, { Component } from "react";
import SelectAnswers from "./SelectAnswers";

export default class SelectAnswersContainer extends Component {
  state = {
    selected: -1
  };

  handleSelect = id => {
    this.setState({ selected: +id.target.value });
  };

  nextQuestion = () => {
    const { rightAnswer, nextStep, step } = this.props;
    const { selected } = this.state;
    nextStep(selected === rightAnswer[step]);
  };

  render() {
    const { answer, step } = this.props;
    return (
      <>
        <SelectAnswers
          answer={answer}
          step={step}
          handleSelect={this.handleSelect}
        />
        <button className="btn-answer" onClick={this.nextQuestion}>
          Ответить
        </button>
      </>
    );
  }
}
