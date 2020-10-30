import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Contactus from "../views/Contactus.vue";
import List from "../views/List.vue";
import Becomecustomer from "../views/Becomecustomer.vue";
import Login from "../views/Login.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/contactus",
    name: "Contactus",
    component: Contactus
    
  },
  {
    path: "/list",
    name: "List",
    component: List
  },
  {
    path: "/becomecustomer",
    name: "Becomecustomer",
    component: Becomecustomer
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
 

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;