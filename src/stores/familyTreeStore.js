import { defineStore } from 'pinia'

// For now, directly import the sample family tree data from a file.
import { familyTreeData } from '../data/family-tree-data.js'

export const useFamilyTreeStore = defineStore('familyTree', {

  state: () => {
    return {
      rootPerson: null,
      people: {}
    }
  },

  getters: {
    getFather: (state) => {
      return (personId) => state.people[personId]
    }
  },

  actions: {

    loadTree() {
      this.rootPerson = familyTreeData.rootPerson
      this.people = familyTreeData.people
    }

  }
})
