<template>
  <div class="tree-view-console">
    <h6>TreeViewConsole component</h6>
  </div>
</template>
// <TreeViewWindow/>

<script setup>
import { useViewModelStore } from '../stores/viewModelStore'
import { pairInitConstants, viewModelConfig as configData } from '../view-model-constants'
import { familyTreeData } from '../data/family-tree-data.js'

const viewModel = useViewModelStore()
viewModel.initialize(configData, pairInitConstants)


// import TreeViewWindow from './TreeViewWindow.vue'
</script>

<style lang="css">
.tree-view-console {
  border-color: maroon;
  border-style: dotted;
}

.tree-view-console h6 {
  margin: 2px 0px 8px 8px;
  text-align: left;
  font-size: 0.6rem;
  color: #999999;
}
</style>
