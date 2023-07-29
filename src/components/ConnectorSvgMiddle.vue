<template>
  <div
    class="connector-svg-middle"
    :class="[location, visibility, shape]"
  >
    <svg height="3px" width="100%">
      <line x1="1px" y1="1.5px" x2="100%" y2="1.5px" stroke="#999999" stroke-width="3"/>
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
  .connector-svg-middle {
    height: 3px;
    margin-right: 32px;
    margin-bottom: 0px;
    padding: 0%;
  }

  .connector-svg-middle svg {
  vertical-align: top;
}

.connector-svg-middle {
  transition-property: width, margin-left;
  transition-duration: 2000ms;
}

.connector-svg-middle.cnx-middle-zero {
  margin-left: calc(50% - 3px);
  width: 3px;
}
  
.connector-svg-middle.cnx-middle-left-long {
  margin-left: 4px;
  width: 178px;
}
  
.connector-svg-middle.cnx-middle-right-long {
  margin-left: 60px;
  width: 178px;
}
  
.connector-svg-middle.cnx-middle-left-short {
  margin-left: 2px;
  width: 60px;
}
  
.connector-svg-middle.cnx-middle-right-short {
  margin-left: 60px;
  width: 60px;
}
</style>
  