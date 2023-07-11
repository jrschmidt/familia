// Changes to component classes to move pair components. 

import { getPairShape } from "./get-pair-shape"

import {
  pairLocationsList,
  shiftPairPositionsFather,
  shiftPairPositionsMother,
  shiftPairPositionsChildMaleRoot,
  shiftPairPositionsChildFemaleRoot
} from '../view-model-constants'

export const movePairGhosts = (viewModel, shiftMode) => {
  const shiftPairPositions = {
    toFather: shiftPairPositionsFather,
    toMother: shiftPairPositionsMother,
    toChildMaleRoot: shiftPairPositionsChildMaleRoot,
    toChildFemaleRoot: shiftPairPositionsChildFemaleRoot
  }

  pairLocationsList.forEach( (loc) => {
    let pair = viewModel.peoplePairs.find( pp => pp.label === loc + '-ghost' )
    let location = shiftPairPositions[shiftMode][loc]
    
    if ( location === 'none' ) {
      pair.classStatus.location = 'none'
      pair.classStatus.shape = 'faded'
      pair.classStatus.visibility = 'fade'
    }
    else {
      let shape = getPairShape(location)
      pair.classStatus.location = location
      pair.classStatus.shape = shape
    }
  })

}