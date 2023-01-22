// This method rearranges people in the peoplePair components when a 'shift to father' change is triggered.

import { labelPairMap, pairLocationLabels } from '../view-model-constants'

export const shiftFatherPeople = (viewModel, familyTree) => {
  let generations = viewModel.generations

  let rows = [...viewModel.rows]
  // Delete youngest generation.
  rows.shift()

  // Cut other generations in half, to remove mother's ancestors.
  rows.forEach( (row, index, rows) => {
    rows[index] = row.slice(0, row.length/2)
  })

  // Add next older generation.
  let newRow = []
  rows[generations - 2].forEach( (personId) => {
    newRow.push(familyTree.people[personId].fatherId)
    newRow.push(familyTree.people[personId].motherId)
  })
  rows.push(newRow)

  viewModel.rows = rows

  pairLocationLabels.forEach( (label) => {
    let people = []
    let pairObject = viewModel.peoplePairs.find( pair => pair.label === label)
    labelPairMap[label].forEach( (indexSet) => {
      people.push(rows[indexSet[0]][indexSet[1]])
    })
    pairObject.people = people
  })

}
