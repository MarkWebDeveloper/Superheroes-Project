<script setup>
const props = defineProps({
  character: Object
})

let isHero = true

const checkIfHero = () => {
  if (props.character.alignment == 'good') {
    isHero = true
  } else {
    isHero = false
  }
}

checkIfHero()
</script>

<template>
  <div class="card" :class="{ hero: isHero }">

    <div class="card-photo-container">
      <img :src="character.image" class="card-img" alt="...">
      <button class="add-character">
        <img src="/images/icons/add.webp" alt="add button image">
      </button>
    </div>

    <div class="card-data-container">
      <div class="character-name-container">
        <h1 class="character-name">{{ character.name }}</h1>
      </div>
      <div class="character-attributes">
        <p class="character-intelligence">RACE: {{ character.race }}</p>
        <p class="character-power">INTELLIGENCE: {{ character.intelligence }}</p>
        <p class="character-speed">POWER: {{ character.power }}</p>
      </div>
    </div>

  </div>
</template>

<style>
.card {
  height: 100%;
  width: 90%;
  border-radius: 10px;
  background-color: #EE5454;
}

.hero {
  background-color: #5492EE;
}

.card-photo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50%;
  border-bottom: 2px solid black;
  text-align: center;
}

.card-img {
  position: absolute;
  width: 14%;
}

.add-character {
  width: 20%;
  align-self: flex-start;
  margin-left: auto;
  margin-right: 1vmax;
  margin-top: 1vmax;
}

.card-data-container {
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  font-family: 'Space Grotesk', serif;
}

.character-name-container {
  height: 40%;
  display: flex;
  align-items: center;
}

.character-name {
  font-size: 1.5vh;
  word-wrap: break-word;
  text-transform: uppercase;
  font-family: 'Press Start 2P', sans-serif;
  overflow: auto;
  text-align: center;
}

.character-attributes {
  font-size: 1.5vmax;
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 10%
}

@media only screen and (min-width: 768px) {

  .card-img {
  width: 10%;
}

.add-character {
  width: 18%;
  align-self: flex-start;
  margin-left: auto;
  margin-right: 0.3vmax;
  margin-top: 0.3vmax;
}

  .character-name {
  font-size: 1.5vh;
  word-wrap: break-word;
  text-transform: uppercase;
  font-family: 'Press Start 2P', sans-serif;
  overflow: auto;
  text-align: center;
}

.character-attributes {
  font-size: 1vmax;
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 10%
}
}
</style>