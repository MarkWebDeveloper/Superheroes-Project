import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('user', () => {

    let isLoggedIn = ref(false)

    const users = reactive([
        {
            name: '',
            username: 'admin@gmail.com',
            password: 'asdf',
            isAuthenticated: false
        }
    ]);

    const addUser = (newUser) => {
        users.push(newUser);
    };

    function checkIfLoggedIn () {
        if (this.isLoggedIn == false) {
            alert("Log in first in order to add characters to favourites")
        } else {
            return
        }
    }

    function changeLoggedState() {

        for (let index = 0; index < users.length; index++) {
            if (users[index].isAuthenticated == true) {
                this.isLoggedIn = true
            }
        }
    }

    function logout() {
        for (let index = 0; index < users.length; index++) {

            users[index].isAuthenticated = false
            this.isLoggedIn = false
        }
    }

        return { users, addUser, isLoggedIn, changeLoggedState, logout, checkIfLoggedIn }
    })  