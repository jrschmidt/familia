// Changes to component classes to move connector components. 

import {
  connectorLocationsList,
  shiftConnectorPositionsFather,
  shiftConnectorPositionsMother,
  shiftConnectorPositionsChildMaleRoot,
  shiftConnectorPositionsChildFemaleRoot
} from '../view-model-constants'

export const moveConnectorGhosts = (viewModel, shiftMode) => {

  const shiftConnectorPositions = {
    toFather: shiftConnectorPositionsFather,
    toMother: shiftConnectorPositionsMother,
    toChildMaleRoot: shiftConnectorPositionsChildMaleRoot,
    toChildFemaleRoot: shiftConnectorPositionsChildFemaleRoot
  }

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