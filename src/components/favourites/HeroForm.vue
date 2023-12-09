<script setup>
import Inputs from './Inputs.vue';
import Photo from './Photo.vue';
import UploadPhotoButton from './UploadPhotoButton.vue'
</script>

<template>
    <form action="submit">
        <Photo />
        <UploadPhotoButton />
        <Inputs />
    </form>
</template>

<style lang="scss" scoped>

form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

</style>