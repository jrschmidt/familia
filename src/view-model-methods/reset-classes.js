// This method resets classes after a 'shift' method is triggered, after the
// class transition occurs. Static pair objects are reset to 'visible', ghost
// pair objects are reset to 'no-show', and location and shape classes are reset
// to their original values.

import { pairLocationsList, shiftPositions, pairComponentShapes } from '../view-model-constants'

export const resetClasses = (viewModel) => {

  let getGhostLocation = (label) => {
    return label.slice(0, label.length - 6)
  }

  // Change classes on static pair objects to 'no-show'.
  pairLocationsList.forEach( (loc) => {
    
    let pair = viewModel.peoplePairs.find( pp => pp.label === loc )
    pair.classStatus.visibility = 'visible'
  })
  
  // Change classes on ghost objects to 'visible', and change location and
  // shape classes to empty strings.
  pairLocationsList.forEach( (loc) => {
    let pair = viewModel.peoplePairs.find( pp => pp.label === loc + '-ghost' )
    pair.classStatus.visibility = 'no-show'
    let targetLocation = getGhostLocation(pair.label)
    pair.classStatus.location = ''
    pair.classStatus.shape = ''
  })
}
