<script setup>
import { onBeforeMount } from 'vue';
import { useApiCharactersStore } from '../../../stores/ApiCharactersStore';
const store = useApiCharactersStore()

onBeforeMount( async () => {
    store.characters = await store.service.index()
    store.isLoaded = true
})

</script>

<template>

  <div class="Card" v-if="store.isLoaded">
    <div class="CardPhotoContainer">
      <img :src="store.characters[store.newIndex].image" class="card-img" alt="...">
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