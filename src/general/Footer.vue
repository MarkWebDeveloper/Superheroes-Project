<script setup>

</script>

<template>

    <footer class="footer">

        <p>Copyright©2023</p>

        <div class="rrss">

            <a href="https://www.instagram.com/" target="_blank"><img src="/images/icons/instagram-white.png" alt="Instagram"></a>
            <a href="https://twitter.com/?lang=es" target="_blank"><img src="/images/icons/twitterx-white.png" alt="Twitter"></a>
            <a href="https://www.facebook.com/?locale=es_ES" target="_blank"><img src="/images/icons/facebook-white.png" alt="Facebook"></a>

        </div>
    </footer>

</template>

<style lang="scss" scoped>

@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond&family=Space+Grotesk&display=swap');

    .footer {

        display: none;
        
    }

@media only screen and (min-width: 768px) {
    .footer {
        background-color: black;
        height: 5vh;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .rrss {
            display: flex;
            justify-content:flex-end;
            margin-right: 3%;

            a {
                width: 7%;
                padding: 9px;
                transition: 300ms;
            }
        }
            a:hover{
                transform: scale(1.2);
            }

        p {
            color: white;
            font-size: 18px;
            margin-left: 3%;
            font-family:'Space Grotesk', serif;;
        }
    }
}
    
</style>