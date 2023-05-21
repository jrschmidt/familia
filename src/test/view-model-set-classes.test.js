import { test, beforeEach, describe, expect } from 'vitest'

import { setActivePinia, createPinia } from 'pinia'
import { useViewModelStore } from '../stores/viewModelStore'

import { pairInitConstants, connectorInitConstants, viewModelConfig as configData } from '../view-model-constants'
import { familyTreeData } from '../data/family-tree-data.js'

describe('correctly sets class data for components', () => {

  const expectedData = {
    // Expected results for different actions on viewModelStore.
    
    initial: {
      
      pairs: [
        // static pairs:
        ['gen0root', ['gen0root', 'static', 'singleton', 'visible'] ],
        ['gen1pair0', ['gen1pair0', 'static', 'normal', 'visible'] ],
        ['gen2pair0', ['gen2pair0', 'static', 'normal', 'visible'] ],
        ['gen2pair1', ['gen2pair1', 'static', 'normal', 'visible'] ],
        ['gen3pair0', ['gen3pair0', 'static', 'normal', 'visible'] ],
        ['gen3pair1', ['gen3pair1', 'static', 'normal', 'visible'] ],
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
        ['gen0root-ghost', ['', 'ghost', '', 'no-show'] ],
        ['gen1pair0-ghost', ['', 'ghost', '', 'no-show'] ],
        ['gen2pair0-ghost', ['', 'ghost', '', 'no-show'] ],
        ['gen2pair1-ghost', ['', 'ghost', '', 'no-show'] ],
        ['gen3pair0-ghost', ['', 'ghost', '', 'no-show'] ],
        ['gen3pair1-ghost', ['', 'ghost', '', 'no-show'] ],
        ['gen3pair2-ghost', ['', 'ghost', '', 'no-show'] ],
        ['gen3pair3-ghost', ['', 'ghost', '', 'no-show'] ],
        ['gen4pair0-ghost', ['', 'ghost', '', 'no-show'] ],
        ['gen4pair1-ghost', ['', 'ghost', '', 'no-show'] ],
        ['gen4pair2-ghost', ['', 'ghost', '', 'no-show'] ],
        ['gen4pair3-ghost', ['', 'ghost', '', 'no-show'] ],
        ['gen4pair4-ghost', ['', 'ghost', '', 'no-show'] ],
        ['gen4pair5-ghost', ['', 'ghost', '', 'no-show'] ],
        ['gen4pair6-ghost', ['', 'ghost', '', 'no-show'] ],
        ['gen4pair7-ghost', ['', 'ghost', '', 'no-show'] ]
      ],

      connectors: [
        // static connectors:
        ['cnx-0-0', ['cnx-0-0', 'static', 'visible']],
        ['cnx-1-0', ['cnx-1-0', 'static', 'visible']],
        ['cnx-1-1', ['cnx-1-1', 'static', 'visible']],
        ['cnx-2-0', ['cnx-2-0', 'static', 'visible']],
        ['cnx-2-1', ['cnx-2-1', 'static', 'visible']],
        ['cnx-2-2', ['cnx-2-2', 'static', 'visible']],
        ['cnx-2-3', ['cnx-2-3', 'static', 'visible']],
        ['cnx-3-0', ['cnx-3-0', 'static', 'visible']],
        ['cnx-3-1', ['cnx-3-1', 'static', 'visible']],
        ['cnx-3-2', ['cnx-3-2', 'static', 'visible']],
        ['cnx-3-3', ['cnx-3-3', 'static', 'visible']],
        ['cnx-3-4', ['cnx-3-4', 'static', 'visible']],
        ['cnx-3-5', ['cnx-3-5', 'static', 'visible']],
        ['cnx-3-6', ['cnx-3-6', 'static', 'visible']],
        ['cnx-3-7', ['cnx-3-7', 'static', 'visible']],
        
        // ghost connectors:
        ['cnx-0-0-ghost', ['', 'ghost', 'no-show']],
        ['cnx-1-0-ghost', ['', 'ghost', 'no-show']],
        ['cnx-1-1-ghost', ['', 'ghost', 'no-show']],
        ['cnx-2-0-ghost', ['', 'ghost', 'no-show']],
        ['cnx-2-1-ghost', ['', 'ghost', 'no-show']],
        ['cnx-2-2-ghost', ['', 'ghost', 'no-show']],
        ['cnx-2-3-ghost', ['', 'ghost', 'no-show']],
        ['cnx-3-0-ghost', ['', 'ghost', 'no-show']],
        ['cnx-3-1-ghost', ['', 'ghost', 'no-show']],
        ['cnx-3-2-ghost', ['', 'ghost', 'no-show']],
        ['cnx-3-3-ghost', ['', 'ghost', 'no-show']],
        ['cnx-3-4-ghost', ['', 'ghost', 'no-show']],
        ['cnx-3-5-ghost', ['', 'ghost', 'no-show']],
        ['cnx-3-6-ghost', ['', 'ghost', 'no-show']],
        ['cnx-3-7-ghost', ['', 'ghost', 'no-show']]
      ]
    },
      
    shiftToFather: {
    // ( results before resetClasses() )

      pairs: [
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
        ['gen0root-ghost', ['gen1pair0', 'ghost', 'normal', 'visible'] ],
        ['gen1pair0-ghost', ['gen2pair0', 'ghost', 'normal', 'visible'] ],
        ['gen2pair0-ghost', ['gen3pair0', 'ghost', 'normal', 'visible'] ],
        ['gen2pair1-ghost', ['gen3pair1', 'ghost', 'normal', 'visible'] ],
        ['gen3pair0-ghost', ['gen4pair0',  'ghost', 'compressed', 'visible'] ],
        ['gen3pair1-ghost', ['gen4pair1',  'ghost', 'compressed', 'visible'] ],
        ['gen3pair2-ghost', ['gen4pair2', 'ghost', 'compressed', 'visible'] ],
        ['gen3pair3-ghost', ['gen4pair3', 'ghost', 'compressed', 'visible'] ],
        ['gen4pair0-ghost', ['enter', 'ghost', '', 'no-show'] ],
        ['gen4pair1-ghost', ['enter', 'ghost', '', 'no-show'] ],
        ['gen4pair2-ghost', ['enter', 'ghost', '', 'no-show'] ],
        ['gen4pair3-ghost', ['enter', 'ghost', '', 'no-show'] ],
        ['gen4pair4-ghost', ['enter', 'ghost', '', 'no-show'] ],
        ['gen4pair5-ghost', ['enter', 'ghost', '', 'no-show'] ],
        ['gen4pair6-ghost', ['enter', 'ghost', '', 'no-show'] ],
        ['gen4pair7-ghost', ['enter', 'ghost', '', 'no-show'] ]
      ],

      connectors: [
        // static connectors:
        ['cnx-0-0', ['cnx-0-0', 'static', 'no-show']],
        ['cnx-1-0', ['cnx-1-0', 'static', 'no-show']],
        ['cnx-1-1', ['cnx-1-1', 'static', 'no-show']],
        ['cnx-2-0', ['cnx-2-0', 'static', 'no-show']],
        ['cnx-2-1', ['cnx-2-1', 'static', 'no-show']],
        ['cnx-2-2', ['cnx-2-2', 'static', 'no-show']],
        ['cnx-2-3', ['cnx-2-3', 'static', 'no-show']],
        ['cnx-3-0', ['cnx-3-0', 'static', 'no-show']],
        ['cnx-3-1', ['cnx-3-1', 'static', 'no-show']],
        ['cnx-3-2', ['cnx-3-2', 'static', 'no-show']],
        ['cnx-3-3', ['cnx-3-3', 'static', 'no-show']],
        ['cnx-3-4', ['cnx-3-4', 'static', 'no-show']],
        ['cnx-3-5', ['cnx-3-5', 'static', 'no-show']],
        ['cnx-3-6', ['cnx-3-6', 'static', 'no-show']],
        ['cnx-3-7', ['cnx-3-7', 'static', 'no-show']],
        
        // ghost connectors:
        ['cnx-0-0-ghost', ['cnx-1-0', 'ghost', 'visible']],
        ['cnx-1-0-ghost', ['cnx-2-0', 'ghost', 'visible']],
        ['cnx-1-1-ghost', ['cnx-2-1', 'ghost', 'visible']],
        ['cnx-2-0-ghost', ['cnx-3-0', 'ghost', 'visible']],
        ['cnx-2-1-ghost', ['cnx-3-1', 'ghost', 'visible']],
        ['cnx-2-2-ghost', ['cnx-3-2', 'ghost', 'visible']],
        ['cnx-2-3-ghost', ['cnx-3-3', 'ghost', 'visible']],
        ['cnx-3-0-ghost', ['enter', 'ghost', 'no-show']],
        ['cnx-3-1-ghost', ['enter', 'ghost', 'no-show']],
        ['cnx-3-2-ghost', ['enter', 'ghost', 'no-show']],
        ['cnx-3-3-ghost', ['enter', 'ghost', 'no-show']],
        ['cnx-3-4-ghost', ['enter', 'ghost', 'no-show']],
        ['cnx-3-5-ghost', ['enter', 'ghost', 'no-show']],
        ['cnx-3-6-ghost', ['enter', 'ghost', 'no-show']],
        ['cnx-3-7-ghost', ['enter', 'ghost', 'no-show']]
      ]
      },
        
      shiftToMother: {
      // ( results before resetClasses() )

        pairs: [
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
          ['gen0root-ghost', ['gen1pair0', 'ghost', 'normal', 'visible'] ],
          ['gen1pair0-ghost', ['gen2pair1', 'ghost', 'normal', 'visible'] ],
          ['gen2pair0-ghost', ['gen3pair2', 'ghost', 'normal', 'visible'] ],
          ['gen2pair1-ghost', ['gen3pair3', 'ghost', 'normal', 'visible'] ],
          ['gen3pair0-ghost', ['gen4pair4', 'ghost', 'compressed', 'visible'] ],
          ['gen3pair1-ghost', ['gen4pair5',  'ghost', 'compressed', 'visible'] ],
          ['gen3pair2-ghost', ['gen4pair6', 'ghost', 'compressed', 'visible'] ],
          ['gen3pair3-ghost', ['gen4pair7', 'ghost', 'compressed', 'visible'] ],
          ['gen4pair0-ghost', ['enter', 'ghost', '', 'no-show'] ],
          ['gen4pair1-ghost', ['enter', 'ghost', '', 'no-show'] ],
          ['gen4pair2-ghost', ['enter', 'ghost', '', 'no-show'] ],
          ['gen4pair3-ghost', ['enter', 'ghost', '', 'no-show'] ],
          ['gen4pair4-ghost', ['enter', 'ghost', '', 'no-show'] ],
          ['gen4pair5-ghost', ['enter', 'ghost', '', 'no-show'] ],
          ['gen4pair6-ghost', ['enter', 'ghost', '', 'no-show'] ],
          ['gen4pair7-ghost', ['enter', 'ghost', '', 'no-show'] ]
        ],
      },
          
      shiftBackToRoot: {
      // ( results after resetClasses() )
        pairs: [
          
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
          ['gen0root-ghost', ['', 'ghost', '', 'no-show'] ],
          ['gen1pair0-ghost', ['', 'ghost', '', 'no-show'] ],
          ['gen2pair0-ghost', ['', 'ghost', '', 'no-show'] ],
          ['gen2pair1-ghost', ['', 'ghost', '', 'no-show'] ],
          ['gen3pair0-ghost', ['', 'ghost', '', 'no-show'] ],
          ['gen3pair1-ghost', ['', 'ghost', '', 'no-show'] ],
          ['gen3pair2-ghost', ['', 'ghost', '', 'no-show'] ],
          ['gen3pair3-ghost', ['', 'ghost', '', 'no-show'] ],
          ['gen4pair0-ghost', ['', 'ghost', '', 'no-show'] ],
          ['gen4pair1-ghost', ['', 'ghost', '', 'no-show'] ],
          ['gen4pair2-ghost', ['', 'ghost', '', 'no-show'] ],
          ['gen4pair3-ghost', ['', 'ghost', '', 'no-show'] ],
          ['gen4pair4-ghost', ['', 'ghost', '', 'no-show'] ],
          ['gen4pair5-ghost', ['', 'ghost', '', 'no-show'] ],
          ['gen4pair6-ghost', ['', 'ghost', '', 'no-show'] ],
          ['gen4pair7-ghost', ['', 'ghost', '', 'no-show'] ]
        ],
      },
            
      moveGhostsAfterShiftToParent: {
      // ( results when moveGhosts() is called after shiftToFather() )

        pairs: [
          // ghost pairs:
          ['gen0root-ghost', ['gen0root', 'ghost', 'singleton', 'visible'] ],
          ['gen1pair0-ghost', ['gen1pair0', 'ghost', 'normal', 'visible'] ],
          ['gen2pair0-ghost', ['gen2pair0', 'ghost', 'normal', 'visible'] ],
          ['gen2pair1-ghost', ['gen2pair1', 'ghost', 'normal', 'visible'] ],
          ['gen3pair0-ghost', ['gen3pair0', 'ghost', 'normal', 'visible'] ],
          ['gen3pair1-ghost', ['gen3pair1', 'ghost', 'normal', 'visible'] ],
          ['gen3pair2-ghost', ['gen3pair2', 'ghost', 'normal', 'visible'] ],
          ['gen3pair3-ghost', ['gen3pair3', 'ghost', 'normal', 'visible'] ],
          ['gen4pair0-ghost', ['enter', 'ghost', 'compressed', 'no-show'] ],
          ['gen4pair1-ghost', ['enter', 'ghost', 'compressed', 'no-show'] ],
          ['gen4pair2-ghost', ['enter', 'ghost', 'compressed', 'no-show'] ],
          ['gen4pair3-ghost', ['enter', 'ghost', 'compressed', 'no-show'] ],
          ['gen4pair4-ghost', ['enter', 'ghost', 'compressed', 'no-show'] ],
          ['gen4pair5-ghost', ['enter', 'ghost', 'compressed', 'no-show'] ],
          ['gen4pair6-ghost', ['enter', 'ghost', 'compressed', 'no-show'] ],
          ['gen4pair7-ghost', ['enter', 'ghost', 'compressed', 'no-show'] ]
        ]
      }
    }
    
    const testClasses = (viewModel, expectedData) => {
      expectedData.pairs.forEach( (item) => {
        let pairId = item[0]
        let classes = item[1]
      let pair = viewModel.peoplePairs.find( (pair) => pair.label === pairId )
      expect(pair.classStatus).toEqual({
        location: classes[0],
        pairtype: classes[1],
        shape: classes[2],
        visibility: classes[3]
      })
    })
      expectedData.connectors.forEach( (item) => {
        let cnxId = item[0]
        let classes = item[1]
      let connector = viewModel.connectors.find( (connector) => connector.label === cnxId )
      expect(connector.classStatus).toEqual({
        location: classes[0],
        type: classes[1],
        visibility: classes[2]
      })
    })


  }

  test('correctly sets people pair classes after initializing view model', () => {
    setActivePinia(createPinia())
    const viewModel = useViewModelStore()
    viewModel.initialize(configData, pairInitConstants, connectorInitConstants)
    viewModel.populate(familyTreeData)
    testClasses(viewModel, expectedData.initial)
  })

  test('correctly resets people pair classes after shiftToFather()', () => {
    setActivePinia(createPinia())
    const viewModel = useViewModelStore()
    viewModel.initialize(configData, pairInitConstants, connectorInitConstants)
    viewModel.populate(familyTreeData)
    viewModel.shiftToFather(familyTreeData)
    testClasses(viewModel, expectedData.shiftToFather)
  })

  test('correctly resets people pair classes after shiftToMother()', () => {
    setActivePinia(createPinia())
    const viewModel = useViewModelStore()
    viewModel.initialize(configData, pairInitConstants, connectorInitConstants)
    viewModel.populate(familyTreeData)
    viewModel.shiftToMother(familyTreeData)
    testClasses(viewModel, expectedData.shiftToMother)
  })

  test('moveGhosts() function correctly sets ghost pair classes to new locations after shiftToFather', () => {
    setActivePinia(createPinia())
    const viewModel = useViewModelStore()
    viewModel.initialize(configData, pairInitConstants, connectorInitConstants)
    viewModel.populate(familyTreeData)
    viewModel.shiftToFather(familyTreeData)
    viewModel.moveGhosts()
    testClasses(viewModel, expectedData.moveGhostsAfterShiftToParent)
  })
  
  test('moveGhosts() function correctly sets ghost pair classes to new locations after shiftToMother', () => {
    setActivePinia(createPinia())
    const viewModel = useViewModelStore()
    viewModel.initialize(configData, pairInitConstants, connectorInitConstants)
    viewModel.populate(familyTreeData)
    viewModel.shiftToMother(familyTreeData)
    viewModel.moveGhosts()
    testClasses(viewModel, expectedData.moveGhostsAfterShiftToParent)
  })

  test('correctly resets people pair classes after shiftToChildMaleRoot()', () => {
    setActivePinia(createPinia())
    const viewModel = useViewModelStore()
    viewModel.initialize(configData, pairInitConstants, connectorInitConstants)
    viewModel.populate(familyTreeData)
    viewModel.shiftToFather(familyTreeData)
    viewModel.resetClassesAfterTransition()
    viewModel.shiftToChildMaleRoot(familyTreeData)
    viewModel.resetClassesAfterTransition()
    testClasses(viewModel, expectedData.shiftBackToRoot)
  })
  
  test('correctly resets people pair classes after shiftToChildFemaleRoot()', () => {
    setActivePinia(createPinia())
    const viewModel = useViewModelStore()
    viewModel.initialize(configData, pairInitConstants, connectorInitConstants)
    viewModel.populate(familyTreeData)
    viewModel.shiftToMother(familyTreeData)
    viewModel.resetClassesAfterTransition()
    viewModel.shiftToChildFemaleRoot(familyTreeData)
    viewModel.resetClassesAfterTransition()
    testClasses(viewModel, expectedData.shiftBackToRoot)
  })
})
