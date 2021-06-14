import React from 'react';
import {assign_values} from './process'
import './Board.css';

class Board extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    function filter_solution(string, difficulty) {
      final_string = ""
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
    let difficulty = this.props.difficulty
    let filtered_solution = filter_solution(solution, difficulty)
    // let cells = assign_values(this.props.difficulty)

    return (
      <div className="board">
        {/* {cells} */}
        <Cell solution={filtered_solution} />
      </div>
    );
  }
}

export default Board;