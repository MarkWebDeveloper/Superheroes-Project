<script setup>
import { useNewCharacterStore } from '../../stores/NewCharacterStore';

const newCharStore = useNewCharacterStore
    function create() {
        console.log(newCharStore.characterAlignment)
    }
</script>

<template>
    <button type="button" @click="create">CREATE</button>
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
</style>