import React, { Component } from 'react';
import axios from 'axios';
import Question from './Question';

class App extends Component {
  constructor() {
    super();
    this.state = {
      quizzes: [],
      newQuestion: '',
      answers: [],
      points: [],
    };
  }

  addQuestion() {
    axios.post('/quizzes/1/questions', {
      'title': this.state.newQuestion,
      'answers': this.state.answers
    })
    .then(function (response) {
       console.log(response);
     })
     .then(() => {
       this.setState({ newQuestion: '', answers: []});
     })
     .catch(function (error) {
       console.log(error);
     });
  }

  componentDidMount(){
    axios.get('/quizzes')
    .then( (result) => {
      this.setState({ quizzes: result.data.quizzes[0] });
      console.log(result.data.quizzes[0].id);
    })
    .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <h1 className="quiz-title">{this.state.quizzes.title}</h1>

        <input value={this.state.newQuestion}
          onChange={(e) => this.setState({newQuestion: e.target.value})}
          getScore={}
        />
        <button onClick={() => this.addQuestion()}> Click</button>

{ selectedAnswers: {}}


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
