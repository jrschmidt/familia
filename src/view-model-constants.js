// VIEW MODEL CONSTANTS FOR 5 GENERATION FAMILY TREE DISPLAY.

// This display shows the parents, grandparents, great-grandparents and
// great-great-grandparents for one person (the 'root person'). Siblings are not
// shown. Only one child is shown for each couple, the one who is a direct
// ancestor of the root person. Therefore, the tree displayed will have the
// shape of an inverted triangle, with the root person at the bottom and the
// great-great-grandparents at the top.

// 'Root person' for the view model means the youngest person in the current
// view, with 4 generations of that person's ancestors (if the data is
// available).

// Generations are numbered as follows',
//   root person: generation 0
//   parents: generation 1
//   grandparents: generation 2
//   great-grandparents:generation 3
//   great-great-grandparents:generation 4

// The display uses PersonPair Vue components to arrange family members within
// the display. Each PersonPair component displays names for two people, except
// for the root person, which is displayed alone in what is designated a
// 'singleton' pair.

// The locations of the PersonPair components are each labeled, and these
// labels are assigned as HTML classes to each pair component to enable CSS
// positioning. The layout of these positions look something like this',
//
//
// gen4pair0 gen4pair1 gen4pair2 gen4pair3 gen4pair4 gen4pair5 gen4pair6 gen4pair7
//       \     /             \     /             \     /             \     /
//      gen3pair0           gen3pair1           gen3pair2           gen3pair3
//               \         /                             \         /
//                gen2pair0                               gen2pair1
//                          \                            /
//                            \______ gen1pair0 _______/
//                                        |
//                                    gen0root
//

// A user using the display can move up and down from one generation to the next.
// There are three types of moves possible',

// 'Move to father' - the father of the display root person becomes the new
// display root person, and a new generation of the father's ancestors are
// brought into view. The mother and her ancestors disappear from the display.

// 'Move to mother' - the mother of the display root person becomes the new
// display root person, and a new generation of the mother's ancestors are
// brought into view. The father and his ancestors disappear from the display.

// 'Move to child' - the child of the display root person and their spouse
// becomes the new display root person. The oldest generation disappears from
// the display, and the spouse and 3 generations of their ancestors are brought
// into view.

// These constants are used to generate the view model by assigning the classes
// that define the position of pair objects within the display, and making the
// necessary changes when the display is shifted.


export const viewModelConfig = {
  generations: 5
}

export const pairInitConstants = [
  ['gen0root', 'gen0root', ['gen0root', 'static', 'singleton', 'visible'] ],
  ['gen1pair0', 'gen1pair0', ['gen1pair0', 'static', 'normal', 'visible'] ],
  ['gen2pair0', 'gen2pair0', ['gen2pair0', 'static', 'normal', 'visible'] ],
  ['gen2pair1', 'gen2pair1', ['gen2pair1', 'static', 'normal', 'visible'] ],
  ['gen3pair0', 'gen3pair0', ['gen3pair0', 'static', 'normal', 'visible'] ],
  ['gen3pair1', 'gen3pair1', ['gen3pair1', 'static', 'normal', 'visible'] ],
  ['gen3pair2', 'gen3pair2', ['gen3pair2', 'static', 'normal', 'visible'] ],
  ['gen3pair3', 'gen3pair3', ['gen3pair3', 'static', 'normal', 'visible'] ],
  ['gen4pair0', 'gen4pair0', ['gen4pair0', 'static', 'compressed', 'visible'] ],
  ['gen4pair1', 'gen4pair1', ['gen4pair1', 'static', 'compressed', 'visible'] ],
  ['gen4pair2', 'gen4pair2', ['gen4pair2', 'static', 'compressed', 'visible'] ],
  ['gen4pair3', 'gen4pair3', ['gen4pair3', 'static', 'compressed', 'visible'] ],
  ['gen4pair4', 'gen4pair4', ['gen4pair4', 'static', 'compressed', 'visible'] ],
  ['gen4pair5', 'gen4pair5', ['gen4pair5', 'static', 'compressed', 'visible'] ],
  ['gen4pair6', 'gen4pair6', ['gen4pair6', 'static', 'compressed', 'visible'] ],
  ['gen4pair7', 'gen4pair7', ['gen4pair7', 'static', 'compressed', 'visible'] ],
  ['gen0root-ghost', 'gen0root', ['gen0root', 'ghost', 'singleton', 'no-show'] ],
  ['gen1pair0-ghost', 'gen1pair0', ['gen1pair0', 'ghost', 'normal', 'no-show'] ],
  ['gen2pair0-ghost', 'gen2pair0', ['gen2pair0', 'ghost', 'normal', 'no-show'] ],
  ['gen2pair1-ghost', 'gen2pair1', ['gen2pair1', 'ghost', 'normal', 'no-show'] ],
  ['gen3pair0-ghost', 'gen3pair0', ['gen3pair0', 'ghost', 'normal', 'no-show'] ],
  ['gen3pair1-ghost', 'gen3pair1', ['gen3pair1', 'ghost', 'normal', 'no-show'] ],
  ['gen3pair2-ghost', 'gen3pair2', ['gen3pair2', 'ghost', 'normal', 'no-show'] ],
  ['gen3pair3-ghost', 'gen3pair3', ['gen3pair3', 'ghost', 'normal', 'no-show'] ],
  ['gen4pair0-ghost', 'gen4pair0', ['gen4pair0', 'ghost', 'compressed', 'no-show'] ],
  ['gen4pair1-ghost', 'gen4pair1', ['gen4pair1', 'ghost', 'compressed', 'no-show'] ],
  ['gen4pair2-ghost', 'gen4pair2', ['gen4pair2', 'ghost', 'compressed', 'no-show'] ],
  ['gen4pair3-ghost', 'gen4pair3', ['gen4pair3', 'ghost', 'compressed', 'no-show'] ],
  ['gen4pair4-ghost', 'gen4pair4', ['gen4pair4', 'ghost', 'compressed', 'no-show'] ],
  ['gen4pair5-ghost', 'gen4pair5', ['gen4pair5', 'ghost', 'compressed', 'no-show'] ],
  ['gen4pair6-ghost', 'gen4pair6', ['gen4pair6', 'ghost', 'compressed', 'no-show'] ],
  ['gen4pair7-ghost', 'gen4pair7', ['gen4pair7', 'ghost', 'compressed', 'no-show'] ]
  ]

