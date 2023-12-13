<script setup>
import { useFavouriteCharactersStore } from '../../stores/FavouriteCharactersStore';

const storeFav = useFavouriteCharactersStore()
</script>

<template>
    <button id="close-button" type="button" @click="storeFav.openClosePopup()"><img id="close-img" src="/images/icons/close-button.png" alt=""></button>
</template>

<style lang="scss" scoped>
#close-button {
    height: 4vmax;
    margin: 4%;
}

#close-img {
    height: 100%;
}

@media only screen and (min-width: 768px) {
    #close-button {
        height: 2vmax;
        margin: 1.5%;
    }
}
</style>