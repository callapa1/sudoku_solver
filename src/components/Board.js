import React from 'react';
import {assign_values} from './process'
import './Board.css';

class Board extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      difficulty: this.props.difficulty
    }
  }
  componentDidUpdate(){
    console.log('update board')
  }

  render() {
    let cells = assign_values(this.state.difficulty)

    return (
      <div className="board">
        {cells}
      </div>
    );
  }
}

export default Board;