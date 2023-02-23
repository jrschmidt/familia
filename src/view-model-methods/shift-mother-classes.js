// This method changes classes in the peoplePair components when a 'shift to mother' change is triggered.

import { pairLocationsList, shiftPositions, pairComponentShapes } from '../view-model-constants'

export const shiftMotherClasses = (viewModel, familyTree) => {

  // Change classes on static pair objects to 'no-show'.
  pairLocationsList.forEach( (loc) => {
    let pair = viewModel.peoplePairs.find( pp => pp.label === loc )
    pair.classStatus.visibility = 'no-show'
  })

  // Change classes on ghost objects to 'visible', add tag for 'from'
  // location, and change 'shape' tag where needed.
  pairLocationsList.forEach( (loc) => {
    let pair = viewModel.peoplePairs.find( pp => pp.label === loc + '-ghost' )
    let targetLocation = pair.classStatus.location
    let fromLocation = shiftPositions.toFather[targetLocation]
    pair.classStatus.location = shiftPositions.toMother[targetLocation]
    pair.classStatus.visibility = fromLocation === 'enter' ? 'no-show' : 'visible'
    pair.classStatus.shape = pairComponentShapes[fromLocation]
  })
}
