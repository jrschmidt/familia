// This method sets i

import { toggleVisibility } from '../view-model-methods/toggle-component-visibility.js'
import { resetGhostPairClasses } from '../view-model-methods/reset-ghost-pair-classes.js'
import { resetGhostConnectorClasses } from '../view-model-methods/reset-ghost-connector-classes.js'

export const shiftReset = (viewModel, familyTree, shiftMode) => {
  toggleVisibility(viewModel, 'show-static-components')
  resetGhostPairClasses(viewModel)
  resetGhostConnectorClasses(viewModel)
}