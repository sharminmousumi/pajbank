<template>
<div>
<div class="pajbank" >PAJONLINE BANK</div>
<div class="customer">

</div>
 <div class="container my-3">
    <div class="row justify-content-around">
      <div class="col-6 rounded shadow">
        <h1 class="py-3">Become a Customer</h1>
        <div id="signup-form">
 <div id="form">
   <validation-observer>
        <form v-on:submit="submitBtn" action="#" method="post">
          <div class="form-group">
            <validation-provider rules="required">
      <label for="id">Id:</label><br>
       <div class="input-group">
      <span class="input-group-prepend"><span class="input-group-text"><i class="fa fa-user" aria-hidden="true"></i></span></span>
      <input id="name" v-model="id"  class="form-control" placeholder="Id">
      </div>
      </validation-provider>
  </div>
      <br>
      <div class="form-group">
        <validation-provider rules="required|min:3" vid="name">
      <label for="name">Name:</label><br>
      <div class="input-group">
        <span class="input-group-prepend"><span class="input-group-text"><i class="fa fa-user" aria-hidden="true"></i></span></span>
      <input id="name" type="text" required v-model="name"  placeholder="Name" class="form-control"/>
       </div> 
       </validation-provider> 
       </div>     
      <br>
      <div class="form-group">
        <validation-provider rules="required|email">
      <label for="email">email:</label><br>
      <div class="input-group">
        <span class="input-group-prepend"><span class="input-group-text"><i class="fa fa-envelope" aria-hidden="true"></i></span></span>
      <input type="email" id="email" name="email" required v-model="email"  placeholder="email@example.com" class="form-control" />
      </div>
      </validation-provider>
      </div>
      <br>
      <div class="form-group">
        <validation-provider :rules="{ required: true, regex: /[0-9]+/ }">
      <label for="balance">balance:</label><br>
       <div class="input-group">
      <span class="input-group-prepend"><span class="input-group-text"><i class="fa fa-lock" aria-hidden="true"></i></span></span>
      <input id="contentForm"  type="number" required v-model="balance" min=0 placeholder="balance" class="from-control"/>
      </div>
      </validation-provider>
      </div>
      <br>
      <div class="form-group">
        <validation-provider :rules="{ required: true, regex: /[0-9]+/ }">
      <label for="phone">Phone:</label><br>
       <div class="input-group">
      <span class="input-group-prepend"><span class="input-group-text"><i class="fa fa-lock" aria-hidden="true"></i></span></span>
      <input id="contentForm"  type="number" required v-model="phone"  placeholder="Phone" class="from-control"/>
      </div>
      </validation-provider>
      </div>
      <br>
      <div class="form-group">
      <button id="submitbtn"  type='submit' class="btn btn-block btn-lg btn-primary">Submit</button><h2 v-if="Added">Added  to the list!</h2>
      </div>
    </form>
    </validation-observer>
    </div>
      </div>
    </div>
  </div>
    </div>
</div>
</template>
<script>
import axios from 'axios';
 

export default {
    name: "Becomecustomer",
     data () {
        
    return {
       name:"", 
       id:"",
       email:"",
       balance:"",
       phone:"",
       Added:false,
       options: {
                headers: {
                    "Content-Type": "application/json",
                },
            },

           
    }
    
     },
    
     
    methods:{
        submitBtn(event){  
       event.preventDefault();
       
       
       this.Added="";
         axios
        .post('http://localhost:3000/accounts',
        {name:this.name,id:this.id,email:this.email,balance:this.balance,phone:this.phone})
        .then(response => {(response.data)
          if(response !==null){
        this.Added=true;
        console.log(response);
          }
        }) 
        .catch(error => {
        console.log(error)
        this.errored = true
      })
      
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




</style>