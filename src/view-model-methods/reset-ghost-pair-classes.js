// This method resets classes for 'ghost' pair components after shiftSet() and shiftMove().

import { getPairShape } from "./get-pair-shape"
import { copyPeopleIdsToGhosts } from './copy-people-ids-to-ghosts.js'

import { pairLocationsList } from '../view-model-constants'

export const resetGhostPairClasses = (viewModel) => {

  pairLocationsList.forEach( (loc) => {

    // Reset location and shape classes to original value for ghost pair objects.
    let pair = viewModel.peoplePairs.find( pp => pp.label === loc + '-ghost' )
    pair.classStatus.location = loc
    pair.classStatus.shape = getPairShape(loc)
    
    // Reset person id's for ghost pair objects to match person id's on corresponding
    // static pair objects.
    copyPeopleIdsToGhosts(viewModel)
  })
}