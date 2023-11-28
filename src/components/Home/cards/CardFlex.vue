<script setup>

import { ref, reactive, onBeforeMount } from 'vue'
import { useApiCharactersStore } from '@/stores/ApiCharactersStore'
const store = useApiCharactersStore()

</script>

<template>
  
  <div class="Card">
      <div class="CardPhotoContainer">
        <img :src="store.characters[0].image" class="card-img" alt="...">
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
    
    </div>

</template>

<style>
/* .Card{
    display: flex;
    flex-wrap: nowrap;
    background-color: aqua;
    height: 100%;
  }
  
  .shPhoto{
    background: cover;
  } */
</style>