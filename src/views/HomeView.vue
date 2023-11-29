<script setup>
import { onBeforeMount } from 'vue';
import { useApiCharactersStore } from '../stores/ApiCharactersStore.js';
import CardFlex from '../components/Home/cards/CardFlex.vue';
const store = useApiCharactersStore()

onBeforeMount( async () => {
    store.characters = await store.service.index()
    store.isLoaded = true
})
</script>

<template>
  <main>
<div id="cards-container">
  <div class="card" v-if="store.isLoaded">

      <div class="card-photo-container">
        <img :src="store.characters[store.newIndex].image" class="card-img" alt="...">
        <button class="add-character">
          <img src="" alt="">
        </button>
      </div>

      <div class="card-data-container">
        <div class="character-name-container">
          <h1 class="character-name">Hero</h1>
        </div>
        <div class="character-attributes">
          <p class="character-intelligence">INTELLIGENCE: </p>
          <p class="character-power">POWER: </p>
          <p class="character-speed">SPEED: </p>
        </div>
      </div>

  </div>      
</div>
    <!-- <div class="card" v-for="character in store.characters" v-if="store.isLoaded">
        <div class="card-body">
          <img :src="character.image" class="card-img" alt="...">
          <p class="card-text">{{ character.name }}</p>
        </div>
      </div> -->
</main>
</template>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

main {
  height: 100%;
  width: 100%;
}

#cards-container {
  margin: 0 auto;
  position: relative;
  background-color: gray;
  width: 90%;
  height: 80vh;
  display: grid;
  grid-auto-columns: 45%;
  grid-auto-rows: 33%;
  grid-gap: 20px;
  overflow-y: scroll;
}

.card {
  height: 100%;
  border-radius: 10px;
  background-color: #EE5454;
}

.card-photo-container {
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid black;
}

.card-img {
  height: 90%;
}

.card-data-container {
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
}

.character-name-container {
  height: 40%;
  display: flex;
  align-items: center;
}
.character-name {
  
  text-transform: uppercase;
  font-family: 'Press Start 2P', sans-serif;
}

.character-attributes {
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 10%
}

@media only screen and (min-width: 768px) {
  #cards-container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
  }
}
</style>