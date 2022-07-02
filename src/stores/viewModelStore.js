import { defineStore } from 'pinia'

export const useViewModelStore = defineStore('viewModel', {
  state: () => {
    return {
      storeStatus: 'uninitialized',
      rootPersonId: null,
      peoplePairs: []
    }
  }
})
