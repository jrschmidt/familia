<template>
    <div class="connector-svg-top" :class="svgTopWidth">
      <svg height="48px" width="100%">
        <line x1="0%" y1="0" x2="0" y2="24" stroke="#999999" stroke-width="2"/>
        <line x1="100%" y1="0" x2="100%" y2="24" stroke="#999999" stroke-width="2"/>
        <line x1="0" y1="24" x2="100%" y2="24" stroke="#999999" stroke-width="2"/>
        <line x1="50%" y1="24" x2="50%" y2="48" stroke="#999999" stroke-width="2"/>
      </svg>
    </div>
  </template>
  
  <!-- <script setup>
  import { inject } from 'vue'
  
  const svgSize = inject('svgSize')
  </script>
  
  <style lang="css">
  .connector-svg {
    border-color: red;
    border-style: dotted;
    grid-column-start: 2;
    grid-column-end: 6;
    position: absolute;
    left: 100px;
    top: 500px;
  }
  
  .connector-svg.span-4 {
    width: 200px;
    transition: width 400ms linear;
  }
  
  .connector-svg.span-2 {
    width: 100px;
    transition: width 400ms linear;
  }
  </style> -->
  