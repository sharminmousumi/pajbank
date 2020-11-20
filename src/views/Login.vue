<template>
    <div id="login">
        
        
        <h1>Login</h1>
        <div class="log">
        <input type="text" name="username" v-model="input.username" placeholder="Username" /><br>
        <input type="password" name="password" v-model="input.password" placeholder="Password" /><br>
        <button type="button" class="btn btn-success" v-on:click="login()">Login</button>
        </div>
   
    </div>
    
</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {
                input: {
                    username: "",
                    password: ""
                }
            }
        },
        methods: {
            login() {
                if(this.input.username != "" && this.input.password != "") {
                    if(this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password) {
                        this.$emit("authenticated", true);
                        this.$router.replace({ name: "List" });
                    } else {
                        console.log("The username and / or password is incorrect");
                    }
                } else {
                    console.log("A username and password must be present");
                }
            }
        }
    }
</script>

<style lang="scss">
.pajbank{
  margin-left: 800px;
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: bold;
}
.log{
text-align: center;
}
#login >h1{
    text-align: center;
}
.log >input{
    padding: 5px;
    margin-bottom: 10px;
    background-color:white;
}
.log >button{
    padding: 5px;
    width: 100px;
}
    
</style>