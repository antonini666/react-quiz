import React, { Component } from "react";
import CheckboxAnswers from "./CheckboxAnswers";

export default class CheckBoxAnswerContainer extends Component {
  state = {
    selected: []
  };

  handleChange = e => {
    const { checked, value } = e.target;
    let { selected } = this.state;

    if (checked && selected.indexOf(value) === -1) {
      selected.push(+value);
    } else {
      selected = selected.filter(i => i !== value);
    }
    this.setState({
      selected
    });
  };

  nextQuestion = () => {
    const { rightAnswer, nextStep, step } = this.props;
    const { selected } = this.state;

    if (selected.length >= rightAnswer[step].length) {
      let newArray = rightAnswer[step].concat(selected);
      newArray = [...new Set(newArray)];
      nextStep(newArray.length === rightAnswer[step].length);
    } else {
      nextStep(false);
    }
  };

  render() {
    const { answer, step } = this.props;
    return (
      <>
        <CheckboxAnswers
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
