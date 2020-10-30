<template>
<div>
<div class="pajbank"><p>PAJONLINE BANK</p></div>
<div class="customer">
<h1>Become a Customer</h1>
</div>
 <div id="form">
        <form v-on:submit="submitBtn" action="#" method="post">
      <label>Id:</label><br>
      <input id="contentForm" v-model="content"  placeholder="Id">{{id}}
      <br>
      <label>Name:</label><br>
      <input id="contentForm" v-model="title" placeholder="Name">
      <br>
      <label>Age:</label><br>
      <input id="contentForm" v-model="content"  placeholder="Age">
      <br>
      <label>Phone:</label><br>
      <input id="contentForm" v-model="content"  placeholder="Phone">
      <br>
      <button id="submitbtn" type='submit'  class="btn btn-primary">Submit</button><h2 v-if="Added">Added snippet to the list!</h2>
    </form>
    </div>
</div>
</template>
<script>
import axios from 'axios';
export default {
    name: "Becomecustomer",
     data () {
    return {
       title:"", 
       content:"",
       Added:false
    }
      
    },
    methods:{
        submitBtn(event){  
       event.preventDefault();
       
       this.Added="";
         axios
        .post('Customerlist',{add:'',title:this.title,content:this.content})
        .then(response => {(response.data)
          if(response !==null){
        this.Added=true;
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
}
.customer{
  text-align: center;
}

#contentForm{
    width: 30%;
  padding-right:30px;
  padding-bottom:20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid burlywood;
  border-radius: 4px;
  box-sizing: border-box;
   }
   #submitbtn{
       width: 10%;
  background-color: #4CAF50;
  color: white;
  padding: 7px 10px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
   }
   #form{
  border-radius: 5px;
  background-color: cadetblue;
  padding: 20px;
  margin-top:-7px;
 text-align: center;
   }

</style>