<script setup>
import { onBeforeMount } from 'vue';
import { useApiCharactersStore } from '../stores/ApiCharactersStore.js';
import Card from '../components/general/Card.vue';
const store = useApiCharactersStore()

// onBeforeMount( async () => {
//     await store.callApiAndLoad()
// })

onBeforeMount( async () => {
    store.characters = await store.service.index()
    store.isLoaded = true
})
</script>

<template>
  <main>
    <div id="cards-container">
      <Card v-for="character in store.characters" v-if="store.isLoaded" :character="character" />
    </div>
  </main>
</template>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond&family=Space+Grotesk&display=swap');

main {
  height: 90%;
  width: 100%;
  background-image: url("/images/background/background-pic-login.webp");
}

#cards-container {
  margin: 0 auto;
  position: relative;
  width: 100%;
  height: 70vh;
  display: grid;
  grid-template-columns: repeat(2, 45%);
  grid-auto-rows: 31%;
  justify-items: center;
  row-gap: 3%;
  padding: 2%;
  overflow-y: scroll;
}
</style>