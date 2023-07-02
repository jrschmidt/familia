import { test, beforeEach, describe, expect } from 'vitest'

import {
  pairLocationsList,
  connectorLocationsList
} from './src/view-model-constants'

// If you want to test with visibilty = 'visible'for static components
// and visibility = 'no-show' for ghost components, pass a value of
// ['visible', 'no-show'] for the second parameter. To test for the
// opposite, pass ['no-show', 'visible'].

export const testToggle = (viewModel, expected) => {
  pairLocationsList.forEach( (loc) => {
    let staticPair = viewModel.peoplePairs.find( pp => pp.label === loc )
    expect(staticPair.classStatus.visibility).toEqual(expected[0])
    let ghostPair = viewModel.peoplePairs.find( pp => pp.label === loc + '-ghost' )
    expect(ghostPair.classStatus.visibility).toEqual(expected[1])
  })

  connectorLocationsList.forEach( (loc) => {
    let staticConnector = viewModel.connectors.find( cnx => cnx.label === loc )
    expect(staticConnector.classStatus.visibility).toEqual(expected[0])
    let ghostConnector = viewModel.connectors.find( cnx => cnx.label === loc + '-ghost')
    expect(ghostConnector.classStatus.visibility).toEqual(expected[1])
  })
}