// This method changes the view model to reflect changing the root person to the
// child of the previous root person when the root person is female, adding the
// root person's spouse and the spouse's ancestors.

import { shiftChildFemaleRootPeople } from '../view-model-methods/shift-child-female-root-people'
import { shiftChildFemaleRootClasses } from '../view-model-methods/shift-child-female-root-classes'

export const shiftToChildFemaleRoot = (viewModel, familyTree) => {
  viewModel.storeStatus = 'shifted'

  let oldRoot = viewModel.rootPersonId
  let newRoot = familyTree.people[oldRoot].childId
  viewModel.rootPersonId = newRoot

  shiftChildFemaleRootPeople(viewModel, familyTree)
  shiftChildFemaleRootClasses(viewModel, familyTree)
}
