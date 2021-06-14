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
    for (let i=0,x=0,y=0 ; i < 81 ; i++) {
      if (y == 9) {
        y = 0
        x++
      }
      if (solution[i] == " ") {
        this.state.cells.push({
                                id: i,
                                value: "",
                                group: defineGroup(i),
                                x: x,
                                y: y
                              })
      } else {
        this.state.cells.push({
                                id: i,
                                value: parseInt(solution[i]), 
                                original: true,
                                group: defineGroup(i),
                                x: x,
                                y: y
                              })
      }
      y++
    }
    function defineGroup(i) {
      let groups = {1:[], 2:[], 3:[], 4:[], 5:[], 6:[], 7:[], 8:[], 9:[]}
      for (let x=0, c=1; x < 62;) {
        groups[c].push(x, x+1, x+2, x+9, x+10, x+11, x+18, x+19, x+20)
        x += 3
        c++
        if (x == 9 || x == 36) {
          x += 18
        }
      }
      // Search in groups
      for (let n=1;n<=9;n++) {
        if (groups[n].includes(i)) {
          return n
        }
      }
    }
  }
  
  handleChange(event) {
    function check_column(cell) {
      console.log(cell)
    }
    function check_move(cell) {
      const column_ok = check_column(cell)
      // const row_ok = check_row()
      // const group_ok = check_group()
      if (column_ok ) { //&& row_ok && group_ok
        return true
      }
      return false
    }
    const id = event.target.id
    const number = parseInt(event.target.value)
    let valid_move = check_move(event.target)
    let new_cells = this.state.cells
    const group = new_cells[id].group
    const x = new_cells[id].x
    const y = new_cells[id].y
    new_cells[id] = {id: parseInt(id), value: number, group:group, x:x, y:y}
    this.setState({
      cells: new_cells
    });
    console.log(this.state.cells)
  }
  
  render() {
    function insert_cells(data, handleChange) {
      let return_array = []
      for (let i=0,x=0,y=0 ; i < 81 ; i++) {
        if (y == 9) {
          y = 0
          x++
        }
        if (data[i].value != "" && data[i].original) {
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