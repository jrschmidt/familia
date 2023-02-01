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
      // static pairs:
      ['gen0root', ['gen0root', 'static', 'singleton', 'visible'] ],
      ['gen1pair0', ['gen1pair0', 'static', 'normal', 'visible'] ],
      ['gen2pair0', ['gen2pair0', 'static', 'normal', 'visible'] ],
      ['gen2pair1', ['gen2pair1', 'static', 'normal', 'visible'] ],
      ['gen3pair0', ['gen3pair0',  'static', 'normal', 'visible'] ],
      ['gen3pair1', ['gen3pair1',  'static', 'normal', 'visible'] ],
      ['gen3pair2', ['gen3pair2', 'static', 'normal', 'visible'] ],
      ['gen3pair3', ['gen3pair3', 'static', 'normal', 'visible'] ],
      ['gen4pair0', ['gen4pair0', 'static', 'compressed', 'visible'] ],
      ['gen4pair1', ['gen4pair1', 'static', 'compressed', 'visible'] ],
      ['gen4pair2', ['gen4pair2', 'static', 'compressed', 'visible'] ],
      ['gen4pair3', ['gen4pair3', 'static', 'compressed', 'visible'] ],
      ['gen4pair4', ['gen4pair4', 'static', 'compressed', 'visible'] ],
      ['gen4pair5', ['gen4pair5', 'static', 'compressed', 'visible'] ],
      ['gen4pair6', ['gen4pair6', 'static', 'compressed', 'visible'] ],
      ['gen4pair7', ['gen4pair7', 'static', 'compressed', 'visible'] ],

      // ghost pairs:
      ['gen0root-ghost', ['gen0root', 'ghost', '', 'no-show'] ],
      ['gen1pair0-ghost', ['gen1pair0', 'ghost', '', 'no-show'] ],
      ['gen2pair0-ghost', ['gen2pair0', 'ghost', '', 'no-show'] ],
      ['gen2pair1-ghost', ['gen2pair1', 'ghost', '', 'no-show'] ],
      ['gen3pair0-ghost', ['gen3pair0', 'ghost', '', 'no-show'] ],
      ['gen3pair1-ghost', ['gen3pair1', 'ghost', '', 'no-show'] ],
      ['gen3pair2-ghost', ['gen3pair2', 'ghost', '', 'no-show'] ],
      ['gen3pair3-ghost', ['gen3pair3', 'ghost', '', 'no-show'] ],
      ['gen4pair0-ghost', ['gen4pair0', 'ghost', '', 'no-show'] ],
      ['gen4pair1-ghost', ['gen4pair1', 'ghost', '', 'no-show'] ],
      ['gen4pair2-ghost', ['gen4pair2', 'ghost', '', 'no-show'] ],
      ['gen4pair3-ghost', ['gen4pair3', 'ghost', '', 'no-show'] ],
      ['gen4pair4-ghost', ['gen4pair4', 'ghost', '', 'no-show'] ],
      ['gen4pair5-ghost', ['gen4pair5', 'ghost', '', 'no-show'] ],
      ['gen4pair6-ghost', ['gen4pair6', 'ghost', '', 'no-show'] ],
      ['gen4pair7-ghost', ['gen4pair7', 'ghost', '', 'no-show'] ]
    ],

    shiftToFather: [
      // static pairs:
      ['gen0root', ['gen0root', 'static', 'singleton', 'no-show'] ],
      ['gen1pair0', ['gen1pair0', 'static', 'normal', 'no-show'] ],
      ['gen2pair0', ['gen2pair0', 'static', 'normal', 'no-show'] ],
      ['gen2pair1', ['gen2pair1', 'static', 'normal', 'no-show'] ],
      ['gen3pair0', ['gen3pair0',  'static', 'normal', 'no-show'] ],
      ['gen3pair1', ['gen3pair1',  'static', 'normal', 'no-show'] ],
      ['gen3pair2', ['gen3pair2', 'static', 'normal', 'no-show'] ],
      ['gen3pair3', ['gen3pair3', 'static', 'normal', 'no-show'] ],
      ['gen4pair0', ['gen4pair0', 'static', 'compressed', 'no-show'] ],
      ['gen4pair1', ['gen4pair1', 'static', 'compressed', 'no-show'] ],
      ['gen4pair2', ['gen4pair2', 'static', 'compressed', 'no-show'] ],
      ['gen4pair3', ['gen4pair3', 'static', 'compressed', 'no-show'] ],
      ['gen4pair4', ['gen4pair4', 'static', 'compressed', 'no-show'] ],
      ['gen4pair5', ['gen4pair5', 'static', 'compressed', 'no-show'] ],
      ['gen4pair6', ['gen4pair6', 'static', 'compressed', 'no-show'] ],
      ['gen4pair7', ['gen4pair7', 'static', 'compressed', 'no-show'] ],

      // ghost pairs:
      ['gen0root-ghost', ['gen1pair0', 'ghost', 'singleton', 'visible'] ],
      ['gen1pair0-ghost', ['gen2pair0', 'ghost', 'normal', 'visible'] ],
      ['gen2pair0-ghost', ['gen3pair0', 'ghost', 'normal', 'visible'] ],
      ['gen2pair1-ghost', ['gen3pair1', 'ghost', 'normal', 'visible'] ],
      ['gen3pair0-ghost', ['gen4pair0',  'ghost', 'normal', 'visible'] ],
      ['gen3pair1-ghost', ['gen4pair1',  'ghost', 'normal', 'visible'] ],
      ['gen3pair2-ghost', ['gen4pair2', 'ghost', 'normal', 'visible'] ],
      ['gen3pair3-ghost', ['gen4pair3', 'ghost', 'normal', 'visible'] ],
      ['gen4pair0-ghost', ['enter', 'ghost', 'compressed', 'visible'] ],
      ['gen4pair1-ghost', ['enter', 'ghost', 'compressed', 'visible'] ],
      ['gen4pair2-ghost', ['enter', 'ghost', 'compressed', 'visible'] ],
      ['gen4pair3-ghost', ['enter', 'ghost', 'compressed', 'visible'] ],
      ['gen4pair4-ghost', ['enter', 'ghost', 'compressed', 'visible'] ],
      ['gen4pair5-ghost', ['enter', 'ghost', 'compressed', 'visible'] ],
      ['gen4pair6-ghost', ['enter', 'ghost', 'compressed', 'visible'] ],
      ['gen4pair7-ghost', ['enter', 'ghost', 'compressed', 'visible'] ]
    ],

    shiftToMother: [
      // static pairs:
      ['gen0root', ['gen0root', 'static', 'singleton', 'no-show'] ],
      ['gen1pair0', ['gen1pair0', 'static', 'normal', 'no-show'] ],
      ['gen2pair0', ['gen2pair0', 'static', 'normal', 'no-show'] ],
      ['gen2pair1', ['gen2pair1', 'static', 'normal', 'no-show'] ],
      ['gen3pair0', ['gen3pair0',  'static', 'normal', 'no-show'] ],
      ['gen3pair1', ['gen3pair1',  'static', 'normal', 'no-show'] ],
      ['gen3pair2', ['gen3pair2', 'static', 'normal', 'no-show'] ],
      ['gen3pair3', ['gen3pair3', 'static', 'normal', 'no-show'] ],
      ['gen4pair0', ['gen4pair0', 'static', 'compressed', 'no-show'] ],
      ['gen4pair1', ['gen4pair1', 'static', 'compressed', 'no-show'] ],
      ['gen4pair2', ['gen4pair2', 'static', 'compressed', 'no-show'] ],
      ['gen4pair3', ['gen4pair3', 'static', 'compressed', 'no-show'] ],
      ['gen4pair4', ['gen4pair4', 'static', 'compressed', 'no-show'] ],
      ['gen4pair5', ['gen4pair5', 'static', 'compressed', 'no-show'] ],
      ['gen4pair6', ['gen4pair6', 'static', 'compressed', 'no-show'] ],
      ['gen4pair7', ['gen4pair7', 'static', 'compressed', 'no-show'] ],

      // ghost pairs:
      ['gen0root-ghost', ['gen1pair0', 'ghost', 'singleton', 'visible'] ],
      ['gen1pair0-ghost', ['gen2pair1', 'ghost', 'normal', 'visible'] ],
      ['gen2pair0-ghost', ['gen3pair2', 'ghost', 'normal', 'visible'] ],
      ['gen2pair1-ghost', ['gen3pair3', 'ghost', 'normal', 'visible'] ],
      ['gen3pair0-ghost', ['gen4pair4',  'ghost', 'normal', 'visible'] ],
      ['gen3pair1-ghost', ['gen4pair5',  'ghost', 'normal', 'visible'] ],
      ['gen3pair2-ghost', ['gen4pair6', 'ghost', 'normal', 'visible'] ],
      ['gen3pair3-ghost', ['gen4pair7', 'ghost', 'normal', 'visible'] ],
      ['gen4pair0-ghost', ['enter', 'ghost', 'compressed', 'visible'] ],
      ['gen4pair1-ghost', ['enter', 'ghost', 'compressed', 'visible'] ],
      ['gen4pair2-ghost', ['enter', 'ghost', 'compressed', 'visible'] ],
      ['gen4pair3-ghost', ['enter', 'ghost', 'compressed', 'visible'] ],
      ['gen4pair4-ghost', ['enter', 'ghost', 'compressed', 'visible'] ],
      ['gen4pair5-ghost', ['enter', 'ghost', 'compressed', 'visible'] ],
      ['gen4pair6-ghost', ['enter', 'ghost', 'compressed', 'visible'] ],
      ['gen4pair7-ghost', ['enter', 'ghost', 'compressed', 'visible'] ]
    ]
  }

  const testClasses = (viewModel, expectedData) => {
    expectedData.forEach( (item) => {
      let pairId = item[0]
      let pairType = item[1][1]
      let classes = item[1]
      let pair = viewModel.peoplePairs.find( (pair) => pair.label === pairId && pair.classStatus.pairtype === pairType)
      expect(pair.classStatus).toEqual({
        location: classes[0],
        pairtype: classes[1],
        shape: classes[2],
        visibility: classes[3]
      })


    })
  }

  test('correctly sets people pair classes after initializing view model', () => {
    setActivePinia(createPinia())
    const viewModel = useViewModelStore()
    viewModel.initialize(configData, pairInitConstants)
    viewModel.populate(familyTreeData)
    testClasses(viewModel, expectedData.initial)
  })

  test('correctly resets people pair classes after shiftToFather()', () => {
    setActivePinia(createPinia())
    const viewModel = useViewModelStore()
    viewModel.initialize(configData, pairInitConstants)
    viewModel.populate(familyTreeData)
    viewModel.shiftToFather(familyTreeData)
    testClasses(viewModel, expectedData.shiftToFather)
  })

  test.skip('correctly resets people pair classes after shiftToMother()', () => {
    setActivePinia(createPinia())
    const viewModel = useViewModelStore()
    viewModel.initialize(configData, pairInitConstants)
    viewModel.populate(familyTreeData)
    viewModel.shiftToMother(familyTreeData)
    testClasses(viewModel, expectedData.shiftToMother)
  })
})
