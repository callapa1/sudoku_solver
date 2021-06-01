import React from 'react';
import './Cell.css';

class Cell extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    this.edit_cell = this.edit_cell.bind(this)
  }
  
  edit_cell(event) {
    let number = parseInt(event.target.value)
    let target = event.target
    this.setState({
      cell: number
    })
  }

  render() {
    const cell = this.props
    return (
      <input
        data-x={cell.x}
        data-y={cell.y}
        key={cell.i}
        className={cell.filledClass || cell.emptyClass}
        value={cell.value}
        readOnly={cell.readonly}
        onChange={this.edit_cell}
      />
    );
  }
}

export default Cell;