<script setup>
import AddHero from '../components/favourites/AddHero.vue'

import { useApiCharactersStore } from '../stores/ApiCharactersStore.js';
//import { useFavouriteCharactersStore } from '../stores/FavouriteCharactersStore.js';
import Card from '../components/general/Card.vue';

const store = useApiCharactersStore()
//const store = useFavouriteCharactersStore();
</script>

<template>
  
    <div>
      <h1>FAVOURITES</h1>
    </div>
    <main>
    <div id="cards-container">
      <Card v-for="character in store.characters" v-if="store.isLoaded" :character="character" />
    </div>
  
    <!-- <AddHero /> -->
  </main>
</template>
  
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond&family=Space+Grotesk&display=swap');

h1 {
  font-family: 'Press Start 2P';
  padding: 30px;
  text-align: center;
  font-size: 30px;
}



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
    width: 20%;
    height: 70vh;
    display: grid;
    grid-template-columns: repeat(5, 17%);
    //grid-auto-rows: 50%;
    row-gap: 6%;
  }
}
</style>
  