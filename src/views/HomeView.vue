<script setup>
import { ref, reactive, onBeforeMount } from 'vue'
import HeroesRepository from '../components/repositories/HeroesRepo';
import CharactersService from '../components/services/HeroesService';

let characters = reactive([])
let isLoaded = ref(false)

const repository = new HeroesRepository
const service = new CharactersService(repository)

onBeforeMount( async () => {
    characters = await service.index()
    isLoaded.value = true
})

</script>

<template>
  <main>
    <div id="amiibo-world">
      <h1>Welcome to Amiibo World</h1>


      <div v-for="character in characters" v-if="isLoaded">
        <div class="card">
          <img :src="character.image" class="card-img" alt="...">
          <div class="card-body">
            <p class="card-text">{{ character.name }}</p>
          </div>
        </div>
      </div>
      <!-- <div v-else>
        <span class="spinner-border text-primary"></span>
      </div> -->
    </div>
  </main>
</template>

<style scoped lang="scss">

</style>