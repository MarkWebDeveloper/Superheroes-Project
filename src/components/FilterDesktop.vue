<script setup>

import { ref } from 'vue';
import { useApiCharactersStore } from '../stores/ApiCharactersStore';
const store = useApiCharactersStore()

const isDropdownOpen = ref(false);

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

  function filterCharactersByRace() {
    const selectedRaces = Array.from(document.querySelectorAll('.dropdown-list input:checked')).map(checkbox => checkbox.name);

    console.log (selectedRaces);

    if (selectedRaces.length > 0) {
      let result = store.characters.filter((character) => selectedRaces.includes(character.race));
      console.log(result)
      store.characters = result
    } else {
      store.characters = []
      store.characters = store.originalCharacters
    }
  } 

</script>

<template>

    <div id="dropdown-menu" @click="toggleDropdown" :class="{ 'clicked': isDropdownOpen }"> FILTER

      <ul class="dropdown-list" v-show="isDropdownOpen">

      <div id="item-1">
      <input type="checkbox" id="item-1" name="Human" value="Human" @click="filterCharactersByRace" />
      <label> <a href="#"> HUMAN </a> </label>
      </div>

      <div id="item-2">
      <input type="checkbox" id="item-2" name="Cyborg" value="Cyborg" @click="filterCharactersByRace" />
      <label> <a href="#"> CYBORG </a> </label>
      </div>

      <div id="item-3">
      <input type="checkbox" id="item-3" name="Alien" value="Alien" @click="filterCharactersByRace" />
      <label> <a href="#"> ALIEN </a> </label>
      </div>

      <div id="item-4">
      <input type="checkbox" id="item-4" name="Demon" value="Demon" @click="filterCharactersByRace" />
      <label> <a href="#"> DEMON </a> </label>
      </div>

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
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);

  z-index: 99;
  width: 90%;

  a {
    text-decoration: none;
    color: black;
  }

  div {
    display: flex;
    align-items: center;
    padding: 8px;
    border-bottom: 1px solid #ccc;
  }

  div input {
    margin-right: 8px;
  }

  ul {
    display: flex;
    flex-direction: column;
    text-align: center;
    border: 1px solid black;
  }

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