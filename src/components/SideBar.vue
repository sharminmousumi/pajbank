<template><b-navbar
    toggleable="md"
    type="dark"
    variant="info" id="top">
    <b-navbar-brand id="daj">PAJ ONLINE BANK</b-navbar-brand>
    <b-navbar-nav id="Nav">
      
          <router-link to="/" class="nav_el">Home</router-link>
        <router-link to="/login" class="nav_el">Login</router-link>
        <router-link to="/Becomecustomer" class="nav_el">Become Customer</router-link>
        <router-link to="/Contactus" class="nav_el">Contact Us</router-link>
    </b-navbar-nav>
  </b-navbar>
 
</template>

<script>
export default {
    name: "SideBar",
};
</script>

<style scoped>
.nav_el{
  margin-right: 50px;
  text-decoration: none;
  color: white;
  font-size: 20px;
  padding: 10px;
  display:inline-block;
}
.nav_el:hover{
  color:rgb(0, 255, 149);
}


#Nav{
    margin-left: 150px;
    
    
}
#daj{
  color: black;
  text-decoration: none;
  color: white;
  font-size: 20px;
  padding: 10px;
  display:inline-block;
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 50px;
                    
}

#top{
margin-bottom: 50px;
}



</style>