import { pairLabelMap } from "../view-model-constants"

export const injectIdsIntoPairs = (viewModel, rows) => {
  const staticPeoplePairs = viewModel.peoplePairs.filter( (pair) => pair.label.slice(-5) != 'ghost')

  staticPeoplePairs.forEach( (pair) => {
      pair.people = []
    })
  
    let label = null
    let pairObject = null

  rows.forEach( (row, index1) => {
      row.forEach( (personId, index2) => {
        label = pairLabelMap[index1][index2]
        pairObject = viewModel.peoplePairs.find(pair => pair.label === label)
        pairObject.people.push(rows[index1][index2])
      })
    })
}



