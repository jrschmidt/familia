<template>
  <div
    class="connector-svg-top"
    :class="[location, visibility, shape]"
  >
    <svg height="48px" width="100%">
      <line x1="2%" y1="0" x2="2%" y2="24" stroke="#999999" stroke-width="3"/>
      <line x1="98%" y1="0" x2="98%" y2="24" stroke="#999999" stroke-width="3"/>
      <line x1="0" y1="24" x2="100%" y2="24" stroke="#999999" stroke-width="3"/>
      <line x1="50%" y1="24" x2="50%" y2="48" stroke="#999999" stroke-width="3"/>
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
.connector-svg-top {
  width: 100%;
  margin-left: 0px;
}

.connector-svg-top.cnx-1-0 {
  width: 120px;
}

.connector-svg-top.cnx-1-1 {
  width: 120px;
  margin-left: 120px;
}
</style>
