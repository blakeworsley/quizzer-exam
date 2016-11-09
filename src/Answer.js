import React, { Component } from 'react';

class Answers extends Component {
  render() {
    const { answer, index, id } = this.props;
    return(
      <label key={Date.now() + index} className="answer">
        <input
          type="radio"
          name={id}
          value={answer.score}
        />
        {answer.title}
      </label>
    )
  }
}

export default Answers;
