
<script>
    function buscarPorNombre(name, character) {
        for (let i = 0; i < character.length; i++) {
            if (character[i].getName() === name) {
                return character[i];
            }
        }
        return null;
    }

    function search(event) {
        event.preventDefault();
        const button = document.getElementById("button-search");
        button.addEventListener("click", () => {
            const input = document.querySelector("input[type='text']");
            const characters = ["Luke Skywalker", "Darth Vader", "Yoda", "Obi-Wan Kenobi"];
            const character = buscarPorNombre(input.value, character);
            if (character) {
                alert(`El personaje encontrado es: ${character}`);
            } else {
                alert("Personaje no encontrado.");
            }
        });
    }
    
</script>

<template>
    <form>
        <input type="text" placeholder="Search...">
        <button id="button-search" type="submit">Buscar</button>
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