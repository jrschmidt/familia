<template>
  <div class="tree-view-console">
    <h6>TreeViewConsole component</h6>
    <TreeViewWindow/>
  </div>
</template>

<script setup>
import TreeViewWindow from './TreeViewWindow.vue'
import { useViewModelStore } from '../stores/viewModelStore'
import { useFamilyTreeStore } from '../stores/familyTreeStore'
import { pairInitConstants, viewModelConfig as configData } from '../view-model-constants'

const familyTree = useFamilyTreeStore()
familyTree.loadTree()

const viewModel = useViewModelStore()
viewModel.initialize(configData, pairInitConstants)
viewModel.populate(familyTree)

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
