<script setup>
import AddHero from '../components/favourites/AddHero.vue'
import CardFavourites from '../components/general/CardFavourites.vue';
import { useApiCharactersStore } from '../stores/ApiCharactersStore';
import { useFavouriteCharactersStore } from '../stores/FavouriteCharactersStore';

const store = useApiCharactersStore()
</script>

<template>
  <main>
    <div>
      <h1>FAVOURITES</h1>
    </div>

    <div id="add-button-container">
      <AddHero />
    </div>

    <div id="cards-container">
      <CardFavourites v-for="character in store.characters" v-if="store.isLoaded" :character="character" />
    </div>
  </main>
</template>
  
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

main {
  height: 90vh;
  background-image: url("./images/background/black-and-white-background.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

h1 {
  font-family: 'Press Start 2P';
  padding-top: 3%;
  text-align: center;
  font-size: 30px;
  margin-bottom: 5%;
}

#add-button-container {
  display: flex;
  justify-content: center;
}

#cards-container {
  margin: 0 auto;
  position: relative;
  width: 100%;
  height: 85%;
  display: grid;
  grid-template-columns: repeat(2, 45%);
  grid-auto-rows: 31%;
  justify-content: center;
  justify-items: center;
  row-gap: 3%;
  padding: 2%;
  overflow-y: auto;
}

#inputs-container-mobile {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 5%;
}

@media only screen and (min-width: 768px) {
  main {
    height: 85vh;
  }

  h1 {
    margin-bottom: 2%;
  }

  #add-button-container {
    display: flex;
    justify-content: flex-start;
    padding-left: 10.8%;
  }

  #title-container {
    margin-bottom: 2%;
  }

  #cards-container {
    width: 80%;
    height: 70%;
    display: grid;
    grid-template-columns: repeat(5, 20%);
    grid-auto-rows: 50%;
    row-gap: 6%;
    padding: 0;
  }
}
</style>
  