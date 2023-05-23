// This method changes classes in the people pair and SVG connector components when a 'shift to
// child - male root' change is triggered.

import {
  pairLocationsList,
  shiftPairPositions,
  pairComponentShapes,
  connectorLocationsList,
  shiftConnectorPositions
} from '../view-model-constants'

export const shiftChildMaleRootClasses = (viewModel, familyTree) => {

  // Change classes on static pair objects to 'no-show'.
  pairLocationsList.forEach( (loc) => {
    let pair = viewModel.peoplePairs.find( pp => pp.label === loc )
    pair.classStatus.visibility = 'no-show'
  })

  // Change classes on static connector objects to 'no-show'.
  connectorLocationsList.forEach( (loc) => {
    let connector = viewModel.connectors.find( cnx => cnx.label === loc )
  })

  // Change classes on ghost pair objects to 'visible', add tag for 'from'
  // location, and change 'shape' tag where needed.
  pairLocationsList.forEach( (loc) => {
    let pair = viewModel.peoplePairs.find( pp => pp.label === loc + '-ghost' )
    pair.classStatus.visibility = 'visible'
    let targetLocation = pair.classStatus.location
    pair.classStatus.location = shiftPairPositions.toFather[targetLocation]
    pair.classStatus.shape = pairComponentShapes[targetLocation]
  })

  // Change classes on ghost connector objects to 'visible' and add tag for 'from' location.
  connectorLocationsList.forEach( (loc) => {
    let connector = viewModel.connectors.find( cnx => cnx.label === loc  + '-ghost' )
    connector.classStatus.visibility = 'visible'
    let targetLocation = connector.classStatus.location
    connector.classStatus.location = shiftConnectorPositions.toFather[targetLocation]
  })
}
