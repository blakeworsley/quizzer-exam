import React, { Component } from 'react';
import Answer from './Answer';

class Questions extends Component {
  render() {
    const { question } = this.props;
    return(
      <section key={question.id} className="question-container">
        <h2 className="question-title">{question.title}</h2>
        <form className="question-form">
          {question.answers.map((answer, index) => {
            return(
              <Answer
                id={question.id}
                index={index}
                answer={answer}
                key={Date.now() + index}
              />
            )
          })}
        </form>
      </section>
    );
  }
}

export default Questions;
