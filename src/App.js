import React from 'react';
import './App.css';
import Board from './components/Board'
import Buttons from './components/Buttons'
import SolveButton from './components/SolveButton'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      difficulty: 40,
      win: false,
      solve_sudoku: false
    }
    this.handleDifficulty = this.handleDifficulty.bind(this)
    this.handleWin = this.handleWin.bind(this)
  }

  handleDifficulty = (new_difficulty) => {
    this.setState({
      difficulty: new_difficulty,
      win: false,
      solve_sudoku: false
    })
  }
  handleWin = () => {
    this.setState(state => ({
      difficulty: state.difficulty,
      win: !state.win,
      solve_sudoku: false
    }))
  }
  handleSolve = () => {
    this.setState(state => ({
      difficulty: state.difficulty,
      win: state.win,
      solve_sudoku: true
    }))
  }

  render() {
    const win_text = 'You win!'
    return (
      <div className="App">
        <h1>
          <span class="win-text"> {this.state.win && win_text} </span>
          Sudoku
           <span class="win-text"> {this.state.win && win_text}</span>
        </h1>
        <Board 
          handleWin={this.handleWin} 
          difficulty={this.state.difficulty}
          solve_sudoku={this.state.solve_sudoku}
        />
        <Buttons 
          handleDifficulty={this.handleDifficulty} 
          handleSolve={this.handleSolve}
        />
      </div>
    );
  }
}

export default App;
