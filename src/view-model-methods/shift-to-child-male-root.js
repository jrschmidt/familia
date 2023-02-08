// This method changes the view model to reflect changing the root person to the
// child of the previous root person when the root person is male, adding the
// root person's spouse and the spouse's ancestors.

import { shiftChildMaleRootPeople } from '../view-model-methods/shift-child-male-root-people'
import { shiftChildMaleRootClasses } from '../view-model-methods/shift-child-male-root-classes'

export const shiftToChildMaleRoot = (viewModel, familyTree) => {
  viewModel.storeStatus = 'shifted'

  let oldRoot = viewModel.rootPersonId
  let newRoot = familyTree.people[oldRoot].childId
  viewModel.rootPersonId = newRoot

  shiftChildMaleRootPeople(viewModel, familyTree)
  shiftChildMaleRootClasses(viewModel, familyTree)
}
