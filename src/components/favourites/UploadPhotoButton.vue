<script setup>
import { useNewCharacterStore } from '../../stores/NewCharacterStore';

const newCharStore = useNewCharacterStore()

// let image = null

function doSomething(e) { 
  let image = e.target.files[0]
  let reader = new FileReader(); 
  reader.readAsDataURL(image);
  newCharStore.characterImage = reader
  console.log(newCharStore.characterImage)
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

</style>