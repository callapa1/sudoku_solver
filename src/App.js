import React from 'react';
import './App.css';
import Board from './components/Board'
import Buttons from './components/Buttons'


class App extends React.Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     difficulty: 60
  //   }
  //   this.handleDifficulty = this.handleDifficulty.bind(this)
  // }
  state = {
    difficulty: 60
  }

  handleDifficulty = (new_difficulty) => {
    this.setState({
      difficulty: new_difficulty
    })
  }

  render() {
    return (
      <div className="App">
        <h1>
          Sudoku
        </h1>
        <Board difficulty={this.state.difficulty}/>
        <Buttons handleDifficulty={this.handleDifficulty} />
      </div>
    );
  }
}

export default App;
