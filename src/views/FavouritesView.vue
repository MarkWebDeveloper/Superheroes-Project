<script setup>
import AddHero from '../components/favourites/AddHero.vue'
import Popup from '../components/favourites/Popup.vue';
import CardFavourites from '../components/general/CardFavourites.vue';
import { useApiCharactersStore } from '../stores/ApiCharactersStore';
import { useFavouriteCharactersStore } from '../stores/FavouriteCharactersStore';

const store = useApiCharactersStore()
const storeFav = useFavouriteCharactersStore()

</script>

<template>
  <main>
    <Popup v-if="storeFav.popupOpened"/>

    <div>
      <h1>FAVOURITES</h1>
    </div>

    <div id="add-button-container">
      <AddHero />
    </div>

    <div id="cards-container">
      <CardFavourites v-for="(character, index) in storeFav.favouriteCharacters" :character="character" :index="index" />
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
  margin-bottom: 10%;
}

#add-button-container {
  display: flex;
  justify-content: center;
  margin-bottom: 10%;
}

#cards-container {
  margin: 0 auto;
  position: relative;
  width: 100%;
  height: 60%;
  display: grid;
  grid-template-columns: repeat(2, 45%);
  grid-auto-rows: 49%;
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
    margin-bottom: 3%;
  }

  #add-button-container {
    display: flex;
    justify-content: flex-start;
    padding-left: 10.8%;
    margin-bottom: 3%;
  }

  #title-container {
    margin-bottom: 2%;
  }

  #cards-container {
    width: 80%;
    height: 45%;
    display: grid;
    grid-template-columns: repeat(5, 20%);
    grid-auto-rows: 100%;
    row-gap: 6%;
    padding: 0;
  }
}
</style>
  