<template>
  <div class="connector-svg">
    <ConnectorSvgTop />
    <ConnectorSvgMiddle />
    <ConnectorSvgBottom />
  </div>
</template>
    
<script setup>
import { computed } from '@vue/reactivity';
import ConnectorSvgTop from './ConnectorSvgTop.vue'
import ConnectorSvgMiddle from './ConnectorSvgMiddle.vue'
import ConnectorSvgBottom from './ConnectorSvgBottom.vue'
import { connectorTopShapes, connectorMiddleShapes, connectorBottomShapes } from '../view-model-constants'

const props = defineProps({
  location: String,
  type: String,
  visibility: String,
  home: String,
  label: String
})

const topClasses = computed( () => {
  return [
    location,
    visibility,
    connectorTopShapes[location]
  ]
})

const middleClasses = computed( () => {
  return [
    location,
    visibility,
    connectorMiddleShapes[location]
  ]
})

const bottomClasses = computed( () => {
  let svgType = getSvgTypeBottom(location)
  return [
    location,
    visibility,
    connectorBottomShapes[location]
  ]
})
</script>

<style lang="css">
</style>
  