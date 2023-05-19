import { defineStore } from 'pinia'
import * as constants from '../view-model-constants'
import { populateViewModel } from '../view-model-methods/populate-view-model'
import { shiftToFather } from '../view-model-methods/shift-to-father'
import { shiftToMother } from '../view-model-methods/shift-to-mother'
import { shiftToChildMaleRoot } from '../view-model-methods/shift-to-child-male-root'
import { shiftToChildFemaleRoot } from '../view-model-methods/shift-to-child-female-root'
import { moveGhosts } from '../view-model-methods/move-ghosts'
import { resetClasses } from '../view-model-methods/reset-classes'

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

    initialize(configData, pairInitConstants, connectorInitConstants) {
      this.storeStatus = 'initialized'
      this.generations = configData.generations
      this.peoplePairs = pairInitConstants.map( (item) => {
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
      this.rows = Array(this.generations).fill( [] )

      this.connectors = connectorInitConstants.map( (item) => {
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
    },

    populate(familyTree) {
      populateViewModel(this, familyTree)
    },

    shiftToFather(familyTree) {
      shiftToFather(this, familyTree)
    },

    shiftToMother(familyTree) {
      shiftToMother(this, familyTree)
    },

    shiftToChildMaleRoot(familyTree) {
      shiftToChildMaleRoot(this, familyTree)
    },

    shiftToChildFemaleRoot(familyTree) {
      shiftToChildFemaleRoot(this, familyTree)
    },

    moveGhosts() {
      moveGhosts(this)
    },

    resetClassesAfterTransition() {
      resetClasses(this)
    }
  }
})
