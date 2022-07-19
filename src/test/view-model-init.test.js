import { test, beforeEach, describe, expect } from 'vitest'

import { setActivePinia, createPinia } from 'pinia'
import { useViewModelStore } from '../stores/viewModelStore'

import { pairInitConstants, viewModelConfig as configData } from '../view-model-constants'

describe('view model initialization before receiving data ("pre-initialization")', () => {
  beforeEach( () => {
    setActivePinia(createPinia())
  })

  test('the store contains empty values before being initialized', () => {
    const viewModel = useViewModelStore()

    expect(viewModel.storeStatus).toEqual('uninitialized')
    expect(viewModel.rootPersonId).toEqual(null)
    expect(viewModel.generations).toEqual(0)
    expect(viewModel.peoplePairs).toEqual([])
    expect(viewModel.rows).toEqual(null)
  })

  test('the store initializes with correct config values', () => {
    const viewModel = useViewModelStore()
    viewModel.initialize(configData, pairInitConstants)

    expect(viewModel.storeStatus).toEqual('initialized')
    expect(viewModel.generations).toEqual(5)
    expect(viewModel.rows).toEqual([ [],[],[],[],[] ])
  })

  test('correctly initializes empty people pair objects for view model', () => {
    const viewModel = useViewModelStore()
    viewModel.initialize(configData, pairInitConstants)

    expect(viewModel.peoplePairs.length).toEqual(40)

    // 'Static' pair objects (count: 16)

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'gen0root',
        classes: ['gen0root', 'static', 'singleton'],
        people: []
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'gen1pair0',
        classes: ['gen1pair0', 'static', 'normal'],
        people: []
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'gen2pair0',
        classes: ['gen2pair0', 'static', 'normal'],
        people: []
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'gen2pair1',
        classes: ['gen2pair1', 'static', 'normal'],
        people: []
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'gen3pair0',
        classes: ['gen3pair0', 'static', 'normal'],
        people: []
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'gen3pair1',
        classes: ['gen3pair1', 'static', 'normal'],
        people: []
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'gen3pair2',
        classes: ['gen3pair2', 'static', 'normal'],
        people: []
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'gen3pair3',
        classes: ['gen3pair3', 'static', 'normal'],
        people: []
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'gen4pair0',
        classes: ['gen4pair0', 'static', 'compressed'],
        people: []
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'gen4pair1',
        classes: ['gen4pair1', 'static', 'compressed'],
        people: []
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'gen4pair2',
        classes: ['gen4pair2', 'static', 'compressed'],
        people: []
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'gen4pair3',
        classes: ['gen4pair3', 'static', 'compressed'],
        people: []
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'gen4pair4',
        classes: ['gen4pair4', 'static', 'compressed'],
        people: [
        ]
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'gen4pair5',
        classes: ['gen4pair5', 'static', 'compressed'],
        people: [
        ]
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'gen4pair6',
        classes: ['gen4pair6', 'static', 'compressed'],
        people: []
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'gen4pair7',
        classes: ['gen4pair7', 'static', 'compressed'],
        people: []
      }
    )

    // 'Fixed ghost' pair objects (count: 16)

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'gen0rootghost',
        classes: ['gen0root', 'ghost', 'no-show'],
        people: []
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'gen1pair0ghost',
        classes: ['gen1pair0', 'ghost', 'no-show'],
        people: []
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'gen2pair0ghost',
        classes: ['gen2pair0', 'ghost', 'no-show'],
        people: []
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'gen2pair1ghost',
        classes: ['gen2pair1', 'ghost', 'no-show'],
        people: []
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'gen3pair0ghost',
        classes: ['gen3pair0', 'ghost', 'no-show'],
        people: []
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'gen3pair1ghost',
        classes: ['gen3pair1', 'ghost', 'no-show'],
        people: []
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'gen3pair2ghost',
        classes: ['gen3pair2', 'ghost', 'no-show'],
        people: []
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'gen3pair3ghost',
        classes: ['gen3pair3', 'ghost', 'no-show'],
        people: []
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'gen4pair0ghost',
        classes: ['gen4pair0', 'ghost', 'no-show'],
        people: []
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'gen4pair1ghost',
        classes: ['gen4pair1', 'ghost', 'no-show'],
        people: []
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'gen4pair2ghost',
        classes: ['gen4pair2', 'ghost', 'no-show'],
        people: []
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'gen4pair3ghost',
        classes: ['gen4pair3', 'ghost', 'no-show'],
        people: []
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'gen4pair4ghost',
        classes: ['gen4pair4', 'ghost', 'no-show'],
        people: []
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'gen4pair5ghost',
        classes: ['gen4pair5', 'ghost', 'no-show'],
        people: []
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'gen4pair6ghost',
        classes: ['gen4pair6', 'ghost', 'no-show'],
        people: []
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'gen4pair7ghost',
        classes: ['gen4pair7', 'ghost', 'no-show'],
        people: []
      }
    )

    // 'Outside ghost' pair objects (count: 8)

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'ghost0',
        classes: ['ghost0', 'ghost', 'no-show'],
        people: []
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'ghost1',
        classes: ['ghost1', 'ghost', 'no-show'],
        people: []
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'ghost2',
        classes: ['ghost2', 'ghost', 'no-show'],
        people: []
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'ghost3',
        classes: ['ghost3', 'ghost', 'no-show'],
        people: []
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'ghost4',
        classes: ['ghost4', 'ghost', 'no-show'],
        people: []
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'ghost5',
        classes: ['ghost5', 'ghost', 'no-show'],
        people: []
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'ghost6',
        classes: ['ghost6', 'ghost', 'no-show'],
        people: []
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'ghost7',
        classes: ['ghost7', 'ghost', 'no-show'],
        people: []
      }
    )

  })

})
