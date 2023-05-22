// This method resets classes after a 'shift' method is triggered, after the
// class transition occurs. Static pair objects are reset to 'visible', ghost
// pair objects are reset to 'no-show', and location and shape classes are reset
// to their original values.

import { pairLocationsList, pairComponentShapes, connectorLocationsList } from '../view-model-constants'

export const moveGhosts = (viewModel) => {

  // Reset ghost locations to the original values to trigger transition animation.
  pairLocationsList.forEach( (loc) => {
    let pair = viewModel.peoplePairs.find( pp => pp.label === loc + '-ghost' )
    if ( pair.classStatus.location != 'enter' ) {
        pair.classStatus.location = loc
    }
    pair.classStatus.shape = pairComponentShapes[loc]
  })

  connectorLocationsList.forEach( (loc) => {
    let pair = viewModel.peoplePairs.find( pp => pp.label === loc + '-ghost' )
    let connector = viewModel.connectors.find( cnx => cnx.label === loc + '-ghost' )
    if ( connector.classStatus.location != 'enter' ) {
        connector.classStatus.location = loc
    }
  })
}