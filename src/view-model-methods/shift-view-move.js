// Make changes necessary to trigger the animation of the ghost components. 

import { movePairGhosts } from './move-pair-ghosts'
import { moveConnectorGhosts } from './move-connector-ghosts'

export const shiftMove = (viewModel, shiftMode) => {
  movePairGhosts(viewModel, shiftMode)
  moveConnectorGhosts(viewModel, shiftMode)
}