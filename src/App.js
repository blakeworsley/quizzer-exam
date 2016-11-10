import React, { Component } from 'react';
import axios from 'axios';
import Question from './Question';

class App extends Component {
  constructor() {
    super();
    this.state = {
      quizzes: [],
      selectedAnswers: {}
    };
  }

  calculateAndSubmit(){
    let sum = 0;
    Object.keys(this.state.selectedAnswers).map((id) => {
      let score = this.state.selectedAnswers[id];
      return sum += score;
    });
    console.log(sum);

    this.postScores(sum);
  }

  postScores(sum){
    fetch("/scores", {
      method: "POST",
      body: JSON.stringify({ score: sum })
    })
    .then((response)=> {
      console.log(response);
    })
    .catch((error)=> {
      console.log(error);
    });
  }

  getScores(score, id){
    let newSelectedAnswers = Object.assign({}, this.state.selectedAnswers, {
      [id]: score
    });
    this.setState({selectedAnswers: newSelectedAnswers });
    console.log(score);
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
        <button onClick={() => { this.calculateAndSubmit() }}>Submit Answers</button>
        {this.state.quizzes.questions ?
          this.state.quizzes.questions.map((question) => {
            return( <Question question={question}
              key={question.id}
              getScores={this.getScores.bind(this)}
             /> )
          })
          : <p>Awaiting Questions</p>}
      </div>
    );
  }
}

export default App;
