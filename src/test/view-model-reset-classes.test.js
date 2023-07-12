import { test, describe, expect } from 'vitest'
import { testClasses } from './test-methods/test-classes'

import { expectedInit } from './test-data/expected-class-data-init'

import { setActivePinia, createPinia } from 'pinia'
import { useViewModelStore } from '../stores/viewModelStore'

import { viewModelConfig as configData } from '../view-model-constants'

describe.skip('shiftReset() resets view model data after shiftSet() and shiftMove()', () => {
  
  test('correctly resets classes after shiftSet() and shiftMove()', () => {
    // setActivePinia(createPinia())
    // const viewModel = useViewModelStore()
    // viewModel.initialize(configData)
    // viewModel.populate(familyTree)
    // shiftSet(viewModel, familyTree, 'toFather')
    // shiftMove(viewModel, 'toFather')
    // testClasses(viewModel, expectedToFather)


    // const viewModel = useViewModelStore()

  })


})
