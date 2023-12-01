import { ref, reactive, computed } from 'vue'
import { defineStore } from 'pinia'
import CharactersRepository from "./../components/repositories/CharactersRepo.js";
import CharactersService from "./../services/CharactersService.js";

export const useApiCharactersStore = defineStore('apiCharacters', () => {

  const repository = new CharactersRepository
  const service = new CharactersService(repository)

  let characters = reactive([])
  let isLoaded = ref(false)

  async function setCharacters() {
    this.characters = await service.index()
    isLoaded.value = true
  }

  return { characters, isLoaded, setCharacters }
})