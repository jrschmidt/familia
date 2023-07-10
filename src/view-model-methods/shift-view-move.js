// This method makes the changes necessary to trigger the animation of the ghost components. 

import { getPairShape } from "./get-pair-shape"

import {
  pairLocationsList,
  shiftPairPositionsFather,
  shiftPairPositionsMother,
  shiftPairPositionsChildMaleRoot,
  shiftPairPositionsChildFemaleRoot
} from '../view-model-constants'

import {
  connectorLocationsList,
  shiftConnectorPositionsFather,
  shiftConnectorPositionsMother,
  shiftConnectorPositionsChildMaleRoot,
  shiftConnectorPositionsChildFemaleRoot
} from '../view-model-constants'

export const shiftMove = (viewModel, shiftMode) => {
  const shiftPairPositions = {
    toFather: shiftPairPositionsFather,
    toMother: shiftPairPositionsMother,
    toChildMaleRoot: shiftPairPositionsChildMaleRoot,
    toChildFemaleRoot: shiftPairPositionsChildFemaleRoot
  }

  const shiftConnectorPositions = {
    toFather: shiftConnectorPositionsFather,
    toMother: shiftConnectorPositionsMother,
    toChildMaleRoot: shiftConnectorPositionsChildMaleRoot,
    toChildFemaleRoot: shiftConnectorPositionsChildFemaleRoot
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
  
  connectorLocationsList.forEach( (loc) => {
    let connector = viewModel.connectors.find( cnx => cnx.label === loc + '-ghost' )
    let location = shiftConnectorPositions[shiftMode][loc]
    
    if ( location === 'none' ) {
      connector.classStatus.location = 'none'
      connector.classStatus.visibility = 'fade'
    }
    else {
      connector.classStatus.location = location
    }

})

}