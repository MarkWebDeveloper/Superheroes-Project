<script setup>

import { ref } from 'vue';

const isDropdownOpen = ref(false);

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

</script>

<template>

    <div id="dropdown-menu" @click="toggleDropdown" :class="{ 'clicked': isDropdownOpen }"> FILTER

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

  padding: 10px;
  font-family: 'Cormorant Garamond', serif;
  cursor: pointer;
}

.dropdown-list {
  display: none;
  position: absolute;
  list-style-type: none;
  margin: 0;
  padding: 0;
  background-color: #f9f9f9;
  box-shadow: 0 8px 16px rgba(0,0,0,0.2);
}

.dropdown-list li {
  padding: 10px;
  text-align: left;
  border: 1px solid black;
}

#dropdown-menu.clicked .dropdown-list {
  display: block;
}

</style>