import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useShowHideForm = defineStore("showHideForm", () => {
  let showLogin = ref(true);
  let showSignUp = ref(false);

  function showForm() {
    showLogin.value = false;
    showSignUp.value = true;
  }

  return { showLogin, showSignUp, showForm };
});