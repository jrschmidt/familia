// This method toggles the visibility of 'static' and 'ghost' pair and connector components.

import { pairLocationsList, connectorLocationsList } from '../view-model-constants'

export const toggleVisibility = (viewModel, visibilityMode) => {
  let vClasses = ['', '']
  if ( visibilityMode === 'show-ghost-components' ) {
    vClasses = ['no-show', 'visible']
  }
  if ( visibilityMode === 'show-static-components' ) {
    vClasses = ['visible', 'no-show']
  }

  // Change classes on static and ghost pair objects.
  pairLocationsList.forEach( (loc) => {
    let pairStatic = viewModel.peoplePairs.find( pp => pp.label === loc )
    pairStatic.classStatus.visibility = vClasses[0]
    let pairGhost = viewModel.peoplePairs.find( pp => pp.label === loc + '-ghost' )
    pairGhost.classStatus.visibility = vClasses[1]
  })
  
  // Change classes on static and ghost connector objects.
  connectorLocationsList.forEach( (loc) => {
    let connectorStatic = viewModel.connectors.find( cnx => cnx.label === loc )
    connectorStatic.classStatus.visibility = vClasses[0]
    let connectorGhost = viewModel.connectors.find( cnx => cnx.label === loc + '-ghost' )
    connectorGhost.classStatus.visibility = vClasses[1]
  })
}