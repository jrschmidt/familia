<template>
  <div class="tree-view-console">
    <h6>TreeViewConsole component</h6>
    <div>
      <button v-on:click="shiftFatherSet()">shiftSet(toFather)</button>
      <button v-on:click="shiftFatherMove()">shiftMove(toFather)</button>
      <button v-on:click="shiftFatherReset()">shiftReset(toFather)</button>
    </div>
    <TreeViewWindow/>
  </div>
</template>

<script setup>
import TreeViewWindow from './TreeViewWindow.vue'
import { useViewModelStore } from '../stores/viewModelStore'
import { useFamilyTreeStore } from '../stores/familyTreeStore'
import { viewModelConfig as configData } from '../view-model-constants'

const familyTree = useFamilyTreeStore()
familyTree.loadTree()

const viewModel = useViewModelStore()
viewModel.initialize(configData)
viewModel.populate(familyTree)

// ***  Temporary methods to make butons for testing:

const shiftFatherSet = () => {
  console.log('shiftFatherSet) was clicked.')
  viewModel.tempShiftSet(familyTree, 'toFather')
}



// =========================================
// ***  ***  ***  OLD METHODS  ***  ***  ***

// const shiftFather = () => {
//   console.log('shift to father was clicked.')
//   viewModel.shiftSet(familyTree)
// }

// const shiftMother = () => {
//   console.log('Shift to mother was clicked.')
//   viewModel.shiftToMother(familyTree)
// }

// const shiftChildM = () => {
//   console.log('Shift to child (male root) was clicked.')
//   viewModel.shiftToChildMaleRoot(familyTree)
// }

// const shiftChildF = () => {
//   console.log('Shift to child (female root) was clicked.')
//   viewModel.shiftToChildFemaleRoot(familyTree)
// }

// const resetClasses = () => {
//   console.log('Reset was clicked.')
//   viewModel.resetClassesAfterTransition()
// }

// const moveGhosts = () => {
//   console.log('move ghosts was clicked.')
//   viewModel.moveGhosts()
// }
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
