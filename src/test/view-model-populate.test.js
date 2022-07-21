import { test, beforeEach, describe, expect } from 'vitest'

import { setActivePinia, createPinia } from 'pinia'
import { useViewModelStore } from '../stores/viewModelStore'

import { populateViewModel } from '../view-model-methods/populate-view-model'
import { pairInitConstants, viewModelConfig as configData } from '../view-model-constants'
import { familyTreeData } from '../data/family-tree-data.js'

describe('populates people pair data', () => {

  test('correctly populates people pair data in initial positions', () => {

    setActivePinia(createPinia())
    const viewModel = useViewModelStore()
    viewModel.initialize(configData, pairInitConstants)

    const testData = [
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
    ]

    populateViewModel(viewModel, familyTreeData)
      testData.forEach( (item) => {
        expect(viewModel.peoplePairs.some( (pair) => {
          return ( pair.label === item[0] )
        })).toBeTruthy()
        // expect(viewModel.peoplePairs.some( (pair) => {
        //   return ( pair.people === item[1] )
        // })).toBeTruthy()
      })

  })
})
