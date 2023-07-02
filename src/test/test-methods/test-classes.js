import { test, beforeEach, describe, expect } from 'vitest'

export const testClasses = (viewModel, expectedData) => {

  expectedData.pairs.forEach( (item) => {
    let pairId = item[0]
    let classes = item[1]
    let pair = viewModel.peoplePairs.find( (pair) => pair.label === pairId )
    expect(pair.classStatus).toEqual({
      location: classes[0],
      pairtype: classes[1],
      shape: classes[2],
      visibility: classes[3]
    })
  })

  expectedData.connectors.forEach( (item) => {
    let cnxId = item[0]
    let classes = item[1]
    let connector = viewModel.connectors.find( (connector) => connector.label === cnxId )
    expect(connector.classStatus).toEqual({
      location: classes[0],
      type: classes[1],
      visibility: classes[2]
    })
  })

}