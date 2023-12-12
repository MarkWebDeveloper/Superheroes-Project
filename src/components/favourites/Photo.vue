<script setup>

</script>

<template>
    <div id="photo-div"></div>
</template>

<style lang="scss" scoped>

#photo-div {
    height: 15vh;
    width: 23%;
    background-image: url(/images/icons/staff-placeholder-male.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    margin-bottom: 10%;
}

@media only screen and (min-width: 768px) {
    #photo-div {
    margin-bottom: 2%;
}
}

</style>