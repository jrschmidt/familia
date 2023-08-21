// This method changes the positions of people in the people pair
// components when a shift to the tree view is triggered.

import { shiftParentPeople } from "./shift-parent"
import { shiftChildPeople } from "./shift-child"

export const shiftPeople = (viewModel, familyTree, shiftMode) => {
  const rows =
    ( shiftMode === 'toFather' || shiftMode === 'toMother' ) ?
    shiftParentPeople(viewModel, familyTree, shiftMode) :
    shiftChildPeople(viewModel, familyTree, shiftMode)

  return rows
}  