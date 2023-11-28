<script setup>

  import { ref, reactive } from 'vue'
  import {useRoute, useRouter} from 'vue-router'
  import {useAuthStore} from '@/stores/auth.js'

  const username = ref('')
  const password = ref('')

  const route = useRoute()
  const router = useRouter()

  const store = useAuthStore()

  function login() {
    if (username.value == store.user.username) {
      store.user.isAuthenticated = true

      const redirectPath = route.query.redirect || '/private'
      router.push(redirectPath)

    }
  }

</script>

<template>
  <main>
    <form @submit.prevent="login">
      <label for="username">Username</label>
      <input type="text" name="username" id="username" v-model="username">

      <label for="password">password</label>
      <input type="password" name="password" id="password" v-model="password">

      <button type="submit">Submit</button>
    </form>
  </main>
</template>

<style scoped>

</style>
