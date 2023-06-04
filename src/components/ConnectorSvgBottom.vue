<template>
    <div
      class="connector-svg-bottom"
      v-bind:class="[location, shape, visibility]"
    >
      <svg height="24px" width="3px">
        <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#999999" stroke-width="2"/>
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
  </style>
  