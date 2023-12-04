import { ref, reactive} from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('user', () => {

    const users = reactive (
        {
            username: 'admin@gmail.com',
            password: 'myPassword',
            isAuthenticated: false
        },
        

    )
    return { users }
})  