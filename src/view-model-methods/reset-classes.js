// This method resets classes on people pair and connector objects after a 'shift'
// method is triggered, after the class transition occurs. Static objects are reset
// to 'visible', ghost pair objects are reset to 'no-show', and location and shape
// classes are reset to their original values.

import {
  pairLocationsList,
  shiftPairPositions,
  pairComponentShapes,
  connectorLocationsList
 } from '../view-model-constants'

export const resetClasses = (viewModel) => {

  let getGhostLocation = (label) => {
    return label.slice(0, label.length - 6)
  }

  // Change classes on static pair objects to 'visible'.
  pairLocationsList.forEach( (loc) => {
    let pair = viewModel.peoplePairs.find( pp => pp.label === loc )
    pair.classStatus.visibility = 'visible'
  })
  
  // Change classes on ghost objects to 'no-show', and change location and
  // shape classes to empty strings.
  pairLocationsList.forEach( (loc) => {
    let pair = viewModel.peoplePairs.find( pp => pp.label === loc + '-ghost' )
    pair.classStatus.visibility = 'no-show'
    let targetLocation = getGhostLocation(pair.label)
    pair.classStatus.location = ''
    pair.classStatus.shape = ''
  })

 // Change classes on static connector objects to 'visible'.
 connectorLocationsList.forEach( (loc) => {
  let connector = viewModel.connectors.find( cnx => cnx.label === loc )
  connector.classStatus.visibility = 'visible'
})

  // Change classes on ghost connector objects to 'no-show' and change location
  // classes to empty strings.
  connectorLocationsList.forEach( (loc) => {
    let label = loc + '-ghost'
    let connector = viewModel.connectors.find( cnx => cnx.label === label )
    connector.classStatus.location = ''
    connector.classStatus.visibility = 'no-show'
  })

}
