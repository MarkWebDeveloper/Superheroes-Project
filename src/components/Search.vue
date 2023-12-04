<template>
    <div>
      <form @submit.prevent="fetchData">
        <input type="text" v-model="buscar" class="form-control" placeholder="Ejemplo: Bulbasaur"/>
        <button type="submit">Buscar</button>
      </form>
      <div v-for="pokemon in pokemons" :key="pokemon.id" class="pokemon">
        <h2>{{ pokemon.name }}</h2>
        <img :src="pokemon.sprites.front_default" alt="Imagen del Pokémon">
        <p>Número: {{ pokemon.id }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  
  export default {
    setup() {
      const buscar = ref('')
      const pokemons = ref([])
  
      const fetchData = async () => {
        if (buscar.value) {
          try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${buscar.value}`)
            const data = await response.json()
            pokemons.value = [data] 
          } catch (error) {
            console.error('Error al buscar el Pokémon:', error)
          }
        } else {
          pokemons.value = []
        }
      }
  
      return { buscar, pokemons, fetchData }
    },
  }
  </script>
  
  <style lang="scss" scoped>
  .pokemon{
      margin: 2rem;
      width: 30%;
      border: 2px solid;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  </style>