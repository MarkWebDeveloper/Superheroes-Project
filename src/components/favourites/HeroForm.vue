<script setup>
import GoodRadio from './GoodRadio.vue';
import BadRadio from './BadRadio.vue';
import Inputs from './Inputs.vue';
import Photo from './Photo.vue';
import UploadPhotoButton from './UploadPhotoButton.vue'
import CreateButton from './CreateButton.vue';
</script>

<template>
    <form>
        <Photo />
        <UploadPhotoButton />
        <Inputs />
        <div id="radio-container">
            <GoodRadio />
            <CreateButton />
            <BadRadio />
        </div>
    </form>
</template>

<style lang="scss" scoped>

form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

#radio-container {
    width: 100vw;
    height: 3vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 2vmax 0 2vmax;
}

</style>