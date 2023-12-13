<script setup>
import { useNewCharacterStore } from '../../stores/NewCharacterStore';

const newCharStore = useNewCharacterStore()

// let image = null

function doSomething(e) { 
  let imageObject = e.target.files[0]
  let imageUrl = URL.createObjectURL(imageObject)
  newCharStore.characterImage = imageUrl
}

// imgData = createBase64Image(img);
// localStorage.setItem("imgData", imgData);

</script>

<template>
    <form action="submit">
        <label for="upload-file" id="upload-photo">UPLOAD PHOTO
            <input type="file" ref="file" id="upload-file" accept="image/gif, 
    image/jpeg, image/png" hidden @change="doSomething" />
        </label>
    </form>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond&family=Space+Grotesk&display=swap');

#upload-photo {
    background-color: white;
    padding: 2%;
    border-radius: 10px;
    font-family: 'Space Grotesk', serif;
    margin-bottom: 10%;
}

@media only screen and (min-width: 768px) {
    #upload-photo {
    padding: 0.5%;
    border-radius: 10px;
    margin-bottom: 2%;
}
}

</style>