import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const user = reactive({
    username: 'admin',
    password: 'my-password',
    isAuthenticated: false
  })

  return { user }

  })
