<script setup>
import { useApiCharactersStore } from '../../stores/ApiCharactersStore';

const store = useApiCharactersStore()

function searchCharacters(name){
    if (name != '') {
        const firstLetter = name.charAt(0)
        const remainingLetters = name.slice(1)
        const capitalizedName = firstLetter.toUpperCase() + remainingLetters.toLowerCase()
        let result = store.originalCharacters.filter((character) => character.name.includes(capitalizedName))
        store.characters = result
    } else {
        store.characters = []
        store.characters = store.originalCharacters
    }
}

</script>

<template>
    <div>
        <input type="text" placeholder="Search" v-model="store.searchedCharacterName" @keyup.enter="searchCharacters(store.searchedCharacterName)">
        <button type="button" @click="searchCharacters(store.searchedCharacterName)"><img src="/images/icons/search.png" alt=""></button>
    </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond&family=Space+Grotesk&display=swap');

div {
    width: 35vw;
    height: 4vh;
    background-color: black;
    border-radius: 10px;

}

input {
    width: 75%;
    height: 100%;
    padding-left: 5px;
    background-color: transparent;
    color: white;
    font-family: 'Space Grotesk', serif;
    border-radius: 10px;
    border-style: none;
}

img {
    height: 100%;
}

::placeholder {
    color: white;
    text-transform: uppercase;
    text-align: left;
}

button {
    width: 25%;
    color: white;
}

input:focus::placeholder {
  color: transparent;
}

@media only screen and (min-width: 768px) {
    div {
        display: none;
    }
}
</style>