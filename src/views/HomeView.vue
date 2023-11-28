<script setup>
import { onBeforeMount } from 'vue';
import { useApiCharactersStore } from '../stores/ApiCharactersStore.js'
const store = useApiCharactersStore()
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