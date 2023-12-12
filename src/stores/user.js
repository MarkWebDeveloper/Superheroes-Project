import { ref, reactive} from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('user', () => {

    let isLoggedIn = ref(false)

    const users = reactive ([
        {
            name: '',
            username: 'admin@gmail.com',
            password: 'myPassword',
            isAuthenticated: false
        }
    ]);

    const addUser = (newUser) => {
        users.push(newUser);
    };

function login(){
    
    for (let index = 0; index < users.length; index++) {
        if (users[index].isAuthenticated == true)  {
            this.isLoggedIn = true
        }
    }
}

    return { users, addUser, isLoggedIn, login}
})  