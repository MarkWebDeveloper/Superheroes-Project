<script setup>
import { useNewCharacterStore } from '../../stores/NewCharacterStore';

const newCharStore = useNewCharacterStore()
</script>

<template>
    <label class="container" for="bad-radio">BAD
        <input type="radio" id="bad-radio" value="bad" name="good-or-bad" v-model="newCharStore.characterAlignment">
    </label>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

label {
    font-family: 'Press Start 2P';
    color: white;
    cursor: pointer;
    margin-left: auto;
}

input[type='radio'] { 
     transform: scale(2); 
 }

 @media only screen and (min-width: 768px) {
    label {
        font-size: 1vmax;
    }

    input[type='radio'] {
        transform: scale(1.5);
    }
}

</style>