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
    function insert_cells(data) {
      return_array = []
      // Groups
      // group_1 = [[0][0], [0][1], [0][2], [1][0], [1][1], [1][2], [2][0], [2][1], [2][2]]
      // group_2 = [[0][3], [0][4], [0][5], [1][3], [1][4], [1][5], [2][3], [2][4], [2][5]]
      // group_3 = [[0][6], [0][7], [0][8], [1][6], [1][7], [1][8], [2][6], [2][7], [2][8]]

      for (let i=0,x=0,y=0 ; i < 81 ; i++) {
        if (y == 9) {
          y = 0
          x++
        }
        if (data[i].value != " ") {
          return_array.push(<input
                              id={cell[i].id}
                              filledClass={'filled_cell'}
                              x={x}
                              y={y}
                              value={data[i].value}
                              readonly
                            />)
        } else {
          return_array.push(<input
                              id={cell.id}
                              emptyClass = {'cell'}
                              x={x}
                              y={y}
                              value=""
                              onChange={console.log("aiuda")}
                            />)
        }
        y++
      }
      return return_array
    }
    const cells_data = this.state.cells
    const renderCells = insert_cells(cells_data)


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