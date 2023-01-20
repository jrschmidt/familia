import { defineStore } from 'pinia'
import * as constants from '../view-model-constants'
import { populateViewModel } from '../view-model-methods/populate-view-model'
import { shiftToFather } from '../view-model-methods/shift-to-father'
import { shiftToMother } from '../view-model-methods/shift-to-mother'

export const useViewModelStore = defineStore('viewModel', {

  state: () => {
    return {
      storeStatus: 'uninitialized',
      rootPersonId: null,
      generations: 0,
      peoplePairs: [],
      rows: null
    }
  },

  getters: {},

  actions: {

    initialize(configData, pairInitConstants) {
      this.storeStatus = 'initialized'
      this.generations = configData.generations
      this.peoplePairs = pairInitConstants.map( (item) => {
        let pairData = {}
        pairData.label = item[0]
        pairData.people = []
        pairData.classes = {
          location: item[1][0],
          pairtype: item[1][1],
          shape: item[1][2],
          visibility: item[1][3]
        }
        return pairData
      })
      this.rows = Array(this.generations).fill( [] )
    },

    populate(familyTreeData) {
      populateViewModel(this, familyTreeData)
    },

    shiftToFather(familyTreeData) {
      shiftToFather(this, familyTreeData)
    },

    shiftToMother(familyTreeData) {
      shiftToMother(this, familyTreeData)
    },

    togglePairVisibility() {
      this.peoplePairs.forEach( (pair) => {})
    }

  }
})
