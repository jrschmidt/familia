<template>
  <div
    class="connector-svg-middle"
    :class="[location, visibility, shape]"
  >
    <svg height="3px" width="100%">
      <line x1="0%" y1="1" x2="100%" y2="1" stroke="#999999" stroke-width="3"/>
    </svg>
  </div>
</template>

<script setup>
import { computed } from '@vue/reactivity';

const props = defineProps({
  middleClasses: Array
})

const location = computed( () => {
  return props.middleClasses[0]
})

const visibility = computed( () => {
  return props.middleClasses[1]
})

const shape = computed( () => {
  return props.middleClasses[2]
})
</script>
  
<style lang="css">
</style>
  