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

<<<<<<< HEAD
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
=======
        <nav>

            <img src="/images/logo/logo-superheroes.png" alt="">
            <RouterLink class="routerLink" to="/">HOME</RouterLink>
            <RouterLink class="routerLink" to="/login">LOG IN</RouterLink>
            <!-- <RouterLink to="/favourites">Favorites</RouterLink> -->

        </nav>
>>>>>>> feature/home-page

    </header>
</template>

<style lang="scss" scoped>

@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond&family=Space+Grotesk&display=swap');

<<<<<<< HEAD
    #headerContainer {
=======
    header {
        width: 100vw;
        height: 10vh;
    }

    nav {
>>>>>>> feature/home-page

        width: 100%;
        height: 100%;

        background-color: black;

        display: flex;
<<<<<<< HEAD
        justify-content: space-between;
        flex-direction: row;
        align-content: center;
=======
        justify-content: space-evenly;
        align-items: center;
>>>>>>> feature/home-page

        font-family: 'Cormorant Garamond', serif;
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
            width: 40%;
        }
    }

    @media only screen and (min-width: 768px) {

        #headerContainer {

            img {
<<<<<<< HEAD
                width: 15%;
=======
                width: 10%;
                margin-right: 80%;
>>>>>>> feature/home-page
            }
        }
    }

</style>