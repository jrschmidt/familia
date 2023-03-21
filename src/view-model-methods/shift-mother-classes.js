// This method changes classes in the peoplePair components when a 'shift to mother' change is triggered.

import { pairLocationsList, shiftPositions, pairComponentShapes } from '../view-model-constants'

export const shiftMotherClasses = (viewModel, familyTree) => {

  // Change classes on static pair objects to 'no-show'.
  pairLocationsList.forEach( (loc) => {
    let pair = viewModel.peoplePairs.find( pp => pp.label === loc )
    pair.classStatus.visibility = 'no-show'
  })

  // Change classes on ghost objects to 'visible', add the temporary 'from'
  // location, and change 'shape' tag where needed.
  pairLocationsList.forEach( (loc) => {
    let pair = viewModel.peoplePairs.find( pp => pp.label === loc + '-ghost' )
    let location = shiftPositions.toMother[pair.home]
    pair.classStatus.location = location
    pair.classStatus.visibility = location === 'enter' ? 'no-show' : 'visible'
    pair.classStatus.shape = pairComponentShapes[location]
  })
}
