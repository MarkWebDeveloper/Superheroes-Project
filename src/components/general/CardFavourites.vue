<script setup>
import { useFavouriteCharactersStore } from '../../stores/FavouriteCharactersStore';
import { ref } from 'vue';
const props = defineProps({
  character: Object,
  index: Number
})

const storeFav = useFavouriteCharactersStore()
let newName = ref(props.character.name)
let newRace = ref(props.character.race)
let newIntelligence = ref(props.character.intelligence)
let newPower = ref(props.character.power)

const toggleEditHero = () => {
  if (props.character.isBeingEdited == false) {
    props.character.isBeingEdited = true
  } else {
    props.character.isBeingEdited = false
    props.character.name = newName
    props.character.race = newRace
    props.character.intelligence = newIntelligence
    props.character.power = newPower
  }
}

const closeEditing = () => {
  props.character.isBeingEdited = false
}

const removeCharacter = () => {
  storeFav.favouriteCharacters.splice(props.index, 1)
}
</script>

<template>
  <div id="rating-cards-container">
    <div id="rating-remove-container">
      <button type="button" class="remove-character" @click="removeCharacter"><img class="remove-img" src="/images/icons/no.png" alt=""></button>
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
    <div class="card" :class="{ hero: character.alignment == 'good' }">

      <div class="card-photo-container">
        <img :src="character.image" class="card-img" alt="...">
        <button class="edit-character-button" @click="toggleEditHero">
          <img src="/images/icons/edit-white.png" alt="edit button image" v-if="!character.isBeingEdited">
          <img src="/images/icons/done-editing-white.png" alt="done editing button image" v-if="character.isBeingEdited">
        </button>
      </div>

      <div class="card-data-container">
          <div class="character-name-container">
            <h1 class="character-name" v-if="!character.isBeingEdited">{{ character.name }}</h1>
            <input type="text" name="hero-name" id="hero-name-input" v-if="character.isBeingEdited" v-model="newName" @keyup.enter="toggleEditHero" @keyup.esc="closeEditing">
          </div>
          <div class="character-attributes">
            <p class="character-intelligence" v-if="!character.isBeingEdited">RACE: {{ character.race }}</p>
            <div class="input-container" v-if="character.isBeingEdited">
              <label for="race-input">RACE:</label>
              <input type="text" id="race-input" class="input" v-model="newRace" @keyup.enter="toggleEditHero" @keyup.esc="closeEditing">
            </div>
            <p class="character-power" v-if="!character.isBeingEdited">INTELLIGENCE: {{ character.intelligence }}</p>
            <div class="input-container" v-if="character.isBeingEdited">
              <label for="intelligence-input">INTELLIGENCE:</label>
              <input type="text" id="intelligence-input" class="input" v-model="newIntelligence" @keyup.enter="toggleEditHero" @keyup.esc="closeEditing">
            </div>
            <p class="character-speed" v-if="!character.isBeingEdited">POWER: {{ character.power }}</p>
            <div class="input-container" v-if="character.isBeingEdited">
              <label for="power-input">POWER:</label>
              <input type="text" id="power-input" class="input" v-model="newPower" @keyup.enter="toggleEditHero" @keyup.esc="closeEditing"> 
            </div>
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
  height: 3vmax;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

form {
  align-self: flex-end;
}

#clasification{
  direction: rtl;
  unicode-bidi: bidi-override;
  
  
  label{ 
    color:grey;
    transform:scale(1.1);
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

.remove-img {
  height: 3.5vmax;
  transition: 300ms;
}
.remove-img:hover{
    transform:scale(1.1);
}
.card {
  height: 90%;
  width: 90%;
  border-radius: 10px;
  background-color: #EE5454;
}

.card:hover {
 
  .card-img {
    filter: brightness(120%);
    filter: contrast(120%);
}
  color: rgb(255, 225, 56);
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
  width: 100%;
  border-bottom: 2px solid black;
  text-align: center;
  background: url(/images/background/stellar.gif);
  background-position: fixed;
  
}
.card-photo-container{
    border-radius: 10px;
  }
.card-img {
  position: absolute;
  height: 18%;
  border-radius: 5px;
}

.edit-character-button {
  width: 3vmax;
  align-self: flex-start;
  margin-left: auto;
  margin-right: 1vmax;
  margin-top: 1vmax;
  transition: 300ms;
}
.edit-character-button:hover{
 transform:scale(1.1);
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
  font-size: 1.5vmax;
  word-wrap: break-word;
  text-transform: uppercase;
  font-family: 'Press Start 2P', sans-serif;
  overflow: auto;
  text-align: center;
}

#hero-name-input {
  width: 100%;
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

.input-container {
  display: flex;
  width: 100%;
}

.input {
  width: 100%;
}

@media only screen and (min-width: 768px) {

  .character-name {
  font-size: 1vmax;
}

  .card-img {
  height: 40%;
}

  .edit-character-button {
  width: 3vmax;
  margin-right: 0.3vmax;
  margin-top: 0.3vmax;
}

.character-attributes {
  font-size: 1vmax;
}
}
</style>