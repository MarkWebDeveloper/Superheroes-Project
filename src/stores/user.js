import { ref, reactive} from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('user', () => {

    const users = reactive ([
        {
            name: '',
            username: 'admin@gmail.com',
            password: 'myPassword',
            isAuthenticated: false
        },
        

    ]);

    const addUser = (newUser) => {
        users.push(newUser);
    };



    return { users, addUser}
})  