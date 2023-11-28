import { ref, reactive, onBeforeMount } from 'vue'
import { defineStore } from 'pinia'
import CharactersRepository from "./../components/repositories/CharactersRepo.js";
import CharactersService from "./../services/CharactersService.js";

export const useApiCharactersStore = defineStore('apiCharacters', () => {
  let characters = reactive([])
  let isLoaded = ref(false)

  const repository = new CharactersRepository
  const service = new CharactersService(repository)

  async function callApi() {
    characters = await service.index()
    isLoaded.value = true
    console.log(characters)
  }

  onBeforeMount(callApi())

  return { characters, isLoaded, callApi }
})