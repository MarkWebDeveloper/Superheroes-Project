import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useNewCharacterStore = defineStore('newCharacter', () => {
  let characterName = ref('')
  let characterRace = ref('')
  let characterIntelligence = ref('')
  let characterPower = ref('')
  let characterAlignment = ref('')
  let characterImage = ref()

  let newCharacter = reactive({
    name: '',
    race: '',
    intelligence: '',
    power: 0,
    alignment: 0,
    image: '',
    isBeingEdited: false
  })

  function createNewCharacter() {
    newCharacter.name = characterName.value
    newCharacter.race = characterRace.value
    newCharacter.intelligence = characterIntelligence.value
    newCharacter.power = characterPower.value
    newCharacter.alignment = characterAlignment.value
    newCharacter.image = characterImage.value
  }

  function increment() {
    count.value++
  }

  return { characterName, characterRace, characterIntelligence, characterPower, characterAlignment, characterImage, createNewCharacter, newCharacter }
})
