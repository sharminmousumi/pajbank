<template>
    <div class="container">
        <div id="navbar">
            <div class="pajbank"><p>PAJONLINE BANK</p></div>
            <h1>Customer List</h1>
        </div>
        <div id="Json" v-for="Customer in ApiData" v-bind:key="Customer.id">
            <p><img :src="image" style="width: 150px; height:100px"/></p>
            <p id="id">ID:{{ Customer.id }}</p>
            <p id="Name">Name:{{ Customer.name }}</p>
            <p id="age">AGE:{{ Customer.age }}</p>
            <p id="phone">Phone:{{ Customer.phone }}</p>
        </div>
       
    </div>
</template>

<script>
import axios from "axios";
import image from "../assets/image/customer.png";

export default {
    name: "List",
    data() {
        return {
             image: image,
            ApiData: null,

            options: {
                headers: {
                    "Content-Type": "application/json",
                },
            }
           
        };
    },
      components: {
        
    },
    created() {
        // fetch the data when the view is created and the data is
        // already being observed
        this.getData();
    },
  
    methods: {
         
        
       
        getData() {
            axios
                .get('db.json')
                .then(response => (this.ApiData = response.data))
                .catch(error => {
                    console.log(error)
                    this.errored = true
                })
      
        },
    },
};
</script>
<style lang="scss">
#Json{
    border:1px solid cadetblue;
    font-family:  'Times New Roman', serif;
    background-color: cadetblue;
    margin-bottom: 10px;    
    color: cornsilk;
    
}
#Json >p{
    padding-left: 300px;
    padding-right: 300px;
    
}
.pajbank{
  margin-left: 800px;
}
</style>
