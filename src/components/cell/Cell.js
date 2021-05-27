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
    this.setState({
      cell_value: number
    })
  }
  render() {
    const cell = this.props
    return (
      <input
        key={cell.id}
        className={cell.filledClass || cell.emptyClass}
        value={ this.state.cell_value}
        readOnly={cell.readonly}
        onChange={this.edit_cell}
      />
    );
  }
}

export default Cell;