import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useFavouriteCharactersStore = defineStore('favCharacters', () => {

  let favouriteCharacters = reactive([])
  let isLoaded = ref(false)

  function addCharacter(char) {
    favouriteCharacters.push(char)
  }

  return { favouriteCharacters, isLoaded, addCharacter}
})