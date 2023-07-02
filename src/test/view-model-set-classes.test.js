import { test, beforeEach, describe, expect } from 'vitest'

import { setActivePinia, createPinia } from 'pinia'
import { useViewModelStore } from '../stores/viewModelStore'
import { shiftSet } from '../view-model-methods/shift-view-set'

import { testToggle } from './test-methods/test-visibility-toggle'

import { expectedToFather } from './test-data/expected-class-data-shift-set-father'
import { expectedToMother } from './test-data/expected-class-data-shift-set-mother'
import { expectedToChildMaleRoot } from './test-data/expected-class-data-shift-set-child-m'
import { expectedToChildFemaleRoot } from './test-data/expected-class-data-shift-set-child-f'

import { pairInitConstants, connectorInitConstants, viewModelConfig as configData } from '../view-model-constants'
import { familyTreeData as familyTree } from '../data/family-tree-data.js'

describe('shiftSet() functions toggle visibility for static and ghost components', () => {
  
  test('shiftSet(toFather) toggles component visibility', () => {
    setActivePinia(createPinia())
    const viewModel = useViewModelStore()
    viewModel.initialize(configData, pairInitConstants, connectorInitConstants)
    viewModel.populate(familyTree)
    shiftSet(viewModel, familyTree, 'toFather')
    testToggle(viewModel, ['no-show', 'visible'])
  })
  
  test('shiftSet(toMother) toggles component visibility', () => {
    setActivePinia(createPinia())
    const viewModel = useViewModelStore()
    viewModel.initialize(configData, pairInitConstants, connectorInitConstants)
    viewModel.populate(familyTree)
    shiftSet(viewModel, familyTree, 'toMother')
    testToggle(viewModel, ['no-show', 'visible'])
  })
  
  // Currently skipping because shift() function is not complete.
  test.skip('shiftSet(toChildMaleRoot) toggles component visibility', () => {
    setActivePinia(createPinia())
    const viewModel = useViewModelStore()
    viewModel.initialize(configData, pairInitConstants, connectorInitConstants)
    viewModel.populate(familyTree)
    viewModel.shift(familyTree, 'toFather')
    shiftSet(viewModel, familyTree, 'toChildMaleRoot')
    testToggle(viewModel, ['no-show', 'visible'])
  })
  
  // Currently skipping because shift() function is not complete.
  test.skip('shiftSet(toChildFemaleRoot) toggles component visibility', () => {
    setActivePinia(createPinia())
    const viewModel = useViewModelStore()
    viewModel.initialize(configData, pairInitConstants, connectorInitConstants)
    viewModel.populate(familyTree)
    viewModel.shift(familyTree, 'toMother')
    shiftSet(viewModel, familyTree, 'toChildFemaleRoot')
    testToggle(viewModel, ['no-show', 'visible'])
  })
  
})
