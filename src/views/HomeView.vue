<script setup>
import ButtonSearch from '../components/homeButtons/ButtonSearch.vue';
import { useApiCharactersStore } from '../stores/ApiCharactersStore.js';
import Card from '../components/general/Card.vue';

const store = useApiCharactersStore();


</script>

<template>
  <main>
    <div id="cards-container">
      <ButtonSearch />
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
  background-image: url("./images/background/black-and-white-background.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

#cards-container {
  margin: 0 auto;
  position: relative;
  width: 100%;
  height: 70vh;
  display: grid;
  grid-template-columns: repeat(2, 45%);
  grid-auto-rows: 31%;
  justify-content: center;
  justify-items: center;
  row-gap: 3%;
  padding: 2%;
  overflow-y: scroll;
}

@media only screen and (min-width: 768px) {
  #cards-container {
    width: 70%;
    display: grid;
    grid-template-columns: repeat(5, 17%);
    grid-auto-rows: 50%;
    row-gap: 6%;
  }
}
</style>