export const pairLabelMap = [
  ['gen0root'],
  ['gen1pair0', 'gen1pair0'],
  ['gen2pair0', 'gen2pair0', 'gen2pair1', 'gen2pair1'],
  ['gen3pair0', 'gen3pair0', 'gen3pair1', 'gen3pair1', 'gen3pair2', 'gen3pair2', 'gen3pair3', 'gen3pair3'],
  ['gen4pair0', 'gen4pair0', 'gen4pair1', 'gen4pair1', 'gen4pair2', 'gen4pair2', 'gen4pair3', 'gen4pair3',
    'gen4pair4', 'gen4pair4', 'gen4pair5', 'gen4pair5', 'gen4pair6', 'gen4pair6', 'gen4pair7', 'gen4pair7']
]

export const pairRowMappings = {
  gen0root: [[0,0]],
  gen1pair0: [[1,0], [1,1]],
  gen2pair0: [[2,0], [2,1]],
  gen2pair1: [[2,2], [2,3]],
  gen3pair0: [[3,0], [3,1]],
  gen3pair1: [[3,2], [3,3]],
  gen3pair2: [[3,4], [3,5]],
  gen3pair3: [[3,6], [3,7]],
  gen4pair0: [[4,0], [4,1]],
  gen4pair1: [[4,2], [4,3]],
  gen4pair2: [[4,4], [4,5]],
  gen4pair3: [[4,6], [4,7]],
  gen4pair4: [[4,8], [4,9]],
  gen4pair5: [[4,10], [4,11]],
  gen4pair6: [[4,12], [4,13]],
  gen4pair7: [[4,14], [4,15]]
}

export const pairLocationsList = [
  'gen0root',
  'gen1pair0',
  'gen2pair0',
  'gen2pair1',
  'gen3pair0',
  'gen3pair1',
  'gen3pair2',
  'gen3pair3',
  'gen4pair0',
  'gen4pair1',
  'gen4pair2',
  'gen4pair3',
  'gen4pair4',
  'gen4pair5',
  'gen4pair6',
  'gen4pair7'
  ]

export const shiftPairPositionsFather = {
  gen0root: 'none', 
  gen1pair0: 'gen0root',
  gen2pair0: 'gen1pair0',
  gen2pair1: 'none',
  gen3pair0: 'gen2pair0',
  gen3pair1: 'gen2pair1',
  gen3pair2: 'none',
  gen3pair3: 'none',
  gen4pair0: 'gen3pair0',
  gen4pair1: 'gen3pair1',
  gen4pair2: 'gen3pair2',
  gen4pair3: 'gen3pair3',
  gen4pair4: 'none',
  gen4pair5: 'none',
  gen4pair6: 'none',
  gen4pair7: 'none'
}

