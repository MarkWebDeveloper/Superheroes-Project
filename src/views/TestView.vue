<script setup>
import { ref, reactive, onBeforeMount } from 'vue'
import CharactersRepository from '../components/repositories/CharactersRepo';
import CharactersService from '../services/CharactersService';

let characters = reactive([])
let isLoaded = ref(false)

const repository = new CharactersRepository
const service = new CharactersService(repository)

onBeforeMount( async () => {
    characters = await service.index()
    isLoaded.value = true
})

</script>

<template>
  <main>
    <div v-for="character in characters" v-if="isLoaded">
      <div class="card">
        <div class="card-body">
          <img :src="character.image" class="card-img" alt="...">
          <p class="card-text">{{ character.name }}</p>
        </div>
      </div>
    </div>
    
    <div v-else>
      <span class="spinner-border text-primary"></span>
    </div>
  </main>
</template>

<style scoped lang="scss">

</style>