import React, { Component } from "react";
import RadioAnswers from "./RadioAnswers";

export default class RadioAnswerContainer extends Component {
  state = {
    selected: -1
  };

  handleSelect = id => {
    this.setState({ selected: id });
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
        <RadioAnswers
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
