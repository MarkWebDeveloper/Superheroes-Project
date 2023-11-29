import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('user', () => {

    const objectos = reactive (
        {
            username: "admin",
            password: "myPassword",
            isAuthenticated: true
        }

    )
    return { useAuthStore }
}) 