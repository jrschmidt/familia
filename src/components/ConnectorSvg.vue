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
import { connectorMiddleShapes, connectorBottomShapes, connectorTopShapes } from '../view-model-constants'

const props = defineProps({
  connector: Object
})

const location = computed( () => {
  return props.connector.classStatus.location
})

const type = computed( () => {
  return props.connector.classStatus.type
})

const visibility = computed( () => {
  return props.connector.classStatus.visibility
})

const topClasses = computed( () => {
  let key = props.connector.classStatus.location
  return [
    location,
    visibility,
    connectorTopShapes[key]
  ]
})

const middleClasses = computed( () => {
  let key = props.connector.classStatus.location
  return [
    location,
    visibility,
    connectorMiddleShapes[key]
  ]
})

const bottomClasses = computed( () => {
  let key = props.connector.classStatus.location
  return [
    location,
    visibility,
    connectorBottomShapes[key]
  ]
})
</script>

<style lang="css">
</style>
  