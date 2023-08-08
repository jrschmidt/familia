import { test, describe, expect } from 'vitest'

import { expectedIdsInit } from './test-data/expected-ids-init'
import { expectedIdsToFather } from './test-data/expected-ids-shift-move-father'
import { expectedIdsToMother } from './test-data/expected-ids-shift-move-mother'

import { setActivePinia, createPinia } from 'pinia'
import { useViewModelStore } from '../stores/viewModelStore'

import { viewModelConfig as configData } from '../view-model-constants'
import { familyTreeData } from '../data/family-tree-data.js'

import { shiftSet } from '../view-model-methods/shift-view-set'

describe('correctly shifts people to new positions', () => {

  const testPositions = (viewModel, expectedData) => {
    expectedData.forEach( (item) => {
      let pair = viewModel.peoplePairs.find( (p) => {
        return ( p.label === item[0] )
      })
      expect(pair).toBeTruthy()

      if (item[1].length > 0) {
      expect(pair.people[0]).toEqual(item[1][0])
      }

      if (item[1].length > 1) {
        expect(pair.people[1]).toEqual(item[1][1])
      }
    })
  }

  test('correctly places people pair data after shiftToFather()', () => {
    setActivePinia(createPinia())
    const viewModel = useViewModelStore()
    viewModel.initialize(configData)
    viewModel.populate(familyTreeData)
    shiftSet(viewModel, familyTreeData, 'toFather')
    testPositions(viewModel, expectedIdsToFather)
  })
  
  test('correctly places people pair data after shiftToMother()', () => {
    setActivePinia(createPinia())
    const viewModel = useViewModelStore()
    viewModel.initialize(configData)
    viewModel.populate(familyTreeData)
    shiftSet(viewModel, familyTreeData, 'toMother')
    testPositions(viewModel, expectedIdsToMother)
  })
  
  test('correctly places people pair data after shiftToChildMaleRoot()', () => {
    setActivePinia(createPinia())
    const viewModel = useViewModelStore()
    viewModel.initialize(configData)
    viewModel.populate(familyTreeData)
    shiftSet(viewModel, familyTreeData, 'toFather')
    shiftSet(viewModel, familyTreeData, 'toChildMaleRoot')
    testPositions(viewModel, expectedIdsInit)
  })
  
  test('correctly places people pair data after shiftToChildFemaleRoot()', () => {
    setActivePinia(createPinia())
    const viewModel = useViewModelStore()
    viewModel.initialize(configData)
    viewModel.populate(familyTreeData)
    shiftSet(viewModel, familyTreeData, 'toMother')
    shiftSet(viewModel, familyTreeData, 'toChildFemaleRoot')
    testPositions(viewModel, expectedIdsInit)
  })
})
