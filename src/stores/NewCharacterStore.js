import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useNewCharacterStore = defineStore('newCharacter', () => {
  let characterName = ref('')
  let characterRace = ref('')
  let characterIntelligence = ref('')
  let characterPower = ref('')
  let characterAlignment = ref('')

  function increment() {
    count.value++
  }

  return { characterName, characterRace, characterIntelligence, characterPower, characterAlignment }
})
