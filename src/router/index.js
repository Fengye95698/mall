import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
// console.log();
const routes = [
  {
    path:'/details',
    name:'Detail',
    component:()=>import('../views/details')
  },
  {
    path:'/login',
    name:'Login',
    component:()=>import('../views/login')
  },
  {
    path:'/register',
    name:'Register',
    component:()=>import('../views/register')
  },
  {
    path:'/',
    redirect:'/home'
  },
  {
    path:'/home',
    name:'Home',
    component:()=>import('../views/home')
  },
  {
    path:'/category',
    name:'Category',
    component:()=>import('../views/category')
  },
  {
    path:'/find',
    name:'Find',
    component:()=>import('../views/find')
  },
  {
    path:'/cart',
    name:'Cart',
    component:()=>import('../views/cart')
  },
  {
    path:'/me',
    name:'Me',
    component:()=>import('../views/me')
  }
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
