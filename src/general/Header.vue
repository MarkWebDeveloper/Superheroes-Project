<script setup>

</script>
    
<template>
    <header class="wrapper">

        <nav>

            <img src="/images/logo/logo-superheroes.png" alt="">
            <RouterLink class="routerLink" to="/">HOME</RouterLink>
            <RouterLink class="routerLink" to="/login">LOG IN</RouterLink>
            <!-- <RouterLink to="/favourites">Favorites</RouterLink> -->

        </nav>

    </header>
</template>

<style lang="scss" scoped>

@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond&family=Space+Grotesk&display=swap');

    header {
        width: 100vw;
        height: 10vh;
    }

    nav {

        width: 100%;
        height: 100%;

        background-color: black;

        display: flex;
        justify-content: space-evenly;
        align-items: center;

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
                margin-right: 80%;
            }
        }
    }



</style>