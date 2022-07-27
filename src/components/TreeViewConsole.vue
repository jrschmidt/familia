<template>
  <div class="tree-view-console">
    <h6>TreeViewConsole component</h6>
    <TreeViewWindow/>
  </div>
</template>

<script setup>

// OLD - before merge .....
// <h6>TreeViewConsole component</h6>
// <div v-for="pair in viewModel.peoplePairs">
// <h6>_   _   _   _   _   _</h6>
// <h4>{{ pair.label }}</h4>
// <p>{{ pair.classes }}</p>
// <p>{{ pair.people }}</p>
// </div>


// .tree-view-console p {
//   margin: 2px 0px 0px 4px;
//   font-size: 0.8rem;
// }
//
// .tree-view-console h4 {
//   margin: 2px 0px 0px 4px;
//   text-align: left;
//   font-size: 0.8rem;
// }


import TreeViewWindow from './TreeViewWindow.vue'
import { useViewModelStore } from '../stores/viewModelStore'
import { pairInitConstants, viewModelConfig as configData } from '../view-model-constants'

// For now, directly import the sample family tree data from a file.
import { familyTreeData } from '../data/family-tree-data.js'

const viewModel = useViewModelStore()
viewModel.initialize(configData, pairInitConstants)
viewModel.populate(familyTreeData)

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
