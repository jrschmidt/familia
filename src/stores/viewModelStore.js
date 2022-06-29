import { defineStore } from 'pinia'

export const useViewModelStore = defineStore('viewModel', {
  state: () => {
    return {
      testLabel: "test label"
    }
  }
})
