<template>
    <div class="container">
        <div id="navbar" >
            <div class="pajbank">PAJONLINE BANK</div>
            <h1>Customer List</h1>
        </div>
        
       
        <div id="Json" class="container" v-for="Customer in ApiData" v-bind:key="Customer.id">
            <p><img :src="image" style="width: 150px; height:100px"/></p>
            <p id="id">ID: {{ Customer.id }}</p>
            <p id="Name">Name: {{ Customer.name}}</p>
            <p id="email">Email:{{ Customer.email}}</p>
            <p id="balance">Balance: {{ Customer.balance }} sek</p>
            <p id="currency">Phone: {{ Customer.phone}}</p>
            <button id="deletebtn" v-on:click="deleteBtn(Customer.id)" class="btn btn-success">Delete</button>
            
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
            
            ifCustomer:false,
            enable:false,
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
    
    created(){
        this.getData();
    },
  
  
    methods: { 
        getData() {
            axios
                .get('http://localhost:3000/accounts')
                .then(response => (this.ApiData = response.data))
                .catch(error => {
                    console.log(error)
                    this.errored = true
                })
      
        },
        deleteBtn(id){
       axios
      .delete('http://localhost:3000/accounts/'+id)
      .then(response => {(this.ApiData = response.data)
      if(response!==null){
        this.getData();
      }
      })
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
    border:1px solid  #f0b45a;
    font-family:  'Times New Roman', serif;
    background-color:  #f0b45a;
    margin-bottom: 10px;    
    color: cornsilk;
    
}
#Json >p{
    padding-left: 300px;
    padding-right: 300px;
    
}
.pajbank{
  margin-left: 800px;
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: bold;
}
#Json > button{
    margin-left: 300px;
    
}
#deletebtn{
    width: 200px;
}
#navbar > h1{
    margin-left: 300px;
}
</style>
