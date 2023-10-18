// This method populates the view model with the data it needs to initialize
// the display for a particular family tree, placing the root person for the
// family tree in the display's root position, and adding a set number of
// ancestor generations.

import { pairLabelMap } from '../view-model-constants'

import { rowsPopulate } from './rows-populate.js'
import { injectIdsIntoPairs } from './inject-ids-into-pairs.js'
import { copyPeopleIdsToGhosts } from './copy-people-ids-to-ghosts.js'

export const populateViewModel = (viewModel, familyTree) => {
  viewModel.storeStatus = 'populated'

  const rootPersonId = familyTree.rootPerson
  const generations = viewModel.generations
  const rows = rowsPopulate(familyTree, generations, rootPersonId)
  viewModel.rows = rows
  
  injectIdsIntoPairs(viewModel, rows)
  
  copyPeopleIdsToGhosts(viewModel)  
}