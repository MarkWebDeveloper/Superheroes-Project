<script setup>

import { ref, reactive, onBeforeMount } from 'vue'
import CharactersRepository from '../../../components/repositories/CharactersRepo.js';
import CharactersService from '../../../services/CharactersService.js';

let characters = reactive([])
let isLoaded = ref(false)

const repository = new CharactersRepository
const service = new CharactersService(repository)

onBeforeMount(async () => {
  characters = await service.index()
  isLoaded.value = true
})

</script>

<template>
  
  <main class="Card">
      <div class="CardPhotoContainer">
        <img :src="character.image" class="card-img" alt="...">
          <button class="AddCharacter">
            <img src="" alt="">
          </button>
      </div>
      <div class="CardDataContainer">
          <div class="Atributes">
            <h1 class="CharacterName"></h1>
            <p class="CharacterIntelligence">INTELLIGENCE</p>
            <p class="CharacterPower">POWER</p>
            <p class="CharacterSpeed">SPEED</p>
        </div>
      </div>
    
  </main>

</template>

<style>
.Card{
    display: flex;
    flex-wrap: nowrap;
    background-color: aqua;
    height: 100%;
  }
  
  .shPhoto{
    background: cover;
  }
</style>