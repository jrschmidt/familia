<template>
  <div
    class="connector-svg-top"
    :class="[location, visibility, shape]"
  >
    <svg height="32px" width="100%">
      <line x1="2" y1="2" x2="2" y2="16" stroke="#999999" stroke-width="3"/>
      <line x1="calc(100% - 2px)" y1="2" x2="calc(100% - 2px)" y2="16" stroke="#999999" stroke-width="3"/>
      <line x1="0" y1="16" x2="100%" y2="16" stroke="#999999" stroke-width="3"/>
      <line x1="50%" y1="16" x2="50%" y2="32" stroke="#999999" stroke-width="3"/>
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
    height: 32px;
    margin-top: 0px;
    margin-bottom: 0px;
    padding: 0%;
  }

  .connector-svg-top svg {
  vertical-align: top;
}

.connector-svg-top {
  transition-property: width, margin-left;
  transition-duration: 2000ms;
}

  .connector-svg-top {
  width: 100%;
  margin-left: 0px;
}

.connector-svg-top.cnx-1-0 {
  width: 120px;
  margin-left: 0px;
}

.connector-svg-top.cnx-1-1 {
  width: 120px;
  margin-left: 120px;
}

</style>
