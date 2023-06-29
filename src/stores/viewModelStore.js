import { defineStore } from 'pinia'
import * as constants from '../view-model-constants'

import { initializeViewModel } from '../view-model-methods/initialize-view-model'
import { populateViewModel } from '../view-model-methods/populate-view-model'

import { shiftSet } from '../view-model-methods/shift-view-set'
import { shiftMove } from '../view-model-methods/shift-view-move'
import { shiftReset } from '../view-model-methods/shift-view-reset'

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

    initialize(configData) {
      initializeViewModel(this, configData)
    },

    populate(familyTree) {
      populateViewModel(this, familyTree)
    },

    shift(shiftMode) {
      shiftSet(this, familyTree, shiftMode)
      shiftMove(this, familyTree, shiftMode)
      shiftReset(this, familyTree, shiftMode)
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
