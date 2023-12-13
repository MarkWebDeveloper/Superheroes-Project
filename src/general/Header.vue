<script setup>

import { ref } from "vue";
import { useAuthStore } from "../stores/user";
const store = useAuthStore();


const isLoggedIn = ref(false)

function login(){
    // let introducedUser = store.users.filter((user) => user.username == email.value && user.password == password.value)
    // store.users.

    for (let index = 0; index < store.users.length; index++) {
        if (store.users[index].isAuthenticated == true)  {
            isLoggedIn = true
        }
    }
}

</script>
    
<template>
    <header class="wrapper">

    <div id="headerContainer">

        <img src="/images/logo/logo-superheroes.png" alt="">

        <div class="headerLinkLogged" v-if="store.isLoggedIn">
            <RouterLink class="routerLink" to="/">HOME</RouterLink>
            <RouterLink class="routerLink" to="/favourites">FAVORITES</RouterLink>
            <RouterLink class="routerLink" to="/" @click="store.logout()">LOG OUT</RouterLink>
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
        align-items: center;

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
            height: 90%;
        }
    }
    @media only screen and (min-width: 768px){
        #headerContainer{
            img{
                margin-left: 3%;
            }
            .headerLink{
                margin-right: 3%;
            }
            .headerLinkLogged{
                margin-right: 3%;
            }
        }
    }

</style>