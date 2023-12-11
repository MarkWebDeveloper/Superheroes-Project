<script setup>

import { ref } from 'vue';

const isDropdownOpen = ref(false);

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

export default {
  data() {
    return {
      searchRace: '', // Almacena el valor de la búsqueda por raza
      characters: [], // Almacena los personajes filtrados
      originalCharacters: [] // Almacena todos los personajes originales
      // Agrega otras propiedades de datos según sea necesario
    };
  },
  methods: {
    searchByRace() {
      if (this.searchRace.length > 0) {
        const lowerCaseRace = this.searchRace.toLowerCase();

        let result = this.originalCharacters.filter((character) => {
          const characterRace = character.race.toLowerCase();

          return characterRace.includes(lowerCaseRace);
        });

        this.characters = result;
      } else {
        this.characters = this.originalCharacters;
      }
    },
    // Otras funciones del componente
  },
  // Otras opciones del componente
};

</script>

<template>

    <div id="dropdown-menu" v-model="searchRace"  @click="searchByRace" @click="toggleDropdown" :class="{ 'clicked': isDropdownOpen }"> FILTER

    <ul class="dropdown-list" v-show="isDropdownOpen">

      <li class="item-1"> <a href="#"> HUMAN </a> </li>
      <li class="item-2"> <a href="#"> CYBORG </a> </li>
      <li class="item-3"> <a href="#"> ALIEN </a> </li>
      <li class="item-4"> <a href="#"> DEMON </a> </li>

    </ul>

    </div>

</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond&family=Space+Grotesk&display=swap');

#dropdown-menu {
  position: relative;
  display: inline-block;
  background-color: black;
  color: white;
  width: 10%;

  margin-left: 75%;

  padding: 10px;
  font-family: 'Space Grotesk', serif;
  font-size: 1.2rem;
  text-align: center;
  cursor: pointer;
  border-radius: 10px;
}

.dropdown-list {
  display: none;
  position: absolute;
  list-style-type: none;
  margin: 0;
  padding: 0;
  background-color: #f9f9f9;
  box-shadow: 0 8px 16px rgba(0,0,0,0.2);

  z-index: 99;
  width: 90%;
}

.dropdown-list li {
  padding: 10px;
  text-align: left;
  border: 1px solid black;
}

#dropdown-menu.clicked .dropdown-list {
  display: block;
}

@media only screen and (max-width: 768px) {
     #dropdown-menu {
        display: none;
    }
}

</style>