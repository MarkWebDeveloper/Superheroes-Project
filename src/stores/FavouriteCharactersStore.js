import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useFavouriteCharactersStore = defineStore('favCharacters', () => {

  let favouriteCharacters = reactive([])
  let popupOpened = ref(false)

  function addCharacter(char) {
    favouriteCharacters.push(char)
  }

  function openClosePopup() {
    if (popupOpened.value == false) {
      popupOpened.value = true
    } else {
      popupOpened.value = false
    }
  }

  return { favouriteCharacters, openClosePopup, popupOpened, addCharacter}
})