import { defineStore } from 'pinia'
import * as constants from '../view-model-constants'

import { initializeViewModel } from '../view-model-methods/initialize-view-model'
import { populateViewModel } from '../view-model-methods/populate-view-model'

import { shiftSet } from '../view-model-methods/shift-view-set'
import { shiftMove } from '../view-model-methods/shift-view-move'
import { shiftReset } from '../view-model-methods/shift-view-reset'

export const useViewModelStore = defineStore('viewModel', {

  state: () => {
    return {
      storeStatus: 'uninitialized',
      rootPersonId: null,
      generations: 0,
      peoplePairs: [],
      connectors: [],
      rows: null
    }
  },

  getters: {},

  actions: {

    initialize(configData) {
      initializeViewModel(this, configData)
    },

    populate(familyTree) {
      populateViewModel(this, familyTree)
    },

    shift(familyTree, shiftMode) {
      shiftSet(this, familyTree, shiftMode)
      shiftMove(this, familyTree, shiftMode)
      shiftReset(this, familyTree, shiftMode)
    },
    
    tempShiftSet(familyTree, shiftMode) {
      shiftSet(this, familyTree, shiftMode)
    }

  }
})
