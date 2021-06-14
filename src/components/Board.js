import React from 'react';
import './Board.css';
import Cell from './cell/Cell'

class Board extends React.Component {
  constructor(props) {
    super(props)
  }
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
    let solution = "534678912672195348198342567859761423426853791713924856961537284287419635345286179"
    let filtered_solution = filter_solution(solution, this.props.difficulty)

    return (
      <div className="board">
        <Cell key={this.props.difficulty} solution={filtered_solution} full_s={solution} />
      </div>
    );
  }
}

export default Board;