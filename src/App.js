import React, { Component } from 'react';
import axios from 'axios';
import Question from './Question';

class App extends Component {
  constructor() {
    super();
    this.state = {
      quizzes: []
    };
  }

  componentDidMount(){
    axios.get('/quizzes')
    .then( (result) => {
      this.setState({ quizzes: result.data.quizzes[0] });
    })
    .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <h1 className="quiz-title">{this.state.quizzes.title}</h1>
        {this.state.quizzes.questions ?
          this.state.quizzes.questions.map((question) => {
            return( <Question question={question} key={question.id} /> )
          })
          : <p>Awaiting Questions</p>}
      </div>
    );
  }
}

export default App;
