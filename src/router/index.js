import { createRouter, createWebHistory } from 'vue-router'
import LoginVentana from '../views/LoginVentana.vue';
import MainMenu from '../views/MainMenu.vue';

const routes = [

  {
    path: '/',
    name: 'Login',
    component: LoginVentana
  },
  {
    path: '/menu',
    name: 'Menu',
    component: MainMenu
  },

 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
