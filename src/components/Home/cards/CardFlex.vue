<script setup>

</script>
<template>
  <main class="Card">
      <div class="CardPhotoContainer">
         <div class="CharacterPhoto" src=""></div>
          <button class="AddCharacter">
            <img src="" alt="">
          </button>
      </div>
      <div class="CardDataContainer">
          <div class="Atributes">
            <h1 class="CharacterName"></h1>
            <p class="CharacterIntelligence">INTELLIGENCE</p>
            <p class="CharacterPower">POWER</p>
            <p class="CharacterSpeed">SPEED</p>
        </div>
      </div>
    
  </main>
</template>
<style>
.Card{
    display: flex;
    flex-wrap: nowrap;
    background-color: aqua;
    height: 100%;
  }
  
  .shPhoto{
    background: cover;
  }
</style>