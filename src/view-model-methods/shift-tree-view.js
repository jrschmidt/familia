// This method starts the shift in the family tree view by calling three
// functions in succession: shiftSet(), shiftMove() and shiftReset(),
// passing the desired "shift mode" ('toFather', 'toMother', toChildMaleRoot,
// 'toChildFemaleRoot'). These functions will change classes for the people
// pair and connector components, and change people in people pair components,
// to effect the changes in the family tree display.

import { shiftSet } from '../view-model-methods/shift-view-set'
import { shiftMove } from '../view-model-methods/shift-view-move'
import { shiftReset } from '../view-model-methods/shift-view-reset'

export const shiftTree = (viewModel, familyTree, shiftMode) => {
  shiftSet(viewModel, familyTree, shiftMode)
  shiftMove(viewModel, shiftMode)
  shiftReset(viewModel, familyTree, shiftMode)
}