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
  ]

export const pairLabelMap = [
  ['gen0root'],
  ['gen1pair0', 'gen1pair0'],
  ['gen2pair0', 'gen2pair0', 'gen2pair1', 'gen2pair1'],
  ['gen3pair0', 'gen3pair0', 'gen3pair1', 'gen3pair1', 'gen3pair2', 'gen3pair2', 'gen3pair3', 'gen3pair3'],
  ['gen4pair0', 'gen4pair0', 'gen4pair1', 'gen4pair1', 'gen4pair2', 'gen4pair2', 'gen4pair3', 'gen4pair3',
    'gen4pair4', 'gen4pair4', 'gen4pair5', 'gen4pair5', 'gen4pair6', 'gen4pair6', 'gen4pair7', 'gen4pair7']
]

export const labelPairMap = {
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

export const pairLocationLabels = [
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


// WE ARE COMMENTING OUT THE OLD CONSTANTS UNTIL WE USE THEM IN THE REFACTORED CODE.
// WE ARE COMMENTING OUT THE OLD CONSTANTS UNTIL WE USE THEM IN THE REFACTORED CODE.
// WE ARE COMMENTING OUT THE OLD CONSTANTS UNTIL WE USE THEM IN THE REFACTORED CODE.


// export const fixedGhostPairLabels = [
//   'gen0rootghost',
//   'gen1pair0ghost',
//   'gen2pair0ghost',
//   'gen2pair1ghost',
//   'gen3pair0ghost',
//   'gen3pair1ghost',
//   'gen3pair2ghost',
//   'gen3pair3ghost',
//   'gen4pair0ghost',
//   'gen4pair1ghost',
//   'gen4pair2ghost',
//   'gen4pair3ghost',
//   'gen4pair4ghost',
//   'gen4pair5ghost',
//   'gen4pair6ghost',
//   'gen4pair7ghost'
// ]

// export const outsideGhostPairLabels = [
//   'ghost0',
//   'ghost1',
//   'ghost2',
//   'ghost3',
//   'ghost4',
//   'ghost5',
//   'ghost6',
//   'ghost7'
// ]

// export const pairLabels = pairLocationLabels
//   .concat(fixedGhostPairLabels)
//   .concat(outsideGhostPairLabels)

// export const pairComponentShapes = {
//   gen0root: 'singleton',
//   gen1pair0: 'normal',
//   gen2pair0: 'normal',
//   gen2pair1: 'normal',
//   gen3pair0: 'normal',
//   gen3pair1: 'normal',
//   gen3pair2: 'normal',
//   gen3pair3: 'normal',
//   gen4pair0: 'compressed',
//   gen4pair1: 'compressed',
//   gen4pair2: 'compressed',
//   gen4pair3: 'compressed',
//   gen4pair4: 'compressed',
//   gen4pair5: 'compressed',
//   gen4pair6: 'compressed',
//   gen4pair7: 'compressed'
// }

// export const toFatherMoves = {
//   gen0root: 'fade',
//   gen1pair0: 'gen0root',
//   gen2pair0: 'gen1pair0',
//   gen2pair1: 'fade',
//   gen3pair0: 'gen2pair0',
//   gen3pair1: 'gen2pair1',
//   gen3pair2: 'fade',
//   gen3pair3: 'fade',
//   gen4pair0: 'gen3pair0',
//   gen4pair1: 'gen3pair1',
//   gen4pair2: 'gen3pair2',
//   gen4pair3: 'gen3pair3',
//   gen4pair4: 'fade',
//   gen4pair5: 'fade',
//   gen4pair6: 'fade',
//   gen4pair7: 'fade'
// }

// export const toMotherMoves = {
//   gen0root: 'fade',
//   gen1pair0: 'gen0root',
//   gen2pair0: 'fade',
//   gen2pair1: 'gen1pair0',
//   gen3pair0: 'fade',
//   gen3pair1: 'fade',
//   gen3pair2: 'gen2pair0',
//   gen3pair3: 'gen2pair1',
//   gen4pair0: 'fade',
//   gen4pair1: 'fade',
//   gen4pair2: 'fade',
//   gen4pair3: 'fade',
//   gen4pair4: 'gen3pair0',
//   gen4pair5: 'gen3pair1',
//   gen4pair6: 'gen3pair2',
//   gen4pair7: 'gen3pair3'
// }

// export const toChildMovesMaleRoot = {
//   gen0root: 'gen1pair0',
//   gen1pair0: 'gen2pair0',
//   gen2pair0: 'gen3pair0',
//   gen2pair1: 'gen3pair1',
//   gen3pair0: 'gen4pair0',
//   gen3pair1: 'gen4pair1',
//   gen3pair2: 'gen4pair2',
//   gen3pair3: 'gen4pair3',
//   gen4pair0: 'fade',
//   gen4pair1: 'fade',
//   gen4pair2: 'fade',
//   gen4pair3: 'fade',
//   gen4pair4: 'fade',
//   gen4pair5: 'fade',
//   gen4pair6: 'fade',
//   gen4pair7: 'fade'
// }

// export const toChildMovesFemaleRoot = {
//   gen0root: 'gen1pair0',
//   gen1pair0: 'gen2pair1',
//   gen2pair0: 'gen3pair2',
//   gen2pair1: 'gen3pair3',
//   gen3pair0: 'gen4pair4',
//   gen3pair1: 'gen4pair5',
//   gen3pair2: 'gen4pair6',
//   gen3pair3: 'gen4pair7',
//   gen4pair0: 'fade',
//   gen4pair1: 'fade',
//   gen4pair2: 'fade',
//   gen4pair3: 'fade',
//   gen4pair4: 'fade',
//   gen4pair5: 'fade',
//   gen4pair6: 'fade',
//   gen4pair7: 'fade'
// }

// export const graphOfPairLinks = {
//   gen0root: {
//     parentsOfMaleLocation: 'gen1pair0',
//     parentsOfFemaleLocation: 'gen1pair0',
//     childLocation: null,
//     classes: ['gen0root',  'static',  'singleton']
//   },
//
//   gen1pair0: {
//     parentsOfMaleLocation: 'gen2pair0',
//     parentsOfFemaleLocation: 'gen2pair1',
//     childLocation: 'gen0root',
//     classes: ['gen1pair0',  'static',  'normal']
//   },
//
//   gen2pair0: {
//     parentsOfMaleLocation: 'gen3pair0',
//     parentsOfFemaleLocation: 'gen3pair1',
//     childLocation: 'gen1pair0',
//     classes: ['gen2pair0',  'static',  'normal']
//   },
//
//   gen2pair1: {
//     parentsOfMaleLocation: 'gen3pair2',
//     parentsOfFemaleLocation: 'gen3pair3',
//     childLocation: 'gen1pair0',
//     classes: ['gen2pair1',  'static',  'normal']
//   },
//
//   gen3pair0: {
//     parentsOfMaleLocation: 'gen4pair0',
//     parentsOfFemaleLocation: 'gen4pair1',
//     childLocation: 'gen2pair0',
//     classes: ['gen3pair0',  'static',  'normal']
//   },
//
//   gen3pair1: {
//     parentsOfMaleLocation: 'gen4pair2',
//     parentsOfFemaleLocation: 'gen4pair3',
//     childLocation: 'gen2pair0',
//     classes: ['gen3pair1',  'static',  'normal']
//   },
//
//   gen3pair2: {
//     parentsOfMaleLocation: 'gen4pair4',
//     parentsOfFemaleLocation: 'gen4pair5',
//     childLocation: 'gen2pair1',
//     classes: ['gen3pair2',  'static',  'normal']
//   },
//
//   gen3pair3: {
//     parentsOfMaleLocation: 'gen4pair6',
//     parentsOfFemaleLocation: 'gen4pair7',
//     childLocation: 'gen2pair1',
//     classes: ['gen3pair3',  'static',  'normal']
//   },
//
//   gen4pair0: {
//     parentsOfMaleLocation: null,
//     parentsOfFemaleLocation: null,
//     childLocation: 'gen3pair0',
//     classes: ['gen4pair0',  'static',  'compressed']
//   },
//
//   gen4pair1: {
//     parentsOfMaleLocation: null,
//     parentsOfFemaleLocation: null,
//     childLocation: 'gen3pair0',
//     classes: ['gen4pair1',  'static',  'compressed']
//   },
//
//   gen4pair2: {
//     parentsOfMaleLocation: null,
//     parentsOfFemaleLocation: null,
//     childLocation: 'gen3pair1',
//     classes: ['gen4pair2',  'static',  'compressed']
//   },
//
//   gen4pair3: {
//     parentsOfMaleLocation: null,
//     parentsOfFemaleLocation: null,
//     childLocation: 'gen3pair1',
//     classes: ['gen4pair3',  'static',  'compressed']
//   },
//
//   gen4pair4: {
//     parentsOfMaleLocation: null,
//     parentsOfFemaleLocation: null,
//     childLocation: 'gen3pair2',
//     classes: ['gen4pair4',  'static',  'compressed']
//   },
//
//   gen4pair5: {
//     parentsOfMaleLocation: null,
//     parentsOfFemaleLocation: null,
//     childLocation: 'gen3pair2',
//     classes: ['gen4pair5',  'static',  'compressed']
//   },
//
//   gen4pair6: {
//     parentsOfMaleLocation: null,
//     parentsOfFemaleLocation: null,
//     childLocation: 'gen3pair3',
//     classes: ['gen4pair6',  'static',  'compressed']
//   },
//
//   gen4pair7: {
//     parentsOfMaleLocation: null,
//     parentsOfFemaleLocation: null,
//     childLocation: 'gen3pair3',
//     classes: ['gen4pair7',  'static',  'compressed']
//   }
//
// }
