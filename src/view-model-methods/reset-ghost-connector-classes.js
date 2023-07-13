// This method resets classes for 'ghost' connector components after shiftSet() and shiftMove().

import { connectorLocationsList } from '../view-model-constants'

export const resetGhostConnectorClasses = (viewModel) => {

    // Reset location classes to original value for ghost connector objects.
    connectorLocationsList.forEach( (loc) => {
      let connector = viewModel.connectors.find( cnx => cnx.label === loc + '-ghost' )
      connector.classStatus.location = loc
    })

}