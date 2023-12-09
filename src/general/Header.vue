<script setup>

import { ref } from "vue";


const isLoggedIn = ref(false)

/* const user =  reactive({
    username: 'Vero',
    isLoggedIn: true
}) */

</script>
    
<template>
    <header class="wrapper">

    <div id="headerContainer">

        <img src="/images/logo/logo-superheroes.png" alt="">

        <div class="headerLinkLogged" v-if="isLoggedIn">
            <RouterLink class="routerLink" to="/">HOME</RouterLink>
            <RouterLink class="routerLink" to="/favourites">FAVORITES</RouterLink>
            <RouterLink class="routerLink" to="/login">LOG OUT</RouterLink>
        </div>

        <div class="headerLink" v-else>
            <RouterLink class="routerLink" to="/">HOME</RouterLink>
            <RouterLink class="routerLink" to="/login">LOG IN</RouterLink>
        </div>

    </div>

    </header>
</template>

<style lang="scss" scoped>

@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond&family=Space+Grotesk&display=swap');

    #headerContainer {

        width: 100%;
        height: 10vh;

        background-color: black;

        display: flex;
        justify-content: space-between;
        flex-direction: row;
        align-content: center;

        font-family: 'Space Grotesk', serif;
        color: white;
        width: 100%;

        .headerLink {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            margin-right: 15px;
            gap: 1rem;
        }

        .headerLinkLogged {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            margin-right: 15px;
            gap: 1rem;
        }

        .routerLink {
            text-decoration: none;
            color: white;
        }

        img {
            height: 100%;
        }
    }

    @media only screen and (min-width: 768px) {

        #headerContainer {

            img {
                width: 15%;
            }
        }
    }

</style>