import React, { Component } from 'react';
import Answer from './Answer';
import axios from 'axios';

class Questions extends Component {
  deleteQuestion() {
    console.log(this.props.question.id);
    axios.delete(`quizzes/1/questions/${this.props.question.id}`, {title: {}})
    .then(function (response) {
       console.log(response);
     })
     .catch(function (error) {
       console.log(error);
     });
  }

  render() {
    const { question } = this.props;
    return(
      <section key={question.id} className="question-container">
        <h2 className="question-title">{question.title}</h2>
        <button onClick={() => this.deleteQuestion()}>Delete</button>
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
