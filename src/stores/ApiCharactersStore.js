import { ref, reactive, computed } from 'vue'
import { defineStore } from 'pinia'
import CharactersRepository from "./../components/repositories/CharactersRepo.js";
import CharactersService from "./../services/CharactersService.js";

export const useApiCharactersStore = defineStore('apiCharacters', () => {

  const repository = new CharactersRepository
  const service = new CharactersService(repository) 

  const index = ref(0)
  let characters = reactive([])
  let isLoaded = ref(false)
  const newIndex = computed(() => index.value + 1)

//   onBeforeMount( async () => {
//     characters = await service.index()
//     isLoaded = true
// })

  return { characters, isLoaded, repository, service, index, newIndex }
})