// This method changes the view model to reflect changing the root person to the
// father of the previous root person, and adding a new generation of ancestors.

import { labelPairMap, staticPairLabels } from '../view-model-constants'

export const shiftToFather = (viewModel, familyTree) => {
  viewModel.storeStatus = 'shifted'
  let generations = viewModel.generations

  let oldRoot = viewModel.rootPersonId
  let newRoot = familyTree.people[oldRoot].fatherId
  viewModel.rootPersonId = newRoot

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

  staticPairLabels.forEach( (label) => {
    let people = []
    let pairObject = viewModel.peoplePairs.find( pair => pair.label === label)
    labelPairMap[label].forEach( (indexSet) => {
      people.push(rows[indexSet[0]][indexSet[1]])
    })
    pairObject.people = people
  })

}
