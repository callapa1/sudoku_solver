import React from 'react';

class SolveButton extends React.Component {
  render() {
    return(
      <button id="solve" onClick={this.props.handleSolve}>
        Solve Sudoku
      </button>
    )
  }
}

export default SolveButton;