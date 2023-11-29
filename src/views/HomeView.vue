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
    <div v-for="character in store.characters" v-if="store.isLoaded">
      <div class="card">
        <div class="card-body">
          <img :src="character.image" class="card-img" alt="...">
          <p class="card-text">{{ character.name }}</p>
        </div>
      </div>
    </div>
</main>
</template>

<style scoped lang="scss">

</style>