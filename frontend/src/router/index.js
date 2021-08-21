import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import ListUsers from '../views/ListUsers.vue'
import UpdateUser from '../views/UpdateUser.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/list_users',
    name: 'ListUsers',
    component: ListUsers
  },
  {
    path: '/update_user/:id',
    name: 'UpdateUser',
    component: UpdateUser
  },

]

const router = new VueRouter({
  routes
})

export default router
