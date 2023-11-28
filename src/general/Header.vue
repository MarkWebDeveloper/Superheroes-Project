<script setup>

import { ref } from "vue";


const isLoggedIn = ref(false)

/* const user =  reactive({
    username: 'Vero',
    isLoggedIn: true
}) */

</script>
    
<template>

    <div class="wrapper">

    <nav>

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
        
    </nav>

    </div>

</template>

<style lang="scss" scoped>

@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond&family=Space+Grotesk&display=swap');

    nav {

        background-color: black;

        display: flex;
        justify-content: space-around;
        flex-direction: row;
        align-content: center;

        font-family: 'Cormorant Garamond', serif;
        color: white;
        padding: 10px;

        .headerLink {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            width: 50%;
        }

        .headerLinkLogged {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            width: 50rem;
        }

        .routerLink {
            text-decoration: none;
            color: white;
        }

        img {
            width: 40%;
            margin-right: 30%;
        }
    }

    @media only screen and (min-width: 768px) {

        nav {

            font-size: 20px;

            .headerLink {
                width: 10%;
            }

            .headerLinkLogged {
                font-size: 30px;
            }
            
            img {
                width: 10%;
                margin-right: 1200px;
            }
        }
    }



</style>