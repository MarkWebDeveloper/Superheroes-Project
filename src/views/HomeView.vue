<script setup>
import { useApiCharactersStore } from '../stores/ApiCharactersStore.js';
import Card from '../components/general/Card.vue';
import SearchBarMobile from '../components/home/SearchBarMobile.vue';
import SearchBarDesktop from '../components/home/SearchBarDesktop.vue';

const store = useApiCharactersStore()

// const gettingOnlyTen = async () => { await store.showOnlyTen() }
// gettingOnlyTen()
// const tenChars = store.characters.slice(0, 10)

</script>

<template>
  <main>
    <div id="title-container">
      <h1 id="title">Heroes and Villains</h1>
    </div>
    <div id="inputs-container-desktop">
      <SearchBarDesktop id="searchbar-desktop" />
    </div>
    <div id="cards-container">
      <Card v-for="character in store.characters" v-if="store.isLoaded" :character="character" />
    </div>
    <div id="inputs-container-mobile">
      <SearchBarMobile id="searchbar-mobile" />
    </div>
  </main>
</template>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond&family=Space+Grotesk&display=swap');

main {
  height: 90vh;
  background-image: url("./images/background/black-and-white-background.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

#title-container {
  height: 7vh;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

#title {
  font-family: 'Press Start 2P', sans-serif;
  text-transform: uppercase;
  text-align: center;
  font-size: 2.2vmax;
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
  overflow-y: scroll;
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