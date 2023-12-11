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

    <div id="item-1">
    <input type="checkbox" id="item-1" name="human" />
    <label> <a href="#"> HUMAN </a> </label>
    </div>

    <div id="item-2">
    <input type="checkbox" id="item-2" name="cyborg" />
    <label> <a href="#"> CYBORG </a> </label>
    </div>

    <div id="item-3">
    <input type="checkbox" id="item-3" name="alien" />
    <label> <a href="#"> ALIEN </a> </label>
    </div>

    <div id="item-4">
    <input type="checkbox" id="item-4" name="demon" />
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
  width: 30%;
  z-index: 1;
  text-align: center;

  padding: 10px;
  font-family: 'Cormorant Garamond', serif;
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
  top: -199%;
  width: 90%;
}

.dropdown-list ul {
  display: flex;
  flex-direction: column;
  text-align: center;
  border: 1px solid black;
}

#dropdown-menu.clicked .dropdown-list {
  display: block;
}

@media only screen and (min-width: 768px) {

    #dropdown-menu {
        display: none;
    }
    
}

</style>