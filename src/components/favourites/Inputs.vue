<script setup>
import { ref } from 'vue'
import { useNewCharacterStore } from '../../stores/NewCharacterStore';

const newCharStore = useNewCharacterStore
</script>

<template>
    <div id="inputs-container">

        <div class="input-wrapper">
            <label id="name-label" for="name-input">NAME</label>
            <input type="text" name="name" id="name-input" autocomplete="Unknown" v-model="newCharStore.characterName">
        </div>

        <div class="input-wrapper">
            <label id="name-label" for="race-input">RACE</label>
            <input type="text" name="race" id="race-input" autocomplete="Unknown" v-model="newCharStore.characterRace">
        </div>

        <div class="input-wrapper">
            <label id="name-label" for="power-input">POWER</label>
            <input type="text" name="name" id="intelligence-input" autocomplete="Unknown" v-model="newCharStore.characterIntelligence">
        </div>

        <div class="input-wrapper">
            <label id="name-label" for="intelligence-input">INTELLIGENCE</label>
            <input type="text" name="name" id="power-input" autocomplete="Unknown" v-model="newCharStore.characterPower">
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond&family=Space+Grotesk&display=swap');

#inputs-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

label {
    font-size: 1.5vmax;
    color: white;
    font-family: 'Press Start 2P';
    margin-bottom: 5%;
}

input {
    width: 90%;
    font-size: 2.5vmax;
    margin-bottom: 7%;
    font-family: 'Space Grotesk', serif;
}

.input-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

@media only screen and (min-width: 768px) {
    label {
        font-size: 1vmax;
        margin-bottom: 2%;
    }

    input {
        width: 90%;
        font-size: 1vmax;
        margin-bottom: 2%;
    }

    #inputs-container {
        width: 100%;
        height: 30vh;
        flex-direction: row;
        align-items: center;
        flex-wrap: wrap;
    }

    .input-wrapper {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
}
</style>