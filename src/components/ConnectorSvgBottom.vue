<template>
  <div
    class="connector-svg-bottom"
    :class="[location, visibility, shape]"
  >
    <svg height="17px" width="3px">
      <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#999999" stroke-width="3"/>
    </svg>
  </div>
</template>

<script setup>
import { computed } from '@vue/reactivity';

const props = defineProps({
  bottomClasses: Array
})

const location = computed( () => {
  return props.bottomClasses[0]
})

const visibility = computed( () => {
  return props.bottomClasses[1]
})

const shape = computed( () => {
  return props.bottomClasses[2]
})
</script>

<style lang="css">
  .connector-svg-bottom {
    height: 17px;
  }

  .connector-svg-bottom svg {
  vertical-align: top;
}

.connector-svg-bottom {
  margin-top: -3px;
  margin-bottom: 0px;
  padding: 0%;
}

.connector-svg-bottom.cnx-bottom-mid {
  margin-left: calc(50% - 1px);
}

.connector-svg-bottom.cnx-bottom-right {
  margin-left: 98%;
}

.connector-svg-bottom.cnx-bottom-left {
  margin-left: 2%;
}
</style>
  