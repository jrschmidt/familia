import { defineStore } from 'pinia'
import * as constants from '../view-model-constants'

export const useViewModelStore = defineStore('viewModel', {
  state: () => {
    return {
      storeStatus: 'uninitialized',
      rootPersonId: null,
      generations: 0,
      peoplePairs: []
    }
  },

  actions: {
    initialize (familyTreeData) {
      this.storeStatus = 'initialized'
      this.generations = constants.viewModelConfig.generations
      this.rootPersonId = familyTreeData.rootPerson
    }
  }
})
