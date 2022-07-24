// This method populates the view model with the data it needs to initialize
// the display for a particular family tree, placing the root person for the
// family tree in the display's root position, and adding a set number of
// ancestor generations.

import { pairLabelMap } from '../view-model-constants'

export const populateViewModel = (viewModel, familyTreeData) => {
  viewModel.storeStatus = 'populated'
  viewModel.rootPersonId = familyTreeData.rootPerson

  // First the person id's are placed in rows for each generation.
  let rows = [...viewModel.rows]
  rows[0] = [ viewModel.rootPersonId ]

  for (let gen = 0; gen < viewModel.generations - 1; gen++) {
    rows[gen].forEach( (personId) => {
      let personInfo = familyTreeData[personId]
      rows[gen + 1] = rows[gen + 1].concat([personInfo.fatherId, personInfo.motherId])
    })
  }

  viewModel.peoplePairs.forEach( (pair) => {
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
