import { test, describe } from 'vitest'
import { testClasses } from './test-methods/test-classes'

import { expectedToFather } from './test-data/expected-classes-shift-move-father'
import { expectedToMother } from './test-data/expected-classes-shift-move-mother'
import { expectedToChildMaleRoot } from './test-data/expected-classes-shift-move-child-m'
import { expectedToChildFemaleRoot } from './test-data/expected-classes-shift-move-child-f'

import { setActivePinia, createPinia } from 'pinia'
import { useViewModelStore } from '../stores/viewModelStore'

import { shiftSet } from '../view-model-methods/shift-view-set'
import { shiftMove } from '../view-model-methods/shift-view-move'

import { pairInitConstants, connectorInitConstants, viewModelConfig as configData } from '../view-model-constants'
import { familyTreeData as familyTree } from '../data/family-tree-data.js'

describe('shiftMove() changes location related classes for ghost components', () => {
  
  test('shiftSet(toFather) correctly changes location related classes', () => {
    setActivePinia(createPinia())
    const viewModel = useViewModelStore()
    viewModel.initialize(configData, pairInitConstants, connectorInitConstants)
    viewModel.populate(familyTree)
    shiftSet(viewModel, familyTree, 'toFather')
    shiftMove(viewModel, familyTree, 'toFather')
    testClasses(viewModel, expectedToFather)
  })
  
  test('shiftSet(toMother) correctly changes location related classes', () => {
    setActivePinia(createPinia())
    const viewModel = useViewModelStore()
    viewModel.initialize(configData, pairInitConstants, connectorInitConstants)
    viewModel.populate(familyTree)
    shiftSet(viewModel, familyTree, 'toMother')
    shiftMove(viewModel, familyTree, 'toMother')
    testClasses(viewModel, expectedToMother)
  })
  
  // Currently skipping because shift() function is not complete.
  test.skip('shiftSet(toChildMaleRoot) correctly changes location related classes', () => {
    setActivePinia(createPinia())
    const viewModel = useViewModelStore()
    viewModel.initialize(configData, pairInitConstants, connectorInitConstants)
    viewModel.populate(familyTree)
    viewModel.shift(familyTree, 'toFather')
    shiftSet(viewModel, familyTree, 'toChildMaleRoot')
    shiftMove(viewModel, familyTree, 'toChildMaleRoot')
    testClasses(viewModel, expectedToChildMaleRoot)
  })
  
  // Currently skipping because shift() function is not complete.
  test.skip('shiftSet(toChildFemaleRoot) correctly changes location related classes', () => {
    setActivePinia(createPinia())
    const viewModel = useViewModelStore()
    viewModel.initialize(configData, pairInitConstants, connectorInitConstants)
    viewModel.populate(familyTree)
    viewModel.shift(familyTree, 'toMother')
    shiftSet(viewModel, familyTree, 'toChildFemaleRoot')
    shiftMove(viewModel, familyTree, 'toChildFemaleRoot')
    testClasses(viewModel, expectedToChildFemaleRoot)
  })
  
})
