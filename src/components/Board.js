import React from 'react';
import {assign_values} from './process'
import './Board.css';

class Board extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let cells = assign_values(this.props.difficulty)

    return (
      <div className="board">
        {cells}
      </div>
    );
  }
}

export default Board;