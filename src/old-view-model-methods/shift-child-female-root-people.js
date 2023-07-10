// This method rearranges people in the peoplePair components when a 'shift to mother' change is triggered.

import { pairRowMappings, pairLocationsList } from '../view-model-constants'

export const shiftChildFemaleRootPeople = (viewModel, familyTree) => {
  let generations = viewModel.generations

  let rows = [...viewModel.rows]
  // Delete oldest generation.
  rows.pop()

  // Add child as new root.
  let ch = familyTree.people[rows[0][0]].childId
  rows.unshift( [ch] )

  // Select spouse of previous root.
  let sp = familyTree.people[rows[1][0]].spouseId

  // Add spouse's ancestors.
  let next = [sp]

  for (let i=1; i<generations; i++) {
    let newGen = []
    next.forEach( (p) => {
      newGen.push(familyTree.people[p].fatherId)
      newGen.push(familyTree.people[p].motherId)
    })

    rows[i] = next.concat(rows[i])
    next = newGen
  }

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
