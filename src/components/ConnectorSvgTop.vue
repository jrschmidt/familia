<template>
  <div
    class="connector-svg-top"
    v-bind:class="[location, shape, visibility]"
  >
    <svg height="48px" width="100%">
      <line x1="0%" y1="0" x2="0" y2="24" stroke="#999999" stroke-width="2"/>
      <line x1="100%" y1="0" x2="100%" y2="24" stroke="#999999" stroke-width="2"/>
      <line x1="0" y1="24" x2="100%" y2="24" stroke="#999999" stroke-width="2"/>
      <line x1="50%" y1="24" x2="50%" y2="48" stroke="#999999" stroke-width="2"/>
    </svg>
  </div>
</template>
  
<script setup>
import { computed } from '@vue/reactivity';

const props = defineProps({
  topClasses: Array
})

const location = computed( () => {
  return props.topClasses[0]
})

const visibility = computed( () => {
  return props.topClasses[1]
})

const shape = computed( () => {
  return props.topClasses[2]
})
</script>
  
<style lang="css">
</style>
