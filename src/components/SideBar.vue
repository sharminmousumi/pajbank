<template>
    <div id="nav">
        <router-link to="/" class="nav_el">Home</router-link>
        <router-link to="/login" class="nav_el">Login</router-link>
        <router-link to="/Becomecustomer" class="nav_el">Become Customer</router-link>
        <router-link to="/Contactus" class="nav_el">Contact Us</router-link>
    </div>
</template>

<script>
export default {
    name: "SideBar",
};
</script>

<style scoped>
#nav {
    position: relative;
    background-color: #2c3e50;
    font-family: cursive;
    height: 100%;
    padding: 30px 30px 30px 0;
    grid-column-start: 1;
    grid-column-end: 2;
    display: flex;
    flex-direction: column;
}
div > * {
    text-decoration: none;
    color: black;
}
.nav_el {
    font-weight: bold;
    margin: 20px 50px 20px 0;
    background-color: #ffda7b;
    width: 200px;
    height: 70px;
    border-radius: 0 8px 8px 0;
    display: flex;
    align-items: center;
    justify-content: center;
}
.nav_el:hover {
    background-color: #ff937b;
}
#nav:last-child {
    margin-bottom: 20px;
}
.router-link-exact-active {
    background-color: #ff937b;
}
</style>