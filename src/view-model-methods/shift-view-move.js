// This method makes the changes necessary to trigger the animation of the ghost components. 

import { getPairShape } from "./get-pair-shape"

import {
  pairLocationsList,
  connectorLocationsList,
  shiftPairPositionsFather,
  shiftPairPositionsMother,
  shiftPairPositionsChildMaleRoot,
  shiftPairPositionsChildFemaleRoot,
  shiftConnectorPositionsFather,
  shiftConnectorPositionsMother,
  shiftConnectorPositionsChildMaleRoot,
  shiftConnectorPositionsChildFemaleRoot
} from '../view-model-constants'

export const shiftMove = (viewModel, familyTree, shiftMode) => {
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
  
  // Change classes on ghost connector objects to 'visible' and add the temporary 'from' location.
  connectorLocationsList.forEach( (loc) => {
    let label = loc + '-ghost'
    let connector = viewModel.connectors.find( cnx => cnx.label === label )
    let shiftLoc = shiftConnectorPositions[shiftMode][loc]
    
    if ( shiftLoc === 'none' ) {
      connector.classStatus.location = 'none'
      connector.classStatus.visibility = 'fade'
    }
    else {
      connector.classStatus.location = shiftLoc
    }

})

}