<script setup>

</script>
    
<template>

    <div class="wrapper">

    <nav>

        <img src="/images/logo/logo-superheroes.png" alt="">
        <RouterLink class="routerLink" to="/">HOME</RouterLink>
        <RouterLink class="routerLink" to="/login">LOG IN</RouterLink>
        <!-- <RouterLink to="/favourites">Favorites</RouterLink> -->

    </nav>

    </div>

</template>

<style lang="scss" scoped>

@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond&family=Space+Grotesk&display=swap');

    nav {

        background-color: black;

        display: flex;
        justify-content: space-evenly;
        align-items: center;
        gap: 5%;

        font-family: 'Cormorant Garamond', serif;
        color: white;
        padding: 10px;

        .routerLink {
            text-decoration: none;
            color: white;
        }

        img {
            width: 30%;
            margin-right: 30%;
        }
    }

    @media only screen and (min-width: 768px) {

        nav {

            font-size: 20px;
            
            img {
                width: 10%;
                margin-right: 1200px;
            }
        }
    }



</style>