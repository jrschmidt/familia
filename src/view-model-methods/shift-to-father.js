// This method changes the view model to reflect changing the root person to the
// father of the previous root person, and adding a new generation of ancestors.

import { shiftFatherPeople } from '../view-model-methods/shift-father-people'
import { shiftFatherClasses } from '../view-model-methods/shift-father-classes'

export const shiftToFather = (viewModel, familyTree) => {
  viewModel.storeStatus = 'shifted'

  let oldRoot = viewModel.rootPersonId
  let newRoot = familyTree.people[oldRoot].fatherId
  viewModel.rootPersonId = newRoot

  shiftFatherClasses(viewModel, familyTree)
  shiftFatherPeople(viewModel, familyTree)
}
