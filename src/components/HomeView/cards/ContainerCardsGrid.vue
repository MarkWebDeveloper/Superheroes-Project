<script setup>
    
</script>

<template>
    <div class="container">
        <div class="card1"></div>
        <div class="card2"></div>
        <div class="card3"></div>
        <div class="card4"></div>
        <div class="card5"></div>
        <div class="card6"></div>
        <div class="card7"></div>
        <div class="card8"></div>
        <div class="card9"></div>
        <div class="card10"></div>
        </div>
</template>

<style scoped lang="scss">

.container {
    display: grid;
    height: 70%;
    width: auto;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    gap: 2% 2%;
    grid-auto-flow: row;
    justify-items: center;
    grid-template-areas:
    "area1 area2 area3 area4 area5"
    "area6 area7 area8 area9 area10";
}

    .card1 {
        background: green;
        background-size: 100% 100%; 
        border: rgb(2, 0, 0) 2px solid;
        grid-area: area1;
    }

    .card2 {
        background: red;
        background-size: 100% 100%; 
        border: rgb(2, 0, 0) 2px solid;
        grid-area: area2;
    }

    .card3 {
        background: purple;
        background-size: 100% 100%; 
        border: rgb(2, 0, 0) 2px solid;
        grid-area: area3;
    }

    .card4 {
        background: blue;
        background-size: 100% 100%; 
        border: rgb(2, 0, 0) 2px solid;
        grid-area: area4;
    }

    .card5 {
        background: powderblue;
        background-size: 100% 100%; 
        border: rgb(2, 0, 0) 2px solid;
        grid-area: area5;
    }

    .card6 {
        background: turquoise;
        background-size: 100% 100%; 
        border: rgb(2, 0, 0) 2px solid;
        grid-area: area6;
    }

    .card7 {
        background: azure;
        background-size: 100% 100%; 
        border: rgb(2, 0, 0) 2px solid;
        grid-area: area7;
    }

    .card8 {
        background: greenyellow;
        background-size: 100% 100%; 
        border: rgb(2, 0, 0) 2px solid;
        grid-area: area8;
    }

    .card9 {
        background: blueviolet;
        background-size: 100% 100%; 
        border: rgb(2, 0, 0) 2px solid;
        grid-area: area9;
    }

    .card10 {
        background: yellow;
        background-size: 100% 100%; 
        border: rgb(2, 0, 0) 2px solid;
        grid-area: area10;
    }



</style>