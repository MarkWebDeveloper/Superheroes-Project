import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useFavouriteCharactersStore = defineStore('favCharacters', () => {

  let favouriteCharacters = reactive([{"name":"A-Bomb","image":"https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/1-a-bomb.jpg","alignment":"good","race":"Human","intelligence":38,"power":24},{"name":"Abe Sapien","image":"https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/2-abe-sapien.jpg","alignment":"good","race":"Icthyo Sapien","intelligence":88,"power":100},{"name":"Abin Sur","image":"https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/3-abin-sur.jpg","alignment":"good","race":"Ungaran","intelligence":50,"power":99},{"name":"Abomination","image":"https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/4-abomination.jpg","alignment":"bad","race":"Human / Radiation","intelligence":63,"power":62},{"name":"Abraxas","image":"https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/5-abraxas.jpg","alignment":"bad","race":"Cosmic Entity","intelligence":88,"power":100}])
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