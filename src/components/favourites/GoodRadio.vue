<script setup>
import { useNewCharacterStore } from '../../stores/NewCharacterStore';

const newCharStore = useNewCharacterStore
</script>

<template>
    <label class="container">GOOD
        <input type="radio" checked="checked" name="good-or-bad">
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