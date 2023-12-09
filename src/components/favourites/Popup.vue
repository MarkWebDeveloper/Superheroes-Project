<script setup>
import { useFavouriteCharactersStore } from '../../stores/FavouriteCharactersStore';
import CloseButton from './CloseButton.vue';
import HeroForm from './HeroForm.vue';

const storeFav = useFavouriteCharactersStore()
</script>

<template>
    <div id="popup">
        <div id="close-container">
            <CloseButton />
        </div>

        <section id="form-section">
            <h1 id="title">CREATE YOUR OWN HERO</h1>

            <HeroForm />
        </section>
    </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond&family=Space+Grotesk&display=swap');

#popup {
    position: absolute;
    width: 100vw;
    height: 90vh;
    background-color: #1A1A1A;
    z-index: 99;
}

#close-container {
    display: flex;
    justify-content: flex-end;
    width: 100%;
}

#form-section {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

#title {
    color: white;
    font-family: 'Press Start 2P';
    margin-bottom: 8%;
}

form {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

</style>