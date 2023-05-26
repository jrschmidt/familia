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
  console.log('**** CALLING shiftChildMaleRootClasses()')

  // Change classes on static pair objects to 'no-show'.
  pairLocationsList.forEach( (loc) => {
    let pair = viewModel.peoplePairs.find( pp => pp.label === loc )
    pair.classStatus.visibility = 'no-show'
  })

   // Change classes on static connector objects to 'no-show'.
   connectorLocationsList.forEach( (loc) => {
    let connector = viewModel.connectors.find( cnx => cnx.label === loc )
    connector.classStatus.visibility = 'no-show'
  })

  pairLocationsList.forEach( (loc) => {
    let pair = viewModel.peoplePairs.find( pp => pp.label === loc + '-ghost' )
    let location = shiftPairPositions.toChildMaleRoot[pair.home]
    pair.classStatus.location = location
    pair.classStatus.visibility = location === 'enter' ? 'no-show' : 'visible'
    pair.classStatus.shape = pairComponentShapes[location]
  })

  // Change classes on ghost connector objects to 'visible' and add tag for 'from' location.
  // connectorLocationsList.forEach( (loc) => {
  //   let connector = viewModel.connectors.find( cnx => cnx.label === loc  + '-ghost' )
  //   connector.classStatus.visibility = 'visible'
  //   let targetLocation = connector.classStatus.location
  //   connector.classStatus.location = shiftConnectorPositions.toChildMaleRoot[targetLocation]
  // })

  // Change classes on ghost connector objects to 'visible' and add the temporary 'from' location.
  connectorLocationsList.forEach( (loc) => {
    let label = loc + '-ghost'
    let connector = viewModel.connectors.find( cnx => cnx.label === label )
    let shiftLoc = shiftConnectorPositions.toChildMaleRoot[loc]
    connector.classStatus.location = shiftLoc
    connector.classStatus.visibility = ( shiftLoc === 'enter') ? 'no-show' : 'visible'
  })



}
