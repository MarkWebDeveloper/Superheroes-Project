<script setup>

/* import { ref, computed } from "vue";  */

/* let showform = ref (false)  */



</script>

<template>

    
    <section id="form-mains" v-if="showform" >
        <div class="form-content">
            <div class="box">
                <h2>SIGN UP</h2>
                <form @submit="SignUp">

                    <div>
                        <input type="tex"  name="name" placeholder="Name" class="input-control">

                    </div>

                    <div>
                        <input type="email"  name="email" placeholder="Email" class="input-control">

                    </div>
                    
                    <div>
                        <input type="password" placeholder="Password" class="input-control">

                    </div>
                <button type="submit" class="btn">REGISTER</button>

                </form>
            </div>
        </div>
    </section>


</template>

<style lang="scss" scoped>

.form-mains {

    color: black;
    font-weight: 300;
    font-size: 16px;
    line-height: 1.5;
    overflow: hidden;
    min-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.form-content .box {
    border-color: black;
    border: 1px solid black;
    border-radius: 15px;
    padding: 50px;
    background:rgba(255, 255, 255, 0.444);
    
}

.form-content h2 {
    font-size: 30px;
    text-align: center;
    line-height: 1.2;
    color: black;
    font-weight: 500;
}

.form-content form {
    margin: 25px 0 20px;
} 


.form-content .input-control {
    display: flex;
    height: 45px;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.789);
    border: 1px solid black;
    text-align: center;
    font-weight: 300;
    font-size: 16px;
    margin-bottom: 16%;
}

a{
    text-decoration: none;
    font-weight: 500;
    color: white;
    border: 1px solid black ;
    border-radius: 16px ;
    font-weight: 300;
    padding: 5%;
    background: black;
    margin-left: 30%;

} 

.form-content .btn {
    height: 45px;
    width: 80%;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    border-radius: 25px;
    border: 1px solid black;
    background: black;
    color: white;
    margin-left: 10%;
    margin-top: 20%;

} 

</style>