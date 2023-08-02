// This method rearranges people in the peoplePair components when a 'shift to father' change is triggered.

import { pairRowMappings, pairLocationsList } from '../view-model-constants'

export const shiftFatherPeople = (viewModel, familyTree) => {
  const getPeopleFromStaticPairAt = (pairs, location) => {
    let pairObject = pairs.find( pair => pair.label === location)
    return pairObject.people
  }

  let generations = viewModel.generations
  let numberOfPairs = 2 ** (generations -1)

  let rows = [...viewModel.rows]

  // Add correct people to ghost pairs for transition.

  pairLocationsList.forEach( (label) => {
    let pairObject = viewModel.peoplePairs.find( pair => pair.label === label + '-ghost')
    let loc = pairObject.classStatus.location
    if ( loc != 'enter' ) {
      let people = getPeopleFromStaticPairAt(viewModel.peoplePairs, loc)
      if ( pairObject.label === 'gen0root-ghost' ) {
        people = [ people[0] ]
      }
      pairObject.people = people
    }
  })

  // Now change people in static pairs.

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

  pairLocationsList.forEach( (label) => {
    let people = []
    let pairObject = viewModel.peoplePairs.find( pair => pair.label === label)
    pairRowMappings[label].forEach( (indexSet) => {
      people.push(rows[indexSet[0]][indexSet[1]])
    })
    pairObject.people = people
  })

}