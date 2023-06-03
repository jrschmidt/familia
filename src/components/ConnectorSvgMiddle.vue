<template>
    <div class="connector-svg-middle" :class="svgClass">
      <svg height="3px" width="100%">
        <line x1="0%" y1="1" x2="100%" y2="1" stroke="#999999" stroke-width="3"/>
      </svg>
    </div>
  </template>
    
  <script setup>
  const props = defineProps({
    svgClass: String
  })
  </script>
    
  <style lang="css">
  </style>
  