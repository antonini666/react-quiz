import React, { Component } from "react";
import Questions from "../questions";
import Answers from "../answers/";

import "./App.css";

export default class App extends Component {
  state = {
    loading: true,
    questions: [],
    answers: [],
    rightAnswer: [],
    userAnswer: 0,
    step: 0
  };

  async componentDidMount() {
    const url = "https://api.myjson.com/bins/zkrm0";
    const response = await fetch(url);
    const data = await response.json();
    setTimeout(() => {
      this.setState({
        questions: data.questions.map(question => question.question),
        answers: data.questions.map(answer => answer.answers),
        rightAnswer: data.questions.map(right => right.rightId),
        loading: false
      });
    }, 100);
  }

  nextStep = isCorect => {
    const { userAnswer, step } = this.state;

    if (isCorect) {
      this.setState(() => ({ userAnswer: userAnswer + 1 }));
    }

    this.setState(() => ({ step: step + 1 }));
  };

  cancellation = () => {
    this.setState(() => ({
      step: 0,
      userAnswer: 0
    }));
  };

  render() {
    const {
      step,
      questions,
      answers,
      loading,
      rightAnswer,
      userAnswer
    } = this.state;

    if (loading) {
      return (
        <div className="loading">
          <div className="loader" title="3">
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="100px"
              height="100px"
              viewBox="0 0 24 30"
              contentStyleType="enable-background:new 0 0 50 50;"
              space="preserve"
            >
              <rect x="0" y="0" width="4" height="10" fill="#333">
                <animateTransform
                  attributeType="xml"
                  attributeName="transform"
                  type="translate"
                  values="0 0; 0 20; 0 0"
                  begin="0"
                  dur="0.6s"
                  repeatCount="indefinite"
                />
              </rect>
              <rect x="10" y="0" width="4" height="10" fill="#333">
                <animateTransform
                  attributeType="xml"
                  attributeName="transform"
                  type="translate"
                  values="0 0; 0 20; 0 0"
                  begin="0.2s"
                  dur="0.6s"
                  repeatCount="indefinite"
                />
              </rect>
              <rect x="20" y="0" width="4" height="10" fill="#333">
                <animateTransform
                  attributeType="xml"
                  attributeName="transform"
                  type="translate"
                  values="0 0; 0 20; 0 0"
                  begin="0.4s"
                  dur="0.6s"
                  repeatCount="indefinite"
                />
              </rect>
            </svg>
          </div>
        </div>
      );
    } else if (!answers.length) {
      return <div>didn't any answers</div>;
    } else if (step === questions.length) {
      return (
        <div className="main">
          <div className="container">
            <div className="restart">
              <h3>
                Вы ответили верно на <span>{userAnswer}</span> из{" "}
                <span>{questions.length}</span> вопросов
              </h3>
              <button className="btn-restart" onClick={this.cancellation}>
                Запустить заново
              </button>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="main">
        <div className="container">
          <div className="app">
            <div className="app__questions">
              <h3>
                Вопрос {step + 1} из {questions.length}
              </h3>
              <Questions questions={questions} step={step} />
            </div>
            <div className="app__answers">
              <Answers
                answer={answers}
                step={step}
                rightAnswer={rightAnswer}
                nextStep={this.nextStep}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
