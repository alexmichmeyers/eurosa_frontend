import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import SignupView from "../views/SignupView.vue";
import LoginView from "../views/LoginView.vue";
import CurrenciesIndex from "../views/CurrenciesIndex.vue";
import CurrenciesShow from "../views/CurrenciesShow.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: "/signup", 
    name: "signup", 
    component: SignupView
  },
  { path: "/login", 
    name: "login", 
    component: LoginView 
  },
  { path: "/currencies", 
    name: "currencies-index", 
    component: CurrenciesIndex 
  },
  { path: "/currencies/:id",
    name: "currencies-show", 
    component: CurrenciesShow 
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
