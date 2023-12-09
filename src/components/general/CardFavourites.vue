<script setup>
import { useFavouriteCharactersStore } from '../../stores/FavouriteCharactersStore';
import { useApiCharactersStore } from '../../stores/ApiCharactersStore';
const props = defineProps({
  character: Object
})

const store = useApiCharactersStore()
const storeFav = useFavouriteCharactersStore()

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
  <div id="rating-cards-container">
    <div id="rating-remove-container">
      <form>
        <div id="clasification">
          <input id="radio1" type="radio" name="stars" value="1">
          <label for="radio1">★</label>
          <input id="radio2" type="radio" name="stars" value="2">
          <label for="radio2">★</label>
          <input id="radio3" type="radio" name="stars" value="3">
          <label for="radio3">★</label>
          <input id="radio4" type="radio" name="stars" value="4">
          <label for="radio4">★</label>
          <input id="radio5" type="radio" name="stars" value="5">
          <label for="radio5">★</label>
        </div>
      </form>
    </div>
    <div class="card" :class="{ hero: isHero }">

      <div class="card-photo-container">
        <img :src="character.image" class="card-img" alt="...">
        <button class="add-character" @click="storeFav.addCharacter(character)">
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
  </div>
</template>

<style scoped lang="scss">

#rating-cards-container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#rating-remove-container {
  height: 10%;
  width: 90%;
  display: flex;
  justify-content: space-between;
}

#clasification{

  direction: rtl;
  unicode-bidi: bidi-override;
  
  label{ 
    color:grey;
  }
  
  input[type = "radio"]{
     display:none;
  };

  label:hover{
    color:orange;
  }
  
  label:hover ~ label{
    color:orange;
  }

  input[type = "radio"]:checked ~ label{
    color:orange;
  }
}
.card {
  height: 90%;
  width: 90%;
  border-radius: 10px;
  background-color: #EE5454;
}

.hero {
  background-color: #5492EE;
}

.hidden {
  display: none;
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
  height: 12%;
}

.add-character {
  width: 3vmax;
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
  height: 22%;
}

  .add-character {
  width: 2vmax;
  margin-right: 0.3vmax;
  margin-top: 0.3vmax;
}

.character-attributes {
  font-size: 1vmax;
}
}
</style>