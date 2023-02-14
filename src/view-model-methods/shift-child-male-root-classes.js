// This method changes classes in the peoplePair components when a 'shift to
// child - male root' change is triggered.

import { pairLocationsList, shiftPositions, pairComponentShapes } from '../view-model-constants'

export const shiftChildMaleRootClasses = (viewModel, familyTree) => {

  // Change classes on static pair objects to 'no-show'.
  pairLocationsList.forEach( (loc) => {
    let pair = viewModel.peoplePairs.find( pp => pp.label === loc && pp.classStatus.pairtype === 'static' )
    pair.classStatus.visibility = 'no-show'
  })

  // Change classes on ghost objects to 'visible', add tag for 'from'
  // location, and change 'shape' tag where needed.
  pairLocationsList.forEach( (loc) => {
    let pair = viewModel.peoplePairs.find( pp => pp.label === loc + '-ghost' && pp.classStatus.pairtype === 'ghost' )
    pair.classStatus.visibility = 'visible'
    let targetLocation = pair.classStatus.location
    pair.classStatus.location = shiftPositions.toFather[targetLocation]
    pair.classStatus.shape = pairComponentShapes[targetLocation]
  })
}
