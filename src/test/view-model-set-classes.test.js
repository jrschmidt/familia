import { test, beforeEach, describe, expect } from 'vitest'

import { setActivePinia, createPinia } from 'pinia'
import { useViewModelStore } from '../stores/viewModelStore'

import { testClasses } from './test-methods/test-classes'

import { pairInitConstants, connectorInitConstants, viewModelConfig as configData } from '../view-model-constants'
import { familyTreeData } from '../data/family-tree-data.js'

describe('correctly sets class data for components', () => {
    
  test.skip('correctly resets classes after shiftToFather()', () => {
    setActivePinia(createPinia())
    const viewModel = useViewModelStore()
    viewModel.initialize(configData, pairInitConstants, connectorInitConstants)
    viewModel.populate(familyTreeData)
    viewModel.shiftToFather(familyTreeData)
    testClasses(viewModel, expectedData.shiftToFather)
  })

  test.skip('correctly resets classes after shiftToMother()', () => {
    setActivePinia(createPinia())
    const viewModel = useViewModelStore()
    viewModel.initialize(configData, pairInitConstants, connectorInitConstants)
    viewModel.populate(familyTreeData)
    viewModel.shiftToMother(familyTreeData)
    testClasses(viewModel, expectedData.shiftToMother)
  })

  test.skip('correctly resets classes after shiftToChildMaleRoot()', () => {
    setActivePinia(createPinia())
    const viewModel = useViewModelStore()
    viewModel.initialize(configData, pairInitConstants, connectorInitConstants)
    viewModel.populate(familyTreeData)
    viewModel.shiftToFather(familyTreeData)
    viewModel.resetClassesAfterTransition()
    viewModel.shiftToChildMaleRoot(familyTreeData)
    testClasses(viewModel, expectedData.shiftToChildMaleRoot)
  })
  
  test.skip('correctly resets classes after shiftToChildFemaleRoot()', () => {
    setActivePinia(createPinia())
    const viewModel = useViewModelStore()
    viewModel.initialize(configData, pairInitConstants, connectorInitConstants)
    viewModel.populate(familyTreeData)
    viewModel.shiftToMother(familyTreeData)
    viewModel.resetClassesAfterTransition()
    viewModel.shiftToChildFemaleRoot(familyTreeData)
    testClasses(viewModel, expectedData.shiftToChildFemaleRoot)
  })
  
})
