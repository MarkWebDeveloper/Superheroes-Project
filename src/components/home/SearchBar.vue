<script setup>
import { reactive, ref } from 'vue';
import { useApiCharactersStore } from '../../stores/ApiCharactersStore';

const store = useApiCharactersStore()

function searchCharacters(name){
    if (name != '') {
        let result = store.characters.filter((character) => character.name.includes(name))
        store.characters = result
    } else {
        store.setCharacters()
    }
    
}

</script>

<template>
    <div>
        <input type="text" placeholder="Search" v-model="store.searchedCharacterName">
        <button type="button" @click="searchCharacters(store.searchedCharacterName)">S</button>
    </div>
</template>

<style lang="scss" scoped>
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond&family=Space+Grotesk&display=swap');

    div {
        width: 35vw;
        height: 100%;
        background-color: black;
        border-radius: 10px;

    }

    input {
        width: 75%;
        background-color: transparent;
        color: white;
        font-family: 'Space Grotesk', serif;
        border-radius: 10px;
        border-style: none;
    }

    ::placeholder {
        color: white;
        text-transform: uppercase;
        text-align: center
    }

    button {
        width: 25%;
        color: white;
    }
</style>