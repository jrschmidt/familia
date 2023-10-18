<template>
  <div class="tree-view-console">
    <h6>TreeViewConsole component</h6>
    <div>
      <button v-on:click="shiftFather()">shiftFather()</button>
      <button v-on:click="shiftMother()">shiftMother()</button>
      <button v-on:click="shiftChildMale()">shiftChildMale()</button>
      <button v-on:click="shiftChildFemale()">shiftChildFemale()</button>
    </div>
    <hr />
    <div>
      <button v-on:click="shiftFatherSet()">shiftSet(toFather)</button>
      <button v-on:click="shiftFatherMove()">shiftMove(toFather)</button>
      <button v-on:click="shiftFatherReset()">shiftReset(toFather)</button>
    </div>
    <div>
      <button v-on:click="shiftMotherSet()">shiftSet(toMother)</button>
      <button v-on:click="shiftMotherMove()">shiftMove(toMother)</button>
      <button v-on:click="shiftMotherReset()">shiftReset(toMother)</button>
    </div>
    <div>
      <button v-on:click="shiftChildMaleSet()">shiftSet(toChildMaleRoot)</button>
      <button v-on:click="shiftChildMaleMove()">shiftMove(toChildMaleRoot)</button>
      <button v-on:click="shiftChildMaleReset()">shiftReset(toChildMaleRoot)</button>
    </div>
    <div>
      <button v-on:click="shiftChildFemaleSet()">shiftSet(toChildFemaleRoot)</button>
      <button v-on:click="shiftChildFemaleMove()">shiftMove(toChildFemaleRoot)</button>
      <button v-on:click="shiftChildFemaleReset()">shiftReset(toChildFemaleRoot)</button>
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
  console.log('shiftFatherSet was clicked.')
  viewModel.tempShiftSet(familyTree, 'toFather')
}

const shiftFatherMove = () => {
  console.log('shiftFatherMove was clicked.')
  viewModel.tempShiftMove(familyTree, 'toFather')
}

const shiftFatherReset = () => {
  console.log('shiftFatherReset was clicked.')
  viewModel.tempShiftReset(familyTree, 'toFather')
}

const shiftFather = () => {
  console.log('shiftFather was clicked.')
  viewModel.tempShiftSet(familyTree, 'toFather')
  viewModel.tempShiftMove(familyTree, 'toFather')
  viewModel.tempShiftReset(familyTree, 'toFather')
}

const shiftMotherSet = () => {
  console.log('shiftMotherSet was clicked.')
  viewModel.tempShiftSet(familyTree, 'toMother')
}

const shiftMotherMove = () => {
  console.log('shiftMotherMove was clicked.')
  viewModel.tempShiftMove(familyTree, 'toMother')
}

const shiftMotherReset = () => {
  console.log('shiftMotherReset was clicked.')
  viewModel.tempShiftReset(familyTree, 'toMother')
}

const shiftMother = () => {
  console.log('shiftMother was clicked.')
  viewModel.tempShiftSet(familyTree, 'toMother')
  viewModel.tempShiftMove(familyTree, 'toMother')
  viewModel.tempShiftReset(familyTree, 'toMother')
}

const shiftChildMaleSet = () => {
  console.log('shiftChildMaleSet was clicked.')
  viewModel.tempShiftSet(familyTree, 'toChildMaleRoot')
}

const shiftChildMaleMove = () => {
  console.log('shiftChildMaleMove was clicked.')
  viewModel.tempShiftMove(familyTree, 'toChildMaleRoot')
}

const shiftChildMaleReset = () => {
  console.log('shiftChildMaleReset was clicked.')
  viewModel.tempShiftReset(familyTree, 'toChildMaleRoot')
}

const shiftChildMale = () => {
  console.log('shiftChildMale was clicked.')
  viewModel.tempShiftSet(familyTree, 'toChildMaleRoot')
  viewModel.tempShiftMove(familyTree, 'toChildMaleRoot')
  viewModel.tempShiftReset(familyTree, 'toChildMaleRoot')
}

const shiftChildFemaleSet = () => {
  console.log('shiftChildFemaleSet was clicked.')
  viewModel.tempShiftSet(familyTree, 'toChildFemaleRoot')
}

const shiftChildFemaleMove = () => {
  console.log('shiftChildFemaleMove was clicked.')
  viewModel.tempShiftMove(familyTree, 'toChildFemaleRoot')
}

const shiftChildFemaleReset = () => {
  console.log('shiftChildFemaleReset was clicked.')
  viewModel.tempShiftReset(familyTree, 'toChildFemaleRoot')
}

const shiftChildFemale = () => {
  console.log('shiftChilFemMale was clicked.')
  viewModel.tempShiftSet(familyTree, 'toChildFemaleRoot')
  viewModel.tempShiftMove(familyTree, 'toChildFemaleRoot')
  viewModel.tempShiftReset(familyTree, 'toChildFemaleRoot')
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
