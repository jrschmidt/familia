<template>
    <div class="connector-svg-bottom" :class="svgClass">
      <svg height="24px" width="3px">
        <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#999999" stroke-width="2"/>
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
  