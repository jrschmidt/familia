import { test, describe, expect } from 'vitest'
import { testClasses } from './test-methods/test-classes'

import { expectedInit } from './test-data/expected-class-data-init'

import { setActivePinia, createPinia } from 'pinia'
import { useViewModelStore } from '../stores/viewModelStore'

import { viewModelConfig as configData } from '../view-model-constants'

describe('view model initialization before receiving data ("pre-initialization")', () => {
  
  test('the store contains empty values before being initialized', () => {
    setActivePinia(createPinia())
    const viewModel = useViewModelStore()
    
    expect(viewModel.storeStatus).toEqual('uninitialized')
    expect(viewModel.rootPersonId).toEqual(null)
    expect(viewModel.generations).toEqual(0)
    expect(viewModel.peoplePairs).toEqual([])
    expect(viewModel.connectors).toEqual([])
    expect(viewModel.rows).toEqual(null)
  })
  
  test('the store initializes with correct config values', () => {
    setActivePinia(createPinia())
    const viewModel = useViewModelStore()
    viewModel.initialize(configData)
    
    expect(viewModel.storeStatus).toEqual('initialized')
    expect(viewModel.generations).toEqual(5)
    expect(viewModel.rows).toEqual([ [],[],[],[],[] ])
  })
  
  
  test('correctly sets classes after initializing view model', () => {
    setActivePinia(createPinia())
    const viewModel = useViewModelStore()
    viewModel.initialize(configData)
    testClasses(viewModel, expectedInit)
  })


})
