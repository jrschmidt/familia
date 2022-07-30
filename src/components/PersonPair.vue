<template>
  <div class="person-pair">
    <PersonTag
      class="pt-left"
      v-if="pair.people.length > 0"
      v-bind:key="pair.people[0]"
      v-bind:personId="pair.people[0]"
    />
    <PersonTag
      class="pt-right"
      v-if="pair.people.length > 1"
      v-bind:key="pair.people[1]"
      v-bind:personId="pair.people[1]"
    />
  </div>
</template>

<script setup>
import PersonTag from './PersonTag.vue'

const props = defineProps({
  pair: Object
})
</script>

<style lang="css">
.person-pair {
  position: absolute;
  display: flex;
  justify-content: center;
  font-size: 0.6rem;
}

.no-show {
  visibility: hidden;
}

.normal {
  width: 240px;
}

.compressed {
  width: 120px;
}

.singleton {
  width: 120px;
}
</style>
