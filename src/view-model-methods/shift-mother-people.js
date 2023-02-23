// This method rearranges people in the peoplePair components when a 'shift to mother' change is triggered.

import { pairRowMappings, pairLocationsList } from '../view-model-constants'

export const shiftMotherPeople = (viewModel, familyTree) => {
  let generations = viewModel.generations
  let numberOfPairs = 2 ** (generations -1)

  let rows = [...viewModel.rows]

  // Save a flattened copy of rows[] so we can put the people in the 'ghost' pairs later.
  let rowsFlat = rows.flat()

  // Delete youngest generation.
  rows.shift()

  // Cut other generations in half, to remove father's ancestors.
  rows.forEach( (row, index, rows) => {
    rows[index] = row.slice(row.length/2)
  })

  // Add next older generation.
  let newRow = []
  rows[generations - 2].forEach( (personId) => {
    newRow.push(familyTree.people[personId].fatherId)
    newRow.push(familyTree.people[personId].motherId)
  })
  rows.push(newRow)

  viewModel.rows = rows

  pairLocationsList.forEach( (label) => {
    let people = []
    let pairObject = viewModel.peoplePairs.find( pair => pair.label === label)
    pairRowMappings[label].forEach( (indexSet) => {
      people.push(rows[indexSet[0]][indexSet[1]])
    })
    pairObject.people = people
  })

    // Add correct people to ghost pairs for transition.
    viewModel.peoplePairs[numberOfPairs].people = [ rowsFlat.shift() ]
    let start = viewModel.peoplePairs.length / 2
    let end = viewModel.peoplePairs.length - 1
    for (let i = start; i <= end; i++) {
      viewModel.peoplePairs[i].people = [rowsFlat.shift(), rowsFlat.shift()]
    }  
}
