<template>
  <div class="person-tag">
    <p>{{ personId }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  personId: String
})


// <p class="year">{{ getBirthYearLabel(personData) }}</p>
// <p class="year">{{ getDeathYearLabel(personData) }}</p>
// <p>{{ personData.firstname }}</p>
// <p>{{ personData.lastname }}</p>

// const getBirthYearLabel = (personData) => {
//   return personData.birthdate ? 'b' + personData.birthdate.slice(-4) : '-- --'
// }
//
// const getDeathYearLabel = (personData) => {
//   return personData.deathdate ? 'd' + personData.deathdate.slice(-4) : '-- --'
// }
</script>

<style lang="css">
.person-tag {
  background-color: #f0f0ff;
  color: green;
  font-size: 0.6rem;
  height: 50px;
  border: 1px solid #666666;
  border-radius: 8px;
}

.person-tag p {
  margin: 0px;
}

.person-tag p.year {
  font-size: 0.5rem;
}

.normal .person-tag {
  width: 60px;
}

.compressed .person-tag {
  width: 50px;
}

.normal .person-tag.pt-left {
  margin-right: 30px;
}

.normal .person-tag.pt-right {
  margin-left: 30px;
}

.compressed .person-tag.pt-left {
  margin-right: 5px;
}

.compressed .person-tag.pt-right {
  margin-left: 5px;
}

.singleton .person-tag {
  width: 60px;
}
</style>
