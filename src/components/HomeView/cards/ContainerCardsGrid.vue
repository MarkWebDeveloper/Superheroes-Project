<script setup>
    
</script>

<template>
    <div id ="container">
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        </div>
</template>

<style scoped lang="scss">




#container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
}

    .card {
        background: green;
        padding: 1rem;
        border: rgb(2, 0, 0) 2px solid;
    }

    /* Móviles en vertical */
    /*añadir a media, las cosas q quiero cambiar solamente, ej:ancho contenedor, no las cajitas*/

/*@media (min-width: 768px) {
}*/

@media only screen and (min-width: 768px) {
    #container {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
    }
}

</style>