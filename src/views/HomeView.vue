<script setup>
import { onBeforeMount } from 'vue';
import { useApiCharactersStore } from '../stores/ApiCharactersStore.js';
import CardFlex from '../components/Home/cards/CardFlex.vue';
const store = useApiCharactersStore()

onBeforeMount( async () => {
    store.characters = await store.service.index()
    store.isLoaded = true
    console.log(store.characters)
})
</script>

<template>
  <main>
    <div id="cards-container">
      <div class="card" v-for="character in store.characters" v-if="store.isLoaded">

        <div class="card-photo-container">
          <img :src="character.image" class="card-img" alt="...">
          <button class="add-character">
            <img src="" alt="">
          </button>
        </div>

        <div class="card-data-container">
          <div class="character-name-container">
          <h1 class="character-name">{{ character.name }}</h1>
        </div>
        <div class="character-attributes">
          <p class="character-intelligence">RACE: {{ character.race }}</p>
          <p class="character-power">INTELLIGENCE: {{ character.intelligence }}</p>
            <p class="character-speed">POWER: {{ character.power }}</p>
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
  height: 90vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 33%;
  justify-items: center;
  row-gap: 3%;
  padding: 2%;
  overflow-y: scroll;
}

.card {
  height: 100%;
  width: 90%;
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
  font-family: 'Space Grotesk', serif;
}

.character-name-container {
  height: 40%;
  display: flex;
  align-items: center;
}
.character-name {
  word-wrap: break-word;
  text-transform: uppercase;
  font-family: 'Press Start 2P', sans-serif;
  overflow: auto;
  text-align: center;
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