import { defineStore } from 'pinia'

// For now, directly import the sample family tree data from a file.
// import { familyTreeData } from '../data/family-tree-data.js'

export const useFamilyTreeStore = defineStore('familyTree', {

  state: () => {
    return {
      rootPerson: null
    }
  },

  getters: {},

  actions: {

    // loadTree() {
    //   state = {...familyTreeData}
    // },

  }
})