export const shiftPairPositionsMother = {
  gen0root: 'none', 
  gen1pair0: 'gen0root',
  gen2pair0: 'none',
  gen2pair1: 'gen1pair0',
  gen3pair0: 'none',
  gen3pair1: 'none',
  gen3pair2: 'gen2pair0',
  gen3pair3: 'gen2pair1',
  gen4pair0: 'none',
  gen4pair1: 'none',
  gen4pair2: 'none',
  gen4pair3: 'none',
  gen4pair4: 'gen3pair0',
  gen4pair5: 'gen3pair1',
  gen4pair6: 'gen3pair2',
  gen4pair7: 'gen3pair3'
}

export const shiftPairPositions = {

  toMother: {
    gen0root: 'gen1pair0',
    gen1pair0: 'gen2pair1',
    gen2pair0: 'gen3pair2',
    gen2pair1: 'gen3pair3',
    gen3pair0: 'gen4pair4',
    gen3pair1: 'gen4pair5',
    gen3pair2: 'gen4pair6',
    gen3pair3: 'gen4pair7',
    gen4pair0: 'enter',
    gen4pair1: 'enter',
    gen4pair2: 'enter',
    gen4pair3: 'enter',
    gen4pair4: 'enter',
    gen4pair5: 'enter',
    gen4pair6: 'enter',
    gen4pair7: 'enter'
  },

  toChildMaleRoot: {
    gen0root: 'enter',
    gen1pair0: 'gen0root',
    gen2pair0: 'gen1pair0',
    gen2pair1: 'enter',
    gen3pair0: 'gen2pair0',
    gen3pair1: 'gen2pair1',
    gen3pair2: 'enter',
    gen3pair3: 'enter',
    gen4pair0: 'gen3pair0',
    gen4pair1: 'gen3pair1',
    gen4pair2: 'gen3pair2',
    gen4pair3: 'gen3pair3',
    gen4pair4: 'enter',
    gen4pair5: 'enter',
    gen4pair6: 'enter',
    gen4pair7: 'enter'
  },

  toChildFemaleRoot: {
    gen0root: 'enter',
    gen1pair0: 'gen0root',
    gen2pair0: 'enter',
    gen2pair1: 'gen1pair0',
    gen3pair0: 'enter',
    gen3pair1: 'enter',
    gen3pair2: 'gen2pair0',
    gen3pair3: 'gen2pair1',
    gen4pair0: 'enter',
    gen4pair1: 'enter',
    gen4pair2: 'enter',
    gen4pair3: 'enter',
    gen4pair4: 'gen3pair0',
    gen4pair5: 'gen3pair1',
    gen4pair6: 'gen3pair2',
    gen4pair7: 'gen3pair3'
  },
}

export const pairComponentShapes = {
  gen0root: 'singleton',
  gen1pair0: 'normal',
  gen2pair0: 'normal',
  gen2pair1: 'normal',
  gen3pair0: 'normal',
  gen3pair1: 'normal',
  gen3pair2: 'normal',
  gen3pair3: 'normal',
  gen4pair0: 'compressed',
  gen4pair1: 'compressed',
  gen4pair2: 'compressed',
  gen4pair3: 'compressed',
  gen4pair4: 'compressed',
  gen4pair5: 'compressed',
  gen4pair6: 'compressed',
  gen4pair7: 'compressed',
  enter: ''
  }
  
export const connectorLocationsList = [
  'cnx-0-0',
  'cnx-1-0',
  'cnx-1-1',
  'cnx-2-0',
  'cnx-2-1',
  'cnx-2-2',
  'cnx-2-3',
  'cnx-3-0',
  'cnx-3-1',
  'cnx-3-2',
  'cnx-3-3',
  'cnx-3-4',
  'cnx-3-5',
  'cnx-3-6',
  'cnx-3-7'
]

