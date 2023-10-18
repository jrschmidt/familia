// This method sets i

import { toggleVisibility } from './toggle-component-visibility.js'
import { resetGhostPairClasses } from './reset-ghost-pair-classes.js'
import { resetGhostConnectorClasses } from './reset-ghost-connector-classes.js'

export const shiftReset = (viewModel, familyTree, shiftMode) => {
  toggleVisibility(viewModel, 'show-static-components')
  resetGhostPairClasses(viewModel)
  resetGhostConnectorClasses(viewModel)
}