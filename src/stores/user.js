import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const users = defineStore('user', () => {

    const objectos = reactive (
        {
            username: "admin",
            password: "myPassword",
            isAuthenticated: false
        }

    )
    return { objectos }
})