// const difficulty_easy = 40
// const difficulty_mid = 60
// const difficulty_hard = 20

import Cell from './cell/Cell'

export const assign_values = (difficulty = 60) => {
  let solution = "534678912672195348198342567859761423426853791713924856961537284287419635345286179"
  let cellList = []

  for (let i=0,x=0,y=0 ; i < 81 ; i++) {
    if (y == 9) {
      y = 0
      x++
    }
    if (Math.floor(Math.random() * 100) >= difficulty) {
      cellList.push(<Cell
                      key={i}
                      filledClass={'filled_cell'}
                      x={x}
                      y={y}
                      value={solution[i]}
                      readonly
                    />)
    } else {
      cellList.push(<Cell
                      emptyClass = {'cell'}
                      x={x}
                      y={y}
                    />)
    }
    y++
  }
  return cellList
}

export const assign_components = (cells, difficulty = 40) => {
  var cellsList = []
  cells.map(row => {
    row.map(cell => {
      if (Math.floor(Math.random() * 100) > difficulty) {
        cellsList.push(<Cell value={cell.value} />)
      } else {
        cellsList.push(
          <Cell
            type='number'
            min='1'
            max='9'
            step='1'
            size='1'
            name='${x}_${y}'
            maxlength='1'
            class='input_cell'
          />)
      }
    })
  })

  return cellsList
}

export const fetch_cells = () => {
  let cells = [[],[],[],[],[],[],[],[],[]]
  const elements = document.getElementsByClassName('cell')

  for (let i=0,x=0,y=0 ; i < 81 ; i++) {
    if (y == 9) {
      y = 0
      x++
    }
    cells[x][y] = elements[i]
    y++
  }

  return cells
}

// export const fill_sudoku = (cells, solution, difficulty = 40) => {
//   for (let i=0,x=0,y=0 ; i < 81 ; i++) {
//     if (y == 9) {
//       y = 0
//       x++
//     }
//     if (Math.floor(Math.random() * 100) > difficulty) {
//       cells[x][y].innerHTML = solution[i]
//       cells[x][y].classList.add('filled_cell')
//     } else {
//       cells[x][y].innerHTML = `<input
//                                   type='number'
//                                   min='1'
//                                   max='9'
//                                   step='1'
//                                   size='1'
//                                   name='${x}_${y}'
//                                   class='input_cell'
//                                   maxlength='1'
//                               />`
//     }
//     y++
//   }
//   return cells
// }
