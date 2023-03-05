<template>
  <div class="tree-view-console">
    <h6>TreeViewConsole component</h6>
    <button v-on:click="shiftFather()">Shift to father</button>
    <button v-on:click="shiftMother()">Shift to mother</button>
    <button v-on:click="moveGhosts()">Move ghosts</button>
    <button v-on:click="resetClasses()">Reset after transition</button>
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

const shiftFather = () => {
  console.log('Shift to father was clicked.')
  viewModel.shiftToFather(familyTree)
}

const shiftMother = () => {
  console.log('Shift to mother was clicked.')
  viewModel.shiftToMother(familyTree)
}

const resetClasses = () => {
  console.log('Reset was clicked.')
  viewModel.resetClassesAfterTransition()
}

const moveGhosts = () => {
  console.log('move ghosts was clicked.')
  viewModel.moveGhosts()
}
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
