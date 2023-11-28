<script setup>

</script>
<template>
  <main class="CardContainer">
      <div class="CardContainerPhoto">
         <div class="ShPhoto" src=""></div>
          <button class="AddSh">
            <img src="" alt="">
          </button>
      </div>
      <div class="CardContainerData">
          <div class="Atributes">
            <h1 class="ShName"></h1>
            <p class="ShIntelligence">INTELLIGENCE</p>
            <p class="Power">POWER</p>
            <p class="Speed">SPEED</p>
        </div>
      </div>
    
  </main>
</template>
<style>
.CardContainer{
    display: flex;
    flex-wrap: nowrap;
    background-color: aqua;
    height: 100%;
  }
  .CardContainerPhoto{

  }
  .shPhoto{
    background: cover;
  }
</style>