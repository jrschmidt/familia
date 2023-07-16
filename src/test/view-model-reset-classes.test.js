import { test, describe } from 'vitest'
import { testClasses } from './test-methods/test-classes'

import { expectedInit } from './test-data/expected-class-data-init'

import { setActivePinia, createPinia } from 'pinia'
import { useViewModelStore } from '../stores/viewModelStore'

import { shiftSet } from '../view-model-methods/shift-view-set'
import { shiftMove } from '../view-model-methods/shift-view-move'
import { shiftReset } from '../view-model-methods/shift-view-reset'

import { viewModelConfig as configData } from '../view-model-constants'
import { familyTreeData as familyTree } from '../data/family-tree-data.js'

describe('shiftReset() resets view model data after shiftSet() and shiftMove()', () => {
  
  test('resets classes after shiftSet(toFather) and shiftMove(toFather)', () => {
    setActivePinia(createPinia())
    const viewModel = useViewModelStore()
    viewModel.initialize(configData)
    viewModel.populate(familyTree)
    shiftSet(viewModel, familyTree, 'toFather')
    shiftMove(viewModel, 'toFather')
    shiftReset(viewModel, 'toFather')
    testClasses(viewModel, expectedInit)
  })
  
  test('resets classes after shiftSet(toMother) and shiftMove(toMother)', () => {
    setActivePinia(createPinia())
    const viewModel = useViewModelStore()
    viewModel.initialize(configData)
    viewModel.populate(familyTree)
    shiftSet(viewModel, familyTree, 'toMother')
    shiftMove(viewModel, 'toMother')
    shiftReset(viewModel, 'toMother')
    testClasses(viewModel, expectedInit)
  })
  
  test('resets classes after shiftSet(toChildMaleRoot) and shiftMove(toChildMaleRoot)', () => {
    setActivePinia(createPinia())
    const viewModel = useViewModelStore()
    viewModel.initialize(configData)
    viewModel.populate(familyTree)
    shiftSet(viewModel, familyTree, 'toChildMaleRoot')
    shiftMove(viewModel, 'toChildMaleRoot')
    shiftReset(viewModel, 'toChildMaleRoot')
    testClasses(viewModel, expectedInit)
  })
  
  test('resets classes after shiftSet(toChildFemaleRoot) and shiftMove(toChildFemaleRoot)', () => {
    setActivePinia(createPinia())
    const viewModel = useViewModelStore()
    viewModel.initialize(configData)
    viewModel.populate(familyTree)
    shiftSet(viewModel, familyTree, 'toChildFemaleRoot')
    shiftMove(viewModel, 'toChildFemaleRoot')
    shiftReset(viewModel, 'toChildFemaleRoot')
    testClasses(viewModel, expectedInit)
  })

})
