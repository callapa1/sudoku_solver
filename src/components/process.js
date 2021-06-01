// const difficulty_easy = 40
// const difficulty_mid = 60
// const difficulty_hard = 20

import Cell from './cell/Cell'

export const assign_values = (difficulty) => {
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
                      key={i}
                      emptyClass = {'cell'}
                      x={x}
                      y={y}
                    />)
    }
    y++
  }
  return cellList
}