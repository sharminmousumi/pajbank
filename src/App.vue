<template>
    <div id="app">
        <SideBar />
        <div>
        <div id="nav">
            <router-link v-if="authenticated" to="/login" v-on:click.native="logout()" replace>Logout</router-link>
        </div>
        <router-view @authenticated="setAuthenticated" />
        </div>
        <Footer/>
    </div>
</template>

<script>
import SideBar from "../src/components/SideBar.vue";
import Footer from "../src/components/Footer.vue";

export default {
    name: "App",
    components: {
        SideBar,Footer,
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


</style>