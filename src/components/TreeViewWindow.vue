<template>
  <div class="tree-view-window">
    <PersonPair
      v-for="(pair) in pairs"
      v-bind:key="pair.label"
      v-bind:pair="pair"
    />
    <ConnectorSvg
      v-for="(connector) in connectors"
      v-bind:key="connector.label"
      v-bind:connector="connector"
    />
  </div>
</template>

<script setup>
import PersonPair from './PersonPair.vue'
import ConnectorSvg from './ConnectorSvg.vue'
import { ref } from 'vue'
import { useViewModelStore } from '../stores/viewModelStore'
import ConnectorSvgBottom from './ConnectorSvgBottom.vue'

const viewModel = useViewModelStore()
const pairs = ref(viewModel.peoplePairs)
const connectors = ref(viewModel.connectors)
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
  transition-property: left, top;
  transition-duration: 2000ms;
}

.person-pair.gen1pair0 {
  left: 360px;
  top: 310px;
  transition-property: left, top;
  transition-duration: 2000ms;
}

.person-pair.gen2pair0 {
  left: 120px;
  top: 210px;
  transition-property: left, top;
  transition-duration: 2000ms;
}

.person-pair.gen2pair1 {
  left: 600px;
  top: 210px;
  transition-property: left, top;
  transition-duration: 2000ms;
}

.person-pair.gen3pair0 {
  left: 0px;
  top: 110px;
  transition-property: left, top;
  transition-duration: 2000ms;
}

.person-pair.gen3pair1 {
  left: 240px;
  top: 110px;
  transition-property: left, top;
  transition-duration: 2000ms;
}

.person-pair.gen3pair2 {
  left: 480px;
  top: 110px;
  transition-property: left, top;
  transition-duration: 2000ms;
}

.person-pair.gen3pair3 {
  left: 720px;
  top: 110px;
  transition-property: left, top;
  transition-duration: 2000ms;
}

.person-pair.gen4pair0 {
  left: 0px;
  top: 10px;
  transition-property: left, top;
  transition-duration: 2000ms;
}

.person-pair.gen4pair1 {
  left: 120px;
  top: 10px;
  transition-property: left, top;
  transition-duration: 2000ms;
}

.person-pair.gen4pair2 {
  left: 240px;
  top: 10px;
  transition-property: left, top;
  transition-duration: 2000ms;
}

.person-pair.gen4pair3 {
  left: 360px;
  top: 10px;
  transition-property: left, top;
  transition-duration: 2000ms;
}

.person-pair.gen4pair4 {
  left: 480px;
  top: 10px;
  transition-property: left, top;
  transition-duration: 2000ms;
}

.person-pair.gen4pair5 {
  left: 600px;
  top: 10px;
  transition-property: left, top;
  transition-duration: 2000ms;
}

.person-pair.gen4pair6 {
  left: 720px;
  top: 10px;
  transition-property: left, top;
  transition-duration: 2000ms;
}

.person-pair.gen4pair7 {
  left: 840px;
  top: 10px;
  transition-property: left, top;
  transition-duration: 2000ms;
}

/* Positioning for the ConnectorSvg components */

.connector-svg.cnx-0-0 {
  left: 420px;
  top: 310px;
}

.connector-svg.cnx-1-0 {
  left: 180px;
  top: 210px;
}

.connector-svg.cnx-1-1 {
  left: 480px;
  top: 210px;
}

.connector-svg.cnx-2-0 {
  left: 60px;
  top: 110px;
}

.connector-svg.cnx-2-1 {
  left: 240px;
  top: 110px;
}

.connector-svg.cnx-2-2 {
  left: 540px;
  top: 110px;
}

.connector-svg.cnx-2-3 {
  left: 720px;
  top: 110px;
}

.connector-svg.cnx-3-0 {
  left: 0px;
  top: 10px;
}

.connector-svg.cnx-3-1 {
  left: 120px;
  top: 10px;
}

.connector-svg.cnx-3-2 {
  left: 240px;
  top: 10px;
}

.connector-svg.cnx-3-3 {
  left: 360px;
  top: 10px;
}

.connector-svg.cnx-3-4 {
  left: 480px;
  top: 10px;
}

.connector-svg.cnx-3-5 {
  left: 600px;
  top: 10px;
}

.connector-svg.cnx-3-6 {
  left: 720px;
  top: 10px;
}

.connector-svg.cnx-3-7 {
  left: 840px;
  top: 10px;
}
</style>
