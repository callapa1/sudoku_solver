import React, { cloneElement } from 'react';
import './Cell.css';

class Cell extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cells: []
    }
    this.handleChange = this.handleChange.bind(this)
    const solution = this.props.solution
    for (let i=0 ; i < 81 ; i++) {
      if (solution[i] == " ") {
        this.state.cells.push({id: i, value: ""})
      } else {
        this.state.cells.push({id: i, value: parseInt(solution[i])})
      }
    }
  }
  
  handleChange(event) {
    const id = event.target.id
    const number = parseInt(event.target.value)
    let new_cells = this.state.cells
    new_cells[id] = {id: parseInt(id), value: number}
    this.setState({
      cells: new_cells
    });
  }
  
  render() {
    function insert_cells(data, handleChange) {
      let return_array = []
      // Groups
      // group_1 = [[0][0], [0][1], [0][2], [1][0], [1][1], [1][2], [2][0], [2][1], [2][2]]
      // group_2 = [[0][3], [0][4], [0][5], [1][3], [1][4], [1][5], [2][3], [2][4], [2][5]]
      // group_3 = [[0][6], [0][7], [0][8], [1][6], [1][7], [1][8], [2][6], [2][7], [2][8]]
      for (let i=0,x=0,y=0 ; i < 81 ; i++) {
        if (y == 9) {
          y = 0
          x++
        }
        if (data[i].value != "") {
          return_array.push(<input
                              id={data[i].id}
                              className='filled_cell'
                              x={x}
                              y={y}
                              value={data[i].value}
                              readOnly
                            />)
        } else {
          return_array.push(<input
                              id={data[i].id}
                              className = 'cell'
                              x={x}
                              y={y}
                              value={data[i].value}
                              onChange={handleChange}
                            />)
        }
        y++
      }
      return return_array
    }
    const cells_data = this.state.cells
    const renderCells = insert_cells(cells_data, this.handleChange)
    const estate = this.state.cells
    return (
      <div>
        {renderCells}
      </div>
    );
  }
}

export default Cell;