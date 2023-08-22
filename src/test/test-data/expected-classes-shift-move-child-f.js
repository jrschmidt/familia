export const expectedToChildFemaleRoot = {

  pairs: [
    // static pairs:
    ['gen0root', ['gen0root', 'static', 'singleton', 'no-show'] ],
    ['gen1pair0', ['gen1pair0', 'static', 'normal', 'no-show'] ],
    ['gen2pair0', ['gen2pair0', 'static', 'normal', 'no-show'] ],
    ['gen2pair1', ['gen2pair1', 'static', 'normal', 'no-show'] ],
    ['gen3pair0', ['gen3pair0', 'static', 'normal', 'no-show'] ],
    ['gen3pair1', ['gen3pair1', 'static', 'normal', 'no-show'] ],
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
    ['gen3pair1-ghost', ['gen4pair5', 'ghost', 'compressed', 'visible'] ],
    ['gen3pair2-ghost', ['gen4pair6', 'ghost', 'compressed', 'visible'] ],
    ['gen3pair3-ghost', ['gen4pair7', 'ghost', 'compressed', 'visible'] ],
    ['gen4pair0-ghost', ['none', 'ghost', 'faded', 'fade'] ],
    ['gen4pair1-ghost', ['none', 'ghost', 'faded', 'fade'] ],
    ['gen4pair2-ghost', ['none', 'ghost', 'faded', 'fade'] ],
    ['gen4pair3-ghost', ['none', 'ghost', 'faded', 'fade'] ],
    ['gen4pair4-ghost', ['none', 'ghost', 'faded', 'fade'] ],
    ['gen4pair5-ghost', ['none', 'ghost', 'faded', 'fade'] ],
    ['gen4pair6-ghost', ['none', 'ghost', 'faded', 'fade'] ],
    ['gen4pair7-ghost', ['none', 'ghost', 'faded', 'fade'] ]
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
    ['cnx-0-0-ghost', ['cnx-1-1', 'ghost', 'visible']],
    ['cnx-1-0-ghost', ['cnx-2-2', 'ghost', 'visible']],
    ['cnx-1-1-ghost', ['cnx-2-3', 'ghost', 'visible']],
    ['cnx-2-0-ghost', ['cnx-3-4', 'ghost', 'visible']],
    ['cnx-2-1-ghost', ['cnx-3-5', 'ghost', 'visible']],
    ['cnx-2-2-ghost', ['cnx-3-6', 'ghost', 'visible']],
    ['cnx-2-3-ghost', ['cnx-3-7', 'ghost', 'visible']],
    ['cnx-3-0-ghost', ['none', 'ghost', 'fade']],
    ['cnx-3-1-ghost', ['none', 'ghost', 'fade']],
    ['cnx-3-2-ghost', ['none', 'ghost', 'fade']],
    ['cnx-3-3-ghost', ['none', 'ghost', 'fade']],
    ['cnx-3-4-ghost', ['none', 'ghost', 'fade']],
    ['cnx-3-5-ghost', ['none', 'ghost', 'fade']],
    ['cnx-3-6-ghost', ['none', 'ghost', 'fade']],
    ['cnx-3-7-ghost', ['none', 'ghost', 'fade']]
  ]

}