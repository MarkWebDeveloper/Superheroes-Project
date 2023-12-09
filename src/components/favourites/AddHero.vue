<script setup>
import { useFavouriteCharactersStore } from './../../stores/FavouriteCharactersStore';

const storeFav = useFavouriteCharactersStore()
</script>

<template>
    
    <button type="button" @click="storeFav.openClosePopup()">ADD HERO</button>

</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

button {
    font-family: 'Press Start 2P';
    border-radius: 10px;
    background-color: black;
    color: white;
    padding: 10px;
}


</style>