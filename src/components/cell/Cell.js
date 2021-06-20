import React from 'react';
import { flushSync } from 'react-dom';
import './Cell.css';

class Cell extends React.Component {
  constructor(props) {
    super(props)
    const solve_sudoku = this.props.solve_sudoku
    this.state = {
      cells: [],
      solve_sudoku: solve_sudoku
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSolve = this.handleSolve.bind(this)
    const solution = this.props.solution

    for (let i=0,x=0,y=0 ; i < 81 ; i++) {
      if (y === 9) {
        y = 0
        x++
      }
      if (solution[i] == " ") {
        this.state.cells.push({
                                id: i,
                                value: "",
                                original: false,
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
    function check_column(cell, cells) {
      const cell_id = cell.id
      const state_cell = cells[cell_id]
      let column = []
      cells.forEach(c => {
        if (c.y == state_cell.y) {
          column.push(c.value)
        }
      })
      if (column.includes(parseInt(cell.value))) {
        console.log('column wrong')
        return false
      }
      return true
    }
    function check_row(cell, cells) {
      const cell_id = cell.id
      const state_cell = cells[cell_id]
      let row = []
      cells.forEach(c => {
        if (c.x == state_cell.x) {
          row.push(c.value)
        }
      })
      if (row.includes(parseInt(cell.value))) {
        console.log('row wrong')
        return false
      }
      return true
    }
    function check_group(cell, cells){
      const cell_id = cell.id
      const state_cell = cells[cell_id]
      const group = []
      cells.forEach(c => {
        if (c.group == state_cell.group) {
          group.push(c.value)
        }
      })
      if (group.includes(parseInt(cell.value)) || group.includes(String(cell.value))) {
        console.log('group wrong')
        return false
      }
      return true
    }
    function check_move(cell, cells) {
      const column_ok = check_column(cell, cells)
      const row_ok = check_row(cell, cells)
      const group_ok = check_group(cell, cells)
      if (column_ok && row_ok && group_ok) {
        return true
      }
      return false
    }
    function check_full(new_cells) {
      let count = 0
      new_cells.forEach(cell => {
        if (cell.value === "") {
          count += 1
        }
      })
      if (count == 0) {
        return true
      }
      return false
    }
    const html_cell = event.target
    const id = event.target.id
    const number = event.target.value
    let new_cells = this.state.cells
    const group = new_cells[id].group
    const x = new_cells[id].x
    const y = new_cells[id].y
    let valid_move = true
    let full_sudoku = false

    if (event.target.value.length > 1) {
      return
    }
    if(number !== "") {
      valid_move = check_move(event.target, this.state.cells)
    }
    if (number === "") {
      new_cells[id] = {id: parseInt(id), value: "", group:group, x:x, y:y}
      this.setState(state => ({
        cells: new_cells,
        solve_sudoku: state.solve_sudoku
      }))
    } else if (valid_move) {
      new_cells[id] = {id: parseInt(id), value: parseInt(number), group:group, x:x, y:y}
      this.setState(state => ({
        cells: new_cells,
        solve_sudoku: state.solve_sudoku
      }))
      full_sudoku = check_full(new_cells)
      if (full_sudoku) {
        this.props.handleWin()
      }
    } else {
      html_cell.className = `${html_cell.className} bad_cell`
      setTimeout(() => {
        html_cell.className = html_cell.className.split(" ")[0]
      }, 200);
    }
  }
  handleSolve(){
    const full_s = this.props.full_s
    let new_cells = this.state.cells

    for (let i=0 ; i<81 ; i++) {
      if (!new_cells[i].original) {
        new_cells[i].value = parseInt(full_s[i])
      }
    }
    console.log('resolvido')
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
                              className='cell'
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
    let solve_sudoku = this.state.solve_sudoku
    let cells_data = this.state.cells
    let renderCells = insert_cells(cells_data, this.handleChange)

    if (solve_sudoku) {
      this.handleSolve()
    }
    return (
      <div>
        {renderCells}
      </div>
    );
  }
}

export default Cell;