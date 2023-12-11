<script setup>

</script>

<template>
    <label class="container">BAD
        <input type="radio" name="good-or-bad">
    </label>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

label {
    font-family: 'Press Start 2P';
    color: white;
    cursor: pointer;
    margin-left: auto;
}

input[type='radio'] { 
     transform: scale(2); 
 }

</style>