// This method changes the view model to reflect changing the root person to the
// mother of the previous root person, and adding a new generation of ancestors.

import { shiftMotherPeople } from '../view-model-methods/shift-mother-people'
import { shiftMotherClasses } from '../view-model-methods/shift-mother-classes'

export const shiftToMother = (viewModel, familyTree) => {
  viewModel.storeStatus = 'shifted'

  let oldRoot = viewModel.rootPersonId
  let newRoot = familyTree.people[oldRoot].motherId
  viewModel.rootPersonId = newRoot

  shiftMotherPeople(viewModel, familyTree)
  shiftMotherClasses(viewModel, familyTree)
}
