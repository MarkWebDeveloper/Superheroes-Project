<script setup>

</script>

<template>

    <div class="footer">

        <p>Copyright©2023</p>

        <div class="rrss">

            <img src="/images/icons/instagram.png" alt="">
            <img src="/images/icons/twitter.png" alt="">
            <img src="/images/icons/facebook.png" alt="">

        </div>
    </div>

</template>

<style lang="scss" scoped>

@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond&family=Space+Grotesk&display=swap');

    .footer {

        display: none;
        
    }

@media only screen and (min-width: 768px) {
    .footer {
        background-color: black;

        display: flex;
        justify-content: center;
        align-items: center;

        .rrss {
            display: flex;
            justify-content: flex-end;
            margin-right: 5px;

            img {
                width: 3%;
                padding: 9px;
            }
        }

        p {
            color: white;
            font-size: 20px;
            margin-left: 10px;
            font-family: 'Cormorant Garamond', serif;
        }
    }
}
    
</style>