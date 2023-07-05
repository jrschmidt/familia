// This method makes the changes necessary to trigger the animation of the ghost components. 

import { getPairShape } from "./get-pair-shape"

import {
  pairLocationsList,
  shiftPairPositionsFather,
  shiftPairPositions,
  pairComponentShapes,
  connectorLocationsList,
  shiftConnectorPositions
} from '../view-model-constants'

export const shiftMove = (viewModel, familyTree, shiftMode) => {
  
  pairLocationsList.forEach( (loc) => {
    let pair = viewModel.peoplePairs.find( pp => pp.label === loc + '-ghost' )
    let location = shiftPairPositionsFather[loc]

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