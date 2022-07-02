import { test, beforeEach, describe, expect } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useViewModelStore } from '../stores/viewModelStore'

describe('view model initialization', () => {
  beforeEach( () => {
    setActivePinia(createPinia())
  })

  test('the store initializes to the correct empty values', () => {
    const viewModel = useViewModelStore()
    expect(viewModel.storeStatus).toEqual('uninitialized')
    expect(viewModel.rootPersonId).toEqual(null)
    expect(viewModel.peoplePairs).toEqual([])
  })
})
