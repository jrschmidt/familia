<template>
  <div
    class="connector-svg"
    v-bind:class="[location, type, visibility]"
  >
    <ConnectorSvgTop v-bind:top-classes="topClasses"/>
    <ConnectorSvgMiddle  v-bind:middle-classes="middleClasses"/>
    <ConnectorSvgBottom v-bind:bottom-classes="bottomClasses"/>
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
    location.value,
    visibility.value,
    connectorTopShapes[key]
  ]
})

const middleClasses = computed( () => {
  let key = props.connector.classStatus.location
  return [
    location.value,
    visibility.value,
    connectorMiddleShapes[key]
  ]
})

const bottomClasses = computed( () => {
  let key = props.connector.classStatus.location
  return [
    location.value,
    visibility.value,
    connectorBottomShapes[key]
  ]
})
</script>

<style lang="css">
.connector-svg {
  position: absolute;
  display: flex;
  flex-direction: column;
}

.connector-svg {
  transition-property: left, top, width;
  transition-duration: 2000ms;
}

.no-show {
  visibility: hidden;
}

.cnx-0-0 {
  width: 120px;
}

.cnx-1-0 {
  width: 240px;
}

.cnx-1-1 {
  width: 240px;
}

.cnx-2-0 {
  width: 120px;
}

.cnx-2-1 {
  width: 120px;
}

.cnx-2-2 {
  width: 120px;
}

.cnx-2-3 {
  width: 120px;
}

.cnx-3-0 {
  width: 60px;
}

.cnx-3-1 {
  width: 60px;
}

.cnx-3-2 {
  width: 60px;
}

.cnx-3-3 {
  width: 60px;
}

.cnx-3-4 {
  width: 60px;
}

.cnx-3-5 {
  width: 60px;
}

.cnx-3-6 {
  width: 60px;
}

.cnx-3-7 {
  width: 60px;
}
</style>