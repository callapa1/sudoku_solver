import React from 'react';
import './Board.css';
import Cell from './cell/Cell'
import sudokus from '../sudokus/sudokus';

class Board extends React.Component {
  render() {
    function filter_solution(string, difficulty) {
      let final_string = ""
      for (let i=0 ; i < 81 ; i++) {

        if (Math.floor(Math.random() * 100) >= difficulty) {
          final_string += string[i]
        } else {
          final_string += " "
        }
      }
      return final_string
    }
    function get_sudoku(array) {
      const index = Math.floor(Math.random() * 100)
      return array[index]
    }
    let solution = get_sudoku(sudokus)
    let filtered_solution = filter_solution(solution, this.props.difficulty)

    return (
      <div className="board">
        <Cell
          handleWin={this.props.handleWin}
          key={this.props.difficulty}
          solution={filtered_solution}
          full_s={solution}
          solve_sudoku={this.props.solve_sudoku}
        />
      </div>
    );
  }
}

export default Board;