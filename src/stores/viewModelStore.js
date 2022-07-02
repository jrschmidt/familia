import { defineStore } from 'pinia'

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
    initialize () {
      this.storeStatus = 'initialized'
    }
  }
})
