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
        <div class="atributes">
          <h1 class="character-name"></h1>
          <p class="character-intelligence">INTELLIGENCE</p>
          <p class="character-power">POWER</p>
        <p class="character-speed">SPEED</p>
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
main {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
}

#cards-container {
  background-color: red;
  width: 80%;
  height: 65vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 20px;
}

.card {
  background-color: yellow;
  height: 50%;
}

.card-photo-container {
  height: 50%;
  display: flex;
  justify-content: center;
  background-color: gray;
}

.card-img {
  height: 100%;
}

@media only screen and (min-width: 768px) {
  #cards-container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
  }
}
</style>