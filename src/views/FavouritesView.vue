<script setup>
import AddHero from '../components/favourites/AddHero.vue'
</script>

<template>
  <main>
    <div>
      <h1>FAVORITES</h1>
    </div>

    <AddHero />
  </main>
</template>
  
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

h1 {
  font-family: 'Press Start 2P';
  padding: 30px;
  text-align: center;
  font-size: 30px;
}

main {
  height: 90%;
  width: 100%;
  background-image: url("./images/background/black-and-white-background.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
  