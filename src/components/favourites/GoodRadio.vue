<script setup>
import { useNewCharacterStore } from '../../stores/NewCharacterStore';

const newCharStore = useNewCharacterStore
newCharStore.characterAlignment = 'Good'
</script>

<template>
    <label class="container" for="good-radio">GOOD
        <input type="radio" id="good-radio" value="Good" name="good-or-bad" checked v-model="newCharStore.characterAlignment">
    </label>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

label {
    font-family: 'Press Start 2P';
    color: white;
    cursor: pointer;
}

input[type='radio'] { 
     transform: scale(2); 
 }

</style>