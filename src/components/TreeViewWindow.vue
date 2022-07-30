<template>
  <div class="tree-view-window">
    <PersonPair
      v-for="(pair) in pairs"
      v-bind:key="pair.label"
      v-bind:class="pair.classes"
      v-bind:pair="pair"
    />
  </div>
</template>

<script setup>
import PersonPair from './PersonPair.vue'

import { ref } from 'vue'
import { useViewModelStore } from '../stores/viewModelStore'
const viewModel = useViewModelStore()
const pairs = ref(viewModel.peoplePairs)


// <PersonPair
// v-for="(pair) in pairs"
// v-bind:key="generatePairId(pair)"
// v-bind:class="pair.pairClass"
// v-bind:pair="pair"
// />
// <ConnectorSvg
// v-for="(connector, index) in connectors"
// v-bind:class="connectors[index]"
// v-bind:connect-style="getConnectStyle(connectors, index)"
// />


// import PersonPair from './PersonPair.vue'
// import ConnectorSvg from './ConnectorSvg.vue'
//
// import { viewModelInit } from '../view-model-functions.js'
//
// import { ref, inject, provide } from 'vue'
//
// const familyTreeData = inject('familyTreeData')
//
// let viewModelData = viewModelInit(familyTreeData, familyTreeData.rootPerson, 5)
//
// const pairs = ref(viewModelData.pairObjects)
// const connectors = ref(viewModelData.connectorClasses)
//
// provide('viewModelData', viewModelData)
//
// const generatePairId = (pair) => {
//   if (pair.people.length === 2)
//     return pair.people[0] + pair.people[1]
//   else
//     return 'singleton' + pair.people[0]
// }
//
// const getConnectStyle = (connectors, index) => {
//   return connectors[index].split(' ')[0]
// }
</script>

<style lang="css">
.tree-view-window {
  position: relative;
  height: 470px;
  width: 960px;
  border: 0;
  background-color: #e0e4e0;
}

/* Positioning for the PersonPair components */

.person-pair.gen0root {
  left: 420px;
  top: 410px;
}

.person-pair.gen1pair0 {
  left: 360px;
  top: 310px;
}

.person-pair.gen2pair0 {
  left: 120px;
  top: 210px;
}

.person-pair.gen2pair1 {
  left: 600px;
  top: 210px;
}

.person-pair.gen3pair0 {
  left: 0px;
  top: 110px;
}

.person-pair.gen3pair1 {
  left: 240px;
  top: 110px;
}

.person-pair.gen3pair2 {
  left: 480px;
  top: 110px;
}

.person-pair.gen3pair3 {
  left: 720px;
  top: 110px;
}

.person-pair.gen4pair0 {
  left: 0px;
  top: 10px;
}

.person-pair.gen4pair1 {
  left: 120px;
  top: 10px;
}

.person-pair.gen4pair2 {
  left: 240px;
  top: 10px;
}

.person-pair.gen4pair3 {
  left: 360px;
  top: 10px;
}

.person-pair.gen4pair4 {
  left: 480px;
  top: 10px;
}

.person-pair.gen4pair5 {
  left: 600px;
  top: 10px;
}

.person-pair.gen4pair6 {
  left: 720px;
  top: 10px;
}

.person-pair.gen4pair7 {
  left: 840px;
  top: 10px;
}

/* Positioning for the ConnectorSvg components */

.connector-svg.parents-of-0-0 {
  left: 420px;
  top: 310px;
}

.connector-svg.parents-of-1-0 {
  left: 180px;
  top: 210px;
}

.connector-svg.parents-of-1-1 {
  left: 480px;
  top: 210px;
}

.connector-svg.parents-of-2-0 {
  left: 60px;
  top: 110px;
}

.connector-svg.parents-of-2-1 {
  left: 240px;
  top: 110px;
}

.connector-svg.parents-of-2-2 {
  left: 540px;
  top: 110px;
}

.connector-svg.parents-of-2-3 {
  left: 720px;
  top: 110px;
}

.connector-svg.parents-of-3-0 {
  left: 0px;
  top: 10px;
}

.connector-svg.parents-of-3-1 {
  left: 120px;
  top: 10px;
}

.connector-svg.parents-of-3-2 {
  left: 240px;
  top: 10px;
}

.connector-svg.parents-of-3-3 {
  left: 360px;
  top: 10px;
}

.connector-svg.parents-of-3-4 {
  left: 480px;
  top: 10px;
}

.connector-svg.parents-of-3-5 {
  left: 600px;
  top: 10px;
}

.connector-svg.parents-of-3-6 {
  left: 720px;
  top: 10px;
}

.connector-svg.parents-of-3-7 {
  left: 840px;
  top: 10px;
}
</style>
