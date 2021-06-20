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
      win: false
    }
    this.handleDifficulty = this.handleDifficulty.bind(this)
    this.handleWin = this.handleWin.bind(this)
  }

  handleDifficulty = (new_difficulty) => {
    this.setState({
      difficulty: new_difficulty,
      win: false
    })
  }
  handleWin = () => {
    this.setState(state => ({
      difficulty: state.difficulty,
      win: !state.win
    }))
  }
  handleSolve = () => {
    console.log("hola")
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
        <Board handleWin={this.handleWin} difficulty={this.state.difficulty} />
        <Buttons handleDifficulty={this.handleDifficulty} handleSolve={this.handleSolve} />
      </div>
    );
  }
}

export default App;
