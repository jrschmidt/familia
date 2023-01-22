// This method changes the view model to reflect changing the root person to the
// father of the previous root person, and adding a new generation of ancestors.

import { labelPairMap, pairLocationLabels } from '../view-model-constants'
import { shiftFatherPeople } from '../view-model-methods/shift-father-people'
import { shiftFatherPositions } from '../view-model-methods/shift-father-positions'

export const shiftToFather = (viewModel, familyTree) => {
  viewModel.storeStatus = 'shifted'

  let oldRoot = viewModel.rootPersonId
  let newRoot = familyTree.people[oldRoot].fatherId
  viewModel.rootPersonId = newRoot

  shiftFatherPeople(viewModel, familyTree)
  shiftFatherPositions(viewModel, familyTree)
}
