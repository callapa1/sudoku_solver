import React from 'react';
import'./Buttons.css'

class Buttons extends React.Component {
  handleDifficulty = (event) => {
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
          value={60}
          >Easy</button>
        <button
          onClick={this.handleDifficulty}
          className="button"
          value={40}
          >Medium</button>
        <button
          onClick={this.handleDifficulty}
          className="button"
          value={20}
          >Hard</button>
        </p>
      </div>
    );
  }
}

export default Buttons