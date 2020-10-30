<template>
    <div id="app">
        <SideBar />
        <div>
        <div id="nav">
            <router-link v-if="authenticated" to="/login" v-on:click.native="logout()" replace>Logout</router-link>
        </div>
        <router-view @authenticated="setAuthenticated" />
        </div>
    </div>
</template>

<script>
import SideBar from "../src/components/SideBar.vue";
export default {
    name: "App",
    components: {
        SideBar,
    },data() {
            return {
                authenticated: false,
                mockAccount: {
                    username: "sharmin",
                    password: "12345"
                }
            }
        },
         mounted() {
            if(!this.authenticated) {
                this.$router.replace({ name: "login" });
            }
        },
        methods: {
            setAuthenticated(status) {
                this.authenticated = status;
            },
            logout() {
                this.authenticated = false;
            }
        }
};
</script>

<style lang="scss">
#app {
    min-height: 700px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    background-color: #96b6c1;
}
#main_content {
    grid-column-start: 2;
    grid-column-end: 6;
}
</style>