import React, { Component } from "react";
import FieldAnswers from "./FieldAnswers";

export default class FieldAnswersContainer extends Component {
  state = {
    title: ""
  };

  handleChange = e => {
    const title = e.target.value;
    this.setState({ title: title });
  };

  nextQuestion = () => {
    const { nextStep, step, answer } = this.props;
    const { title } = this.state;
    nextStep(title === answer[step]);
  };

  render() {
    const { answer, step } = this.props;
    return (
      <>
        <FieldAnswers
          answer={answer}
          step={step}
          handleChange={this.handleChange}
        />
        <button className="btn-answer" onClick={this.nextQuestion}>
          Ответить
        </button>
      </>
    );
  }
}
