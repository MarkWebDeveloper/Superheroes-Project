
<script setup>

    function search(event) {
        event.preventDefault();
        const query = document.getElementById("query").value;
        fetch(`https://akabab.github.io/superhero-api/api?q=${query}`)
        .then(response => response.json())
        .then(data => {
        // Mostrar los resultados en la página
        });
    }

</script>

<template>
    <form onsubmit="search(event)">
        <input type="text" placeholder="Search...">
        <button type="submit">Buscar</button>
    </form>
</template>

<style scoped>

    form {
    background-color: blue;
    display: flex;
    margin-left: 5%;
    margin-top: 20%;
    }

    input[type="text"] {
    background-color: black;
    text-decoration-color: floralwhite;
    padding: 3%;
    border: none;
    border-radius: 5px 0 0 5px;
    font-size: 16px;
    width: 200px;
    }
    
    button[type="submit"] {
    background-color: gray;
    color: red;
    border: none;
    border-radius: 0 5px 5px 0;
    padding: 5%;
    font-size: 16px;
    cursor: pointer;
    }

</style>