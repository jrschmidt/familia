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
        label: 'gen0root-ghost',
        classes: ['gen0root', 'ghost', 'no-show'],
        people: []
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'gen1pair0-ghost',
        classes: ['gen1pair0', 'ghost', 'no-show'],
        people: []
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'gen2pair0-ghost',
        classes: ['gen2pair0', 'ghost', 'no-show'],
        people: []
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'gen2pair1-ghost',
        classes: ['gen2pair1', 'ghost', 'no-show'],
        people: []
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'gen3pair0-ghost',
        classes: ['gen3pair0', 'ghost', 'no-show'],
        people: []
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'gen3pair1-ghost',
        classes: ['gen3pair1', 'ghost', 'no-show'],
        people: []
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'gen3pair2-ghost',
        classes: ['gen3pair2', 'ghost', 'no-show'],
        people: []
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'gen3pair3-ghost',
        classes: ['gen3pair3', 'ghost', 'no-show'],
        people: []
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'gen4pair0-ghost',
        classes: ['gen4pair0', 'ghost', 'no-show'],
        people: []
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'gen4pair1-ghost',
        classes: ['gen4pair1', 'ghost', 'no-show'],
        people: []
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'gen4pair2-ghost',
        classes: ['gen4pair2', 'ghost', 'no-show'],
        people: []
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'gen4pair3-ghost',
        classes: ['gen4pair3', 'ghost', 'no-show'],
        people: []
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'gen4pair4-ghost',
        classes: ['gen4pair4', 'ghost', 'no-show'],
        people: []
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'gen4pair5-ghost',
        classes: ['gen4pair5', 'ghost', 'no-show'],
        people: []
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'gen4pair6-ghost',
        classes: ['gen4pair6', 'ghost', 'no-show'],
        people: []
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'gen4pair7-ghost',
        classes: ['gen4pair7', 'ghost', 'no-show'],
        people: []
      }
    )

    // 'Floating ghost' pair objects (count: 8)

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'ghost-float-0',
        classes: ['ghost-float-0', 'ghost', 'no-show'],
        people: []
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'ghost-float-1',
        classes: ['ghost-float-1', 'ghost', 'no-show'],
        people: []
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'ghost-float-2',
        classes: ['ghost-float-2', 'ghost', 'no-show'],
        people: []
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'ghost-float-3',
        classes: ['ghost-float-3', 'ghost', 'no-show'],
        people: []
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'ghost-float-4',
        classes: ['ghost-float-4', 'ghost', 'no-show'],
        people: []
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'ghost-float-5',
        classes: ['ghost-float-5', 'ghost', 'no-show'],
        people: []
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'ghost-float-6',
        classes: ['ghost-float-6', 'ghost', 'no-show'],
        people: []
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'ghost-float-7',
        classes: ['ghost-float-7', 'ghost', 'no-show'],
        people: []
      }
    )

  })

})
