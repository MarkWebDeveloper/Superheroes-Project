import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const users = defineStore('users', () => {

    const objectos = reactive (
        {
            username: "admin",
            password: "myPassword",
            isAuthenticated: true
        }

    )
    return { objectos }
}) 