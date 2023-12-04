<script setup>
import { RouterView } from 'vue-router'
import Header from './general/Header.vue';
import Footer from './general/Footer.vue';
import { useApiCharactersStore } from './stores/ApiCharactersStore';
import { useFavouriteCharactersStore } from './stores/FavouriteCharactersStore';

const favStore = useFavouriteCharactersStore()
const store = useApiCharactersStore()
const settingCharacters = async () => { await store.setCharacters() }
settingCharacters()

</script>

<template>
<<<<<<< HEAD
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
        <RouterLink to="/favourites">Favourites</RouterLink>
      </nav>
    </div>
  </header>
  
=======
  <Header />
>>>>>>> bc01429aa15e9c34d98910f3f301b22a21b4fcfe
  <RouterView />
  <Footer />
</template>

<style scoped>

</style>
