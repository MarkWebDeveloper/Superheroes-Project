<script setup>
import LoginForm from '../components/login/LoginForm.vue';
import SignUp from '../components/login/SignUp.vue';
import { useShowHideForm } from '../stores/showForm';



const store = useShowHideForm()
</script>

<template>
  <main>
    
    <LoginForm v-if="store.showLogin"></LoginForm>
    <SignUp v-if="store.showSignUp"></SignUp>

  </main>
</template>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond&family=Space+Grotesk&display=swap');




main{
    display: flex;
    justify-content: center;
    font-size: 16px;
    height: 100vh;
    width: 100%;
    background-image: url(/images/background/background-pic-login.webp);
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.9;
    font-family: 'Cormorant Garamond', serif;
font-family: 'Space Grotesk', sans-serif;
}
</style>
