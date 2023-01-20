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

    expect(viewModel.peoplePairs.length).toEqual(32)

    // 'Static' pair objects (count: 16)

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'gen0root',
        classStatus: {
          location: 'gen0root',
          pairtype: 'static',
          shape: 'singleton',
          visibility: 'visible'
        },
        people: []
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'gen1pair0',
        classStatus: {
          location: 'gen1pair0',
          pairtype: 'static',
          shape: 'normal',
          visibility: 'visible'
        },
        people: []
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'gen2pair0',
        classStatus: {
          location: 'gen2pair0',
          pairtype: 'static',
          shape: 'normal',
          visibility: 'visible'
        },
        people: []
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'gen2pair1',
        classStatus: {
          location: 'gen2pair1',
          pairtype: 'static',
          shape: 'normal',
          visibility: 'visible'
        },
        people: []
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'gen3pair0',
        classStatus: {
          location: 'gen3pair0',
          pairtype: 'static',
          shape: 'normal',
          visibility: 'visible'
        },
        people: []
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'gen3pair1',
        classStatus: {
          location: 'gen3pair1',
          pairtype: 'static',
          shape: 'normal',
          visibility: 'visible'
        },
        people: []
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'gen3pair2',
        classStatus: {
          location: 'gen3pair2',
          pairtype: 'static',
          shape: 'normal',
          visibility: 'visible'
        },
        people: []
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'gen3pair3',
        classStatus: {
          location: 'gen3pair3',
          pairtype: 'static',
          shape: 'normal',
          visibility: 'visible'
        },
        people: []
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'gen4pair0',
        classStatus: {
          location: 'gen4pair0',
          pairtype: 'static',
          shape: 'compressed',
          visibility: 'visible'
        },
        people: []
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'gen4pair1',
        classStatus: {
          location: 'gen4pair1',
          pairtype: 'static',
          shape: 'compressed',
          visibility: 'visible'
        },
        people: []
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'gen4pair2',
        classStatus: {
          location: 'gen4pair2',
          pairtype: 'static',
          shape: 'compressed',
          visibility: 'visible'
        },
        people: []
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'gen4pair3',
        classStatus: {
          location: 'gen4pair3',
          pairtype: 'static',
          shape: 'compressed',
          visibility: 'visible'
        },
        people: []
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'gen4pair4',
        classStatus: {
          location: 'gen4pair4',
          pairtype: 'static',
          shape: 'compressed',
          visibility: 'visible'
        },
        people: [
        ]
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'gen4pair5',
        classStatus: {
          location: 'gen4pair5',
          pairtype: 'static',
          shape: 'compressed',
          visibility: 'visible'
        },
        people: [
        ]
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'gen4pair6',
        classStatus: {
          location: 'gen4pair6',
          pairtype: 'static',
          shape: 'compressed',
          visibility: 'visible'
        },
        people: []
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'gen4pair7',
        classStatus: {
          location: 'gen4pair7',
          pairtype: 'static',
          shape: 'compressed',
          visibility: 'visible'
        },
        people: []
      }
    )

    // 'Ghost' pair objects (count: 16)

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'gen0root-ghost',
        classStatus: {
          location: 'gen0root',
          pairtype: 'ghost',
          shape: '',
          visibility: 'no-show'
        },
        people: []
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'gen1pair0-ghost',
        classStatus: {
          location: 'gen1pair0',
          pairtype: 'ghost',
          shape: '',
          visibility: 'no-show'
        },
        people: []
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'gen2pair0-ghost',
        classStatus: {
          location: 'gen2pair0',
          pairtype: 'ghost',
          shape: '',
          visibility: 'no-show'
        },
        people: []
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'gen2pair1-ghost',
        classStatus: {
          location: 'gen2pair1',
          pairtype: 'ghost',
          shape: '',
          visibility: 'no-show'
        },
        people: []
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'gen3pair0-ghost',
        classStatus: {
          location: 'gen3pair0',
          pairtype: 'ghost',
          shape: '',
          visibility: 'no-show'
        },
        people: []
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'gen3pair1-ghost',
        classStatus: {
          location: 'gen3pair1',
          pairtype: 'ghost',
          shape: '',
          visibility: 'no-show'
        },
        people: []
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'gen3pair2-ghost',
        classStatus: {
          location: 'gen3pair2',
          pairtype: 'ghost',
          shape: '',
          visibility: 'no-show'
        },
        people: []
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'gen3pair3-ghost',
        classStatus: {
          location: 'gen3pair3',
          pairtype: 'ghost',
          shape: '',
          visibility: 'no-show'
        },
        people: []
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'gen4pair0-ghost',
        classStatus: {
          location: 'gen4pair0',
          pairtype: 'ghost',
          shape: '',
          visibility: 'no-show'
        },
        people: []
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'gen4pair1-ghost',
        classStatus: {
          location: 'gen4pair1',
          pairtype: 'ghost',
          shape: '',
          visibility: 'no-show'
        },
        people: []
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'gen4pair2-ghost',
        classStatus: {
          location: 'gen4pair2',
          pairtype: 'ghost',
          shape: '',
          visibility: 'no-show'
        },
        people: []
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'gen4pair3-ghost',
        classStatus: {
          location: 'gen4pair3',
          pairtype: 'ghost',
          shape: '',
          visibility: 'no-show'
        },
        people: []
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'gen4pair4-ghost',
        classStatus: {
          location: 'gen4pair4',
          pairtype: 'ghost',
          shape: '',
          visibility: 'no-show'
        },
        people: []
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'gen4pair5-ghost',
        classStatus: {
          location: 'gen4pair5',
          pairtype: 'ghost',
          shape: '',
          visibility: 'no-show'
        },
        people: []
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'gen4pair6-ghost',
        classStatus: {
          location: 'gen4pair6',
          pairtype: 'ghost',
          shape: '',
          visibility: 'no-show'
        },
        people: []
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'gen4pair7-ghost',
        classStatus: {
          location: 'gen4pair7',
          pairtype: 'ghost',
          shape: '',
          visibility: 'no-show'
        },
        people: []
      }
    )

  })

})
