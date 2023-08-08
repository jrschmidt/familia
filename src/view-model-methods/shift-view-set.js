// This method sets the values needed by the view model to begin shifting the
// family tree view forward or backward by one generation.

import { toggleVisibility } from './toggle-component-visibility'
import { shiftPeople } from '../view-model-methods/shift-people.js'

export const shiftSet = (viewModel, familyTree, shiftMode) => {
  toggleVisibility(viewModel, 'show-ghost-components')
  shiftPeople(viewModel, familyTree, shiftMode)
}