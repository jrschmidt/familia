// This method resets classes after a 'shift' method is triggered, after the
// class transition occurs. Static pair objects are reset to 'visible', ghost
// pair objects are reset to 'no-show', and location and shape classes are reset
// to their original values.

import { pairLocationsList, pairComponentShapes } from '../view-model-constants'

export const moveGhosts = (viewModel) => {

  // Reset location to its original value to trigger transition animation.
  pairLocationsList.forEach( (loc) => {
    let pair = viewModel.peoplePairs.find( pp => pp.label === loc + '-ghost' )
    if ( pair.classStatus.location != 'enter' ) {
        pair.classStatus.location = loc
    }
    pair.classStatus.shape = pairComponentShapes[loc]
  })
}