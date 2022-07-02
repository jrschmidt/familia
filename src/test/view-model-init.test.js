import { test, beforeEach, describe, expect } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useViewModelStore } from '../stores/viewModelStore'
import { familyTreeData } from '../data/family-tree-data.js'

describe('view model initialization', () => {
  beforeEach( () => {
    setActivePinia(createPinia())
  })

  test('the store contains empty values before being initialized', () => {
    const viewModel = useViewModelStore()

    expect(viewModel.storeStatus).toEqual('uninitialized')
    expect(viewModel.rootPersonId).toEqual(null)
    expect(viewModel.generations).toEqual(0)
    expect(viewModel.peoplePairs).toEqual([])
  })

  test('the store initializes with correct values', () => {
    const viewModel = useViewModelStore()
    viewModel.initialize(familyTreeData)

    expect(viewModel.storeStatus).toEqual('initialized')
  })
})
