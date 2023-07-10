// This method sets initial values for the view model store prior to populating
// it with family tree data.

import {
  pairInitConstants,
  connectorInitConstants,
} from '../view-model-constants'

export const initializeViewModel = (viewModel, configData) => {
  viewModel.storeStatus = 'initialized'
  viewModel.generations = configData.generations
  viewModel.peoplePairs = pairInitConstants.map( (item) => {
    let pairData = {}
    pairData.label = item[0]
    pairData.home = item[1]
    pairData.people = []
    pairData.classStatus = {
      location: item[2][0],
      pairtype: item[2][1],
      shape: item[2][2],
      visibility: item[2][3]
    }
    return pairData
  })
  viewModel.rows = Array(viewModel.generations).fill( [] )

  viewModel.connectors = connectorInitConstants.map( (item) => {
    let connectorData = {}
    connectorData.label = item[0]
    connectorData.home = item[1]
    connectorData.classStatus = {
      location: item[2][0],
      type: item[2][1],
      visibility: item[2][2]
    }
    return connectorData
  })

}