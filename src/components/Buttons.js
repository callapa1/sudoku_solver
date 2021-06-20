import React from 'react';
import'./Buttons.css'

class Buttons extends React.Component {
  handleDifficulty = event => {
    let difficulty = event.target.value
    this.props.handleDifficulty(difficulty)
  }

  render() {
    return (
      <div className="buttons">
        <p> Level:
          <button
            onClick={this.handleDifficulty}
            className="button"
            value={40}
          >Easy</button>
          <button
            onClick={this.handleDifficulty}
            className="button"
            value={60}
          >Medium</button>
          <button
            onClick={this.handleDifficulty}
            className="button"
            value={75}
          >Hard</button>
        </p>
        <p>
          <button className="button" onClick={this.props.handleSolve}>
            Solve Sudoku
          </button>
        </p>
      </div>
    );
  }
}

export default Buttons