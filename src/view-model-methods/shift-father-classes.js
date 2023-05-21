// This method changes classes in the peoplePair components when a 'shift to father' change is triggered.

import {
  pairLocationsList,
  shiftPairPositions,
  pairComponentShapes,
  connectorLocationsList,
  shiftConnectorPositions
} from '../view-model-constants'

export const shiftFatherClasses = (viewModel, familyTree) => {

  // Change classes on static pair objects to 'no-show'.
  pairLocationsList.forEach( (loc) => {
    let pair = viewModel.peoplePairs.find( pp => pp.label === loc )
    pair.classStatus.visibility = 'no-show'
  })

  // Change classes on ghost pair objects to 'visible', add the temporary 'from'
  // location, and change 'shape' tag where needed.
  pairLocationsList.forEach( (loc) => {
    let pair = viewModel.peoplePairs.find( pp => pp.label === loc + '-ghost' )
    let location = shiftPairPositions.toFather[pair.home]
    pair.classStatus.location = location
    pair.classStatus.visibility = location === 'enter' ? 'no-show' : 'visible'
    pair.classStatus.shape = pairComponentShapes[location]
  })
  
  // Change classes on static connector objects to 'no-show'.
  connectorLocationsList.forEach( (loc) => {
    let connector = viewModel.connectors.find( cnx => cnx.label === loc )
    connector.classStatus.visibility = 'no-show'
  })
  
  // Change classes on ghost connector objects to 'visible' and add the temporary 'from' location.
  connectorLocationsList.forEach( (loc) => {
    let label = loc + '-ghost'
    let connector = viewModel.connectors.find( cnx => cnx.label === label )
    let shiftLoc = shiftConnectorPositions.toFather[loc]
    connector.classStatus.location = shiftLoc
    connector.classStatus.visibility = ( shiftLoc === 'enter') ? 'no-show' : 'visible'
  })
}
