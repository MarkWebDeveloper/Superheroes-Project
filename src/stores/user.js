import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const user = defineStore('users', () => {

    const objectos = reactive ([
        {
            username: "",
            password: "",
            isAuthenticated: true
        },

        {
            name: "",
            isPresent: false
        },
    ])
    return { objectos }
})