export const connectorInitConstants = [
  ['cnx-0-0', 'cnx-0-0', ['cnx-0-0', 'static', 'visible']],
  ['cnx-1-0', 'cnx-1-0', ['cnx-1-0', 'static', 'visible']],
  ['cnx-1-1', 'cnx-1-1', ['cnx-1-1', 'static', 'visible']],
  ['cnx-2-0', 'cnx-2-0', ['cnx-2-0', 'static', 'visible']],
  ['cnx-2-1', 'cnx-2-1', ['cnx-2-1', 'static', 'visible']],
  ['cnx-2-2', 'cnx-2-2', ['cnx-2-2', 'static', 'visible']],
  ['cnx-2-3', 'cnx-2-3', ['cnx-2-3', 'static', 'visible']],
  ['cnx-3-0', 'cnx-3-0', ['cnx-3-0', 'static', 'visible']],
  ['cnx-3-1', 'cnx-3-1', ['cnx-3-1', 'static', 'visible']],
  ['cnx-3-2', 'cnx-3-2', ['cnx-3-2', 'static', 'visible']],
  ['cnx-3-3', 'cnx-3-3', ['cnx-3-3', 'static', 'visible']],
  ['cnx-3-4', 'cnx-3-4', ['cnx-3-4', 'static', 'visible']],
  ['cnx-3-5', 'cnx-3-5', ['cnx-3-5', 'static', 'visible']],
  ['cnx-3-6', 'cnx-3-6', ['cnx-3-6', 'static', 'visible']],
  ['cnx-3-7', 'cnx-3-7', ['cnx-3-7', 'static', 'visible']],
  ['cnx-0-0-ghost', 'cnx-0-0', ['cnx-0-0', 'ghost', 'no-show']],
  ['cnx-1-0-ghost', 'cnx-1-0', ['cnx-1-0', 'ghost', 'no-show']],
  ['cnx-1-1-ghost', 'cnx-1-1', ['cnx-1-1', 'ghost', 'no-show']],
  ['cnx-2-0-ghost', 'cnx-2-0', ['cnx-2-0', 'ghost', 'no-show']],
  ['cnx-2-1-ghost', 'cnx-2-1', ['cnx-2-1', 'ghost', 'no-show']],
  ['cnx-2-2-ghost', 'cnx-2-2', ['cnx-2-2', 'ghost', 'no-show']],
  ['cnx-2-3-ghost', 'cnx-2-3', ['cnx-2-3', 'ghost', 'no-show']],
  ['cnx-3-0-ghost', 'cnx-3-0', ['cnx-3-0', 'ghost', 'no-show']],
  ['cnx-3-1-ghost', 'cnx-3-1', ['cnx-3-1', 'ghost', 'no-show']],
  ['cnx-3-2-ghost', 'cnx-3-2', ['cnx-3-2', 'ghost', 'no-show']],
  ['cnx-3-3-ghost', 'cnx-3-3', ['cnx-3-3', 'ghost', 'no-show']],
  ['cnx-3-4-ghost', 'cnx-3-4', ['cnx-3-4', 'ghost', 'no-show']],
  ['cnx-3-5-ghost', 'cnx-3-5', ['cnx-3-5', 'ghost', 'no-show']],
  ['cnx-3-6-ghost', 'cnx-3-6', ['cnx-3-6', 'ghost', 'no-show']],
  ['cnx-3-7-ghost', 'cnx-3-7', ['cnx-3-7', 'ghost', 'no-show']]
]

export const shiftConnectorPositionsFather = {
  'cnx-0-0': 'none',
  'cnx-1-0': 'cnx-0-0',
  'cnx-1-1': 'none',
  'cnx-2-0': 'cnx-1-0',
  'cnx-2-1': 'cnx-1-1',
  'cnx-2-2': 'none',
  'cnx-2-3': 'none',
  'cnx-3-0': 'cnx-2-0',
  'cnx-3-1': 'cnx-2-1',
  'cnx-3-2': 'cnx-2-2',
  'cnx-3-3': 'cnx-2-3',
  'cnx-3-4': 'none',
  'cnx-3-5': 'none',
  'cnx-3-6': 'none',
  'cnx-3-7': 'none'
}

export const shiftConnectorPositionsMother = {
  'cnx-0-0': 'none',
  'cnx-1-0': 'none',
  'cnx-1-1': 'cnx-0-0',
  'cnx-2-0': 'none',
  'cnx-2-1': 'none',
  'cnx-2-2': 'cnx-1-0',
  'cnx-2-3': 'cnx-1-1',
  'cnx-3-0': 'none',
  'cnx-3-1': 'none',
  'cnx-3-2': 'none',
  'cnx-3-3': 'none',
  'cnx-3-4': 'cnx-2-0',
  'cnx-3-5': 'cnx-2-1',
  'cnx-3-6': 'cnx-2-2',
  'cnx-3-7': 'cnx-2-3'
}

