<script setup>

import { ref } from 'vue';

const isDropdownOpen = ref(false);

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

function filterCharacter(race) {
  let result = store.originalCharacters.filter((character) => character.race = human)
  store.characters = result
}

</script>

<template>

    <div id="dropdown-menu" @click="toggleDropdown" :class="{ 'clicked': isDropdownOpen }"> FILTER
        <img src="/images/icons/arrow.png" alt="">

      <ul class="dropdown-list" v-show="isDropdownOpen">

      <li class="item-1">
        <input type="checkbox">
        <label class="item-1"> <a href="#"> HUMAN </a> </label>
      </li>

      <li class="item-2">
        <input type="checkbox">
        <label class="item-2"> <a href="#"> CYBORG </a> </label>
      </li>

      <li class="item-3">
        <input type="checkbox">
        <label class="item-3"> <a href="#"> ALIEN </a> </label>
      </li>

      <li class="item-4">
        <input type="checkbox">
        <label class="item-4"> <a href="#"> DEMON </a> </label>
      </li>

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
  width: 25%;

  margin-top: 5%;
  margin-left: 65%;

  padding: 10px;
  font-family: 'Cormorant Garamond', serif;
  cursor: pointer;
  border-radius: 10px;

  img {
    width: 20%;
  }
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
}

.dropdown-list li {
  padding: 5px;
  text-align: left;
  border: 1px solid black;
}

#dropdown-menu.clicked .dropdown-list {
  display: block;
}

@media only screen and (min-width: 768px) {

  #dropdown-menu {
    width: 8%;
    margin-left: 75%;
  }

  .dropdown-list li {
    padding: 4px;
  }
}

</style>