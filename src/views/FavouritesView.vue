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
        <div id="stars-container">
        <form>
            <p id="clasificacion">
                <input id="radio1" type="radio" name="estrellas" value="5">
                <label for="radio1">★</label>
                <input id="radio2" type="radio" name="estrellas" value="4">
                <label for="radio2">★</label>
                <input id="radio3" type="radio" name="estrellas" value="3">
                <label for="radio3">★</label>
                <input id="radio4" type="radio" name="estrellas" value="2">
                <label for="radio4">★</label>
                <input id="radio5" type="radio" name="estrellas" value="1">
                <label for="radio5">★</label>
            </p>
        </form>
        <Card v-for="character in store.characters" v-if="store.isLoaded" :character="character" />
        </div>
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
#clasificacion{
    label{ color:grey;}
    input[type = "radio"]{ display:none;}
    direction: rtl;/* right to left */
    unicode-bidi: bidi-override;/* bidi de bidireccional */
    label:hover{color:orange;}
    label:hover ~ label{color:orange;}
    input[type = "radio"]:checked ~ label{color:orange;}
}
#form {
  width: 250px;
  margin: 0 auto;
  height: 50px;
  text-align: center;
}
#cards-container {
  margin: 0 auto;
  position: relative;
  width: 100%;
  height: 70vh;
  display: grid;
  grid-template-columns: repeat(2, 40%);
  grid-auto-rows: 25%;
  justify-content: center;
  justify-items: center;
  row-gap: 10%;
  padding: 6%;
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
  