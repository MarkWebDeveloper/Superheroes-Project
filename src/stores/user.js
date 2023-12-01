import { ref, reactive, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('user', () => {

    const user = reactive (
        {
            username: "admin@gmail.com",
            password: "myPassword",
            isAuthenticated: false
        }

    )
    return { }
})  