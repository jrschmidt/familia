import { test, describe } from 'vitest'
import { testToggle } from './test-methods/test-visibility-toggle'

import { setActivePinia, createPinia } from 'pinia'
import { useViewModelStore } from '../stores/viewModelStore'

import { shiftSet } from '../view-model-methods/shift-view-set'

import { pairInitConstants, connectorInitConstants, viewModelConfig as configData } from '../view-model-constants'
import { familyTreeData as familyTree } from '../data/family-tree-data.js'

describe('shiftSet() toggles component visibility for static and ghost components', () => {
  
  test('shiftSet(toFather) toggles component visibility', () => {
    setActivePinia(createPinia())
    const viewModel = useViewModelStore()
    viewModel.initialize(configData)
    viewModel.populate(familyTree)
    shiftSet(viewModel, familyTree, 'toFather')
    testToggle(viewModel, ['no-show', 'visible'])
  })
  
  test('shiftSet(toMother) toggles component visibility', () => {
    setActivePinia(createPinia())
    const viewModel = useViewModelStore()
    viewModel.initialize(configData)
    viewModel.populate(familyTree)
    shiftSet(viewModel, familyTree, 'toMother')
    testToggle(viewModel, ['no-show', 'visible'])
  })
  
  // Currently skipping because shift() function is not complete.
  test.skip('shiftSet(toChildMaleRoot) toggles component visibility', () => {
    setActivePinia(createPinia())
    const viewModel = useViewModelStore()
    viewModel.initialize(configData)
    viewModel.populate(familyTree)
    viewModel.shift(familyTree, 'toFather')
    shiftSet(viewModel, familyTree, 'toChildMaleRoot')
    testToggle(viewModel, ['no-show', 'visible'])
  })
  
  // Currently skipping because shift() function is not complete.
  test.skip('shiftSet(toChildFemaleRoot) toggles component visibility', () => {
    setActivePinia(createPinia())
    const viewModel = useViewModelStore()
    viewModel.initialize(configData)
    viewModel.populate(familyTree)
    viewModel.shift(familyTree, 'toMother')
    shiftSet(viewModel, familyTree, 'toChildFemaleRoot')
    testToggle(viewModel, ['no-show', 'visible'])
  })
  
})
