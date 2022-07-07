import { test, beforeEach, describe, expect } from 'vitest'

import { setActivePinia, createPinia } from 'pinia'
import { useViewModelStore } from '../stores/viewModelStore'

import { pairInitConstants, viewModelConfig as configData } from '../view-model-constants'
import { familyTreeData } from '../data/family-tree-data.js'

describe('correctly populates people pair data in initial positions', () => {

  test('correctly populates people pair data in initial positions', () => {
    const viewModel = useViewModelStore()

    populateViewModel(viewModel, familyTreeData)

    expect(viewModel.peoplePairs.length).toBe(40)

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'gen0root',
        classes: ['gen0root', 'static', 'singleton',],
        people: ['p0001']
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'gen1pair0',
        classes: ['gen1pair0', 'static', 'normal'],
        people: ['p0002', 'p0017']
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'gen2pair0',
        classes: ['gen2pair0', 'static', 'normal'],
        people: ['p0003', 'p0004']
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'gen2pair1',
        classes: ['gen2pair1', 'static', 'normal'],
        people: ['p0018', 'p0019']
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'gen3pair0',
        classes: ['gen3pair0', 'static', 'normal'],
        people: ['p0005', 'p0006']
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'gen3pair1',
        classes: ['gen3pair1', 'static', 'normal'],
        people: ['p0007', 'p0008']
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'gen3pair2',
        classes: ['gen3pair2', 'static', 'normal'],
        people: ['p0020', 'p0021']
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'gen3pair3',
        classes: ['gen3pair3', 'static', 'normal'],
        people: ['p0022', 'p0023']
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'gen4pair0',
        classes: ['gen4pair0', 'static', 'compressed'],
        people: ['p0009', 'p0010']
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'gen4pair1',
        classes: ['gen4pair1', 'static', 'compressed'],
        people: ['p0011', 'p0012']
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'gen4pair2',
        classes: ['gen4pair2', 'static', 'compressed'],
        people: ['p0013', 'p0014']
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'gen4pair3',
        classes: ['gen4pair3', 'static', 'compressed'],
        people: ['p0015', 'p0016']
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'gen4pair4',
        classes: ['gen4pair4', 'static', 'compressed'],
        people: ['p0024', 'p0025']
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'gen4pair5',
        classes: ['gen4pair5', 'static', 'compressed'],
        people: ['p0026', 'p0027']
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'gen4pair6',
        classes: ['gen4pair6', 'static', 'compressed'],
        people: ['p0028', 'p0029']
      }
    )

    expect(viewModel.peoplePairs).toContainEqual(
      {
        label: 'gen4pair7',
        classes: ['gen4pair7', 'static', 'compressed'],
        people: ['p0030', 'p0031']
      }
    )

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
