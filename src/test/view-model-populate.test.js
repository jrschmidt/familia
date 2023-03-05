import { test, beforeEach, describe, expect } from 'vitest'

import { setActivePinia, createPinia } from 'pinia'
import { useViewModelStore } from '../stores/viewModelStore'

import { pairInitConstants, viewModelConfig as configData } from '../view-model-constants'
import { familyTreeData } from '../data/family-tree-data.js'
import { populateViewModel } from '../view-model-methods/populate-view-model'

describe('correctly places people pair data', () => {

  const expectedData = {
    // Expected results for different actions on viewModelStore.

    initial: [
      ['gen0root', ['p0001'] ],
      ['gen1pair0', ['p0002', 'p0017'] ],
      ['gen2pair0', ['p0003', 'p0004'] ],
      ['gen2pair1', ['p0018', 'p0019'] ],
      ['gen3pair0', ['p0005', 'p0006'] ],
      ['gen3pair1', ['p0007', 'p0008'] ],
      ['gen3pair2', ['p0020', 'p0021'] ],
      ['gen3pair3', ['p0022', 'p0023'] ],
      ['gen4pair0', ['p0009', 'p0010'] ],
      ['gen4pair1', ['p0011', 'p0012'] ],
      ['gen4pair2', ['p0013', 'p0014'] ],
      ['gen4pair3', ['p0015', 'p0016'] ],
      ['gen4pair4', ['p0024', 'p0025'] ],
      ['gen4pair5', ['p0026', 'p0027'] ],
      ['gen4pair6', ['p0028', 'p0029'] ],
      ['gen4pair7', ['p0030', 'p0031'] ]
    ],

    shiftToFather: [
      ['gen0root', ['p0002'] ],
      ['gen1pair0', ['p0003', 'p0004'] ],
      ['gen2pair0', ['p0005', 'p0006'] ],
      ['gen2pair1', ['p0007', 'p0008'] ],
      ['gen3pair0', ['p0009', 'p0010'] ],
      ['gen3pair1', ['p0011', 'p0012'] ],
      ['gen3pair2', ['p0013', 'p0014'] ],
      ['gen3pair3', ['p0015', 'p0016'] ],
      ['gen4pair0', ['p0501', 'p0502'] ],
      ['gen4pair1', ['p0503', 'p0504'] ],
      ['gen4pair2', ['p0505', 'p0506'] ],
      ['gen4pair3', ['p0507', 'p0508'] ],
      ['gen4pair4', ['p0509', 'p0510'] ],
      ['gen4pair5', ['p0511', 'p0512'] ],
      ['gen4pair6', ['p0513', 'p0514'] ],
      ['gen4pair7', ['p0515', 'p0516'] ],
      ['gen0root-ghost', ['p0002'] ],
      ['gen1pair0-ghost', ['p0003', 'p0004'] ],
      ['gen2pair0-ghost', ['p0005', 'p0006'] ],
      ['gen2pair1-ghost', ['p0007', 'p0008'] ],
      ['gen3pair0-ghost', ['p0009', 'p0010'] ],
      ['gen3pair1-ghost', ['p0011', 'p0012'] ],
      ['gen3pair2-ghost', ['p0013', 'p0014'] ],
      ['gen3pair3-ghost', ['p0015', 'p0016'] ],
      ['gen4pair0-ghost', [] ],
      ['gen4pair1-ghost', [] ],
      ['gen4pair2-ghost', [] ],
      ['gen4pair3-ghost', [] ],
      ['gen4pair4-ghost', [] ],
      ['gen4pair5-ghost', [] ],
      ['gen4pair6-ghost', [] ],
      ['gen4pair7-ghost', [] ]

    ],

    shiftToMother: [
      ['gen0root', ['p0017'] ],
      ['gen1pair0', ['p0018', 'p0019'] ],
      ['gen2pair0', ['p0020', 'p0021'] ],
      ['gen2pair1', ['p0022', 'p0023'] ],
      ['gen3pair0', ['p0024', 'p0025'] ],
      ['gen3pair1', ['p0026', 'p0027'] ],
      ['gen3pair2', ['p0028', 'p0029'] ],
      ['gen3pair3', ['p0030', 'p0031'] ],
      ['gen4pair0', ['p0517', 'p0518'] ],
      ['gen4pair1', ['p0519', 'p0520'] ],
      ['gen4pair2', ['p0521', 'p0522'] ],
      ['gen4pair3', ['p0523', 'p0524'] ],
      ['gen4pair4', ['p0525', 'p0526'] ],
      ['gen4pair5', ['p0527', 'p0528'] ],
      ['gen4pair6', ['p0529', 'p0530'] ],
      ['gen4pair7', ['p0531', 'p0532'] ],

      ['gen0root-ghost', ['p0017'] ],
      ['gen1pair0-ghost', ['p0018', 'p0019'] ],
      ['gen2pair0-ghost', ['p0020', 'p0021'] ],
      ['gen2pair1-ghost', ['p0022', 'p0023'] ],
      ['gen3pair0-ghost', ['p0024', 'p0025'] ],
      ['gen3pair1-ghost', ['p0026', 'p0027'] ],
      ['gen3pair2-ghost', ['p0028', 'p0029'] ],
      ['gen3pair3-ghost', ['p0030', 'p0031'] ],
      ['gen4pair0-ghost', [] ],
      ['gen4pair1-ghost', [] ],
      ['gen4pair2-ghost', [] ],
      ['gen4pair3-ghost', [] ],
      ['gen4pair4-ghost', [] ],
      ['gen4pair5-ghost', [] ],
      ['gen4pair6-ghost', [] ],
      ['gen4pair7-ghost', [] ]


    ]
  }

  const testPositions = (viewModel, expectedData) => {
    expectedData.forEach( (item) => {
      let pair = viewModel.peoplePairs.find( (p) => {
        return ( p.label === item[0] )
      })
      expect(pair).toBeTruthy()

      if (item[1].length > 0) {
      expect(pair.people[0]).toEqual(item[1][0])
      }

      if (item[1].length > 1) {
        expect(pair.people[1]).toEqual(item[1][1])
      }
    })
  }

  test('correctly populates people pair data in initial positions', () => {
    setActivePinia(createPinia())
    const viewModel = useViewModelStore()
    viewModel.initialize(configData, pairInitConstants)
    viewModel.populate(familyTreeData)
    testPositions(viewModel, expectedData.initial)
  })

  test('correctly places people pair data after shiftToFather()', () => {
    setActivePinia(createPinia())
    const viewModel = useViewModelStore()
    viewModel.initialize(configData, pairInitConstants)
    viewModel.populate(familyTreeData)
    viewModel.shiftToFather(familyTreeData)
    testPositions(viewModel, expectedData.shiftToFather)
  })

  test('correctly places people pair data after shiftToMother()', () => {
    setActivePinia(createPinia())
    const viewModel = useViewModelStore()
    viewModel.initialize(configData, pairInitConstants)
    viewModel.populate(familyTreeData)
    viewModel.shiftToMother(familyTreeData)
    testPositions(viewModel, expectedData.shiftToMother)
  })

  test('correctly places people pair data after shiftToChildMaleRoot()', () => {
    setActivePinia(createPinia())
    const viewModel = useViewModelStore()
    viewModel.initialize(configData, pairInitConstants)
    viewModel.populate(familyTreeData)
    viewModel.shiftToFather(familyTreeData)
    viewModel.shiftToChildMaleRoot(familyTreeData)
    testPositions(viewModel, expectedData.initial)
  })

  test('correctly places people pair data after shiftToChildFemaleRoot()', () => {
    setActivePinia(createPinia())
    const viewModel = useViewModelStore()
    viewModel.initialize(configData, pairInitConstants)
    viewModel.populate(familyTreeData)
    viewModel.shiftToMother(familyTreeData)
    viewModel.shiftToChildFemaleRoot(familyTreeData)
    testPositions(viewModel, expectedData.initial)
  })
})
