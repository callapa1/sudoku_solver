import React from 'react';
import './Cell.css';

const perma = []

class Cell extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cells: []
    }
    this.edit_cell = this.edit_cell.bind(this)
    const solution = this.props.solution
    for (let i=0 ; i < 81 ; i++) {
      this.state.cells.push({id: i, value: solution[i]})
    }
    console.log(this.state.cells)
  }
  
  edit_cell(event) {
    let number = parseInt(event.target.value)
    let target = event.target
    this.setState({
      cell: number
    })
  }

  render() {
    const cells_data = this.state.cells

    const renderCells = []


    // const cells_data = this.state.cells
    // const renderCells = []
    // for (let i=0,x=0,y=0 ; i < 81 ; i++) {
    //   if (y == 9) {
    //     y = 0
    //     x++
    //   }
    //   renderCells.push(<input
    //                       key={cell.id}
    //                       value={cell.value}
    //                       data-x={cell.x}
    //                       data-y={cell.y}
    //                     />)
    // }

    return (
      <div>
        {renderCells}
      </div>
      // <input
      //   data-x={cell.x}
      //   data-y={cell.y}
      //   key={cell.id}
      //   className={cell.filledClass || cell.emptyClass}
      //   value={cell.value}
      //   readOnly={cell.readonly}
      //   onChange={this.edit_cell}
      // />
    );
  }
}

export default Cell;