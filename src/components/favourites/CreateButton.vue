<script setup>
import { useFavouriteCharactersStore } from '../../stores/FavouriteCharactersStore';
import { useNewCharacterStore } from '../../stores/NewCharacterStore';

let store = useNewCharacterStore()
let storeFav = useFavouriteCharactersStore()

function pushNewToFavourites() {
    storeFav.favouriteCharacters.push(store.newCharacter)
}
</script>

<template>
    <button type="button" @click="store.createNewCharacter(), pushNewToFavourites(), storeFav.openClosePopup()">CREATE</button>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond&family=Space+Grotesk&display=swap');

    button {
        font-family: 'Space Grotesk', serif;
        font-size: 2.5vmax;
        background-color: white;
        padding: 0.5vmax;
        width: 25%;
        border-radius: 10px;
        position: absolute;
    }

    @media only screen and (min-width: 768px) {
        button {
        
        font-size: 1.5vmax;
        padding: 0.5vmax;
        width: 12%;
        border-radius: 10px;
    }
}
</style>