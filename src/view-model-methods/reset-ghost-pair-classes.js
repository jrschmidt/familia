// This method resets classes for 'ghost' pair components after shiftSet() and shiftMove().

import { getPairShape } from "./get-pair-shape"

import { pairLocationsList } from '../view-model-constants'

export const resetGhostPairClasses = (viewModel) => {

  // Reset location and shape classes to original value for ghost pair objects.
   pairLocationsList.forEach( (loc) => {
    let pair = viewModel.peoplePairs.find( pp => pp.label === loc + '-ghost' )
    pair.classStatus.location = loc
    pair.classStatus.shape = getPairShape(loc)
  })

}