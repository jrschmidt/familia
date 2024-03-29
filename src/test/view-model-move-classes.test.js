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

import { viewModelConfig as configData } from '../view-model-constants'
import { familyTreeData as familyTree } from '../data/family-tree-data.js'

describe('shiftMove() changes location related classes for ghost components', () => {
  
  test('shiftMove(toFather) correctly changes location related classes', () => {
    setActivePinia(createPinia())
    const viewModel = useViewModelStore()
    viewModel.initialize(configData)
    viewModel.populate(familyTree)
    shiftSet(viewModel, familyTree, 'toFather')
    shiftMove(viewModel, 'toFather')
    testClasses(viewModel, expectedToFather)
  })
  
  test('shiftMove(toMother) correctly changes location related classes', () => {
    setActivePinia(createPinia())
    const viewModel = useViewModelStore()
    viewModel.initialize(configData)
    viewModel.populate(familyTree)
    shiftSet(viewModel, familyTree, 'toMother')
    shiftMove(viewModel, 'toMother')
    testClasses(viewModel, expectedToMother)
  })
  
  // Currently skipping because shift() function is not complete.
  test('shiftMove(toChildMaleRoot) correctly changes location related classes', () => {
    setActivePinia(createPinia())
    const viewModel = useViewModelStore()
    viewModel.initialize(configData)
    viewModel.populate(familyTree)
    viewModel.shift(familyTree, 'toFather')
    shiftSet(viewModel, familyTree, 'toChildMaleRoot')
    shiftMove(viewModel, 'toChildMaleRoot')
    testClasses(viewModel, expectedToChildMaleRoot)
  })
  
  // Currently skipping because shift() function is not complete.
  test('shiftMove(toChildFemaleRoot) correctly changes location related classes', () => {
    setActivePinia(createPinia())
    const viewModel = useViewModelStore()
    viewModel.initialize(configData)
    viewModel.populate(familyTree)
    viewModel.shift(familyTree, 'toMother')
    shiftSet(viewModel, familyTree, 'toChildFemaleRoot')
    shiftMove(viewModel, 'toChildFemaleRoot')
    testClasses(viewModel, expectedToChildFemaleRoot)
  })
  
})