export const shiftConnectorPositions = {

  toChildMaleRoot: {
    'cnx-0-0': 'enter',
    'cnx-1-0': 'cnx-0-0',
    'cnx-1-1': 'enter',
    'cnx-2-0': 'cnx-1-0',
    'cnx-2-1': 'cnx-1-1',
    'cnx-2-2': 'enter',
    'cnx-2-3': 'enter',
    'cnx-3-0': 'cnx-2-0',
    'cnx-3-1': 'cnx-2-1',
    'cnx-3-2': 'cnx-2-2',
    'cnx-3-3': 'cnx-2-3',
    'cnx-3-4': 'enter',
    'cnx-3-5': 'enter',
    'cnx-3-6': 'enter',
    'cnx-3-7': 'enter'
    },

  toChildFemaleRoot: {
    'cnx-0-0': 'enter',
    'cnx-1-0': 'enter',
    'cnx-1-1': 'cnx-0-0',
    'cnx-2-0': 'enter',
    'cnx-2-1': 'enter',
    'cnx-2-2': 'cnx-1-0',
    'cnx-2-3': 'cnx-1-1',
    'cnx-3-0': 'enter',
    'cnx-3-1': 'enter',
    'cnx-3-2': 'enter',
    'cnx-3-3': 'enter',
    'cnx-3-4': 'cnx-2-0',
    'cnx-3-5': 'cnx-2-1',
    'cnx-3-6': 'cnx-2-2',
    'cnx-3-7': 'cnx-2-3'
    },

}

export const connectorTopShapes = {
  'cnx-0-0': 'cnx-top-wide',
  'cnx-1-0': 'cnx-top-wide',
  'cnx-1-1': 'cnx-top-wide',
  'cnx-2-0': 'cnx-top-wide',
  'cnx-2-1': 'cnx-top-wide',
  'cnx-2-2': 'cnx-top-wide',
  'cnx-2-3': 'cnx-top-wide',
  'cnx-3-0': 'cnx-top-narrow',
  'cnx-3-1': 'cnx-top-narrow',
  'cnx-3-2': 'cnx-top-narrow',
  'cnx-3-3': 'cnx-top-narrow',
  'cnx-3-4': 'cnx-top-narrow',
  'cnx-3-5': 'cnx-top-narrow',
  'cnx-3-6': 'cnx-top-narrow',
  'cnx-3-7': 'cnx-top-narrow'
}

export const connectorMiddleShapes = {
  'cnx-0-0': 'cnx-middle-zero',
  'cnx-1-0': 'cnx-middle-right-long',
  'cnx-1-1': 'cnx-middle-left-long',
  'cnx-2-0': 'cnx-middle-right-short',
  'cnx-2-1': 'cnx-middle-left-short',
  'cnx-2-2': 'cnx-middle-right-short',
  'cnx-2-3': 'cnx-middle-left-short',
  'cnx-3-0': 'cnx-middle-zero',
  'cnx-3-1': 'cnx-middle-zero',
  'cnx-3-2': 'cnx-middle-zero',
  'cnx-3-3': 'cnx-middle-zero',
  'cnx-3-4': 'cnx-middle-zero',
  'cnx-3-5': 'cnx-middle-zero',
  'cnx-3-6': 'cnx-middle-zero',
  'cnx-3-7': 'cnx-middle-zero'
}

export const connectorBottomShapes = {
  'cnx-0-0': 'cnx-bottom-mid',
  'cnx-1-0': 'cnx-bottom-right',
  'cnx-1-1': 'cnx-bottom-left',
  'cnx-2-0': 'cnx-bottom-right',
  'cnx-2-1': 'cnx-bottom-left',
  'cnx-2-2': 'cnx-bottom-right',
  'cnx-2-3': 'cnx-bottom-left',
  'cnx-3-0': 'cnx-bottom-mid',
  'cnx-3-1': 'cnx-bottom-mid',
  'cnx-3-2': 'cnx-bottom-mid',
  'cnx-3-3': 'cnx-bottom-mid',
  'cnx-3-4': 'cnx-bottom-mid',
  'cnx-3-5': 'cnx-bottom-mid',
  'cnx-3-6': 'cnx-bottom-mid',
  'cnx-3-7': 'cnx-bottom-mid'
}