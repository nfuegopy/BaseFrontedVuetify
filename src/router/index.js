import { createRouter, createWebHistory } from 'vue-router'
import LoginVentana from '../views/LoginVentana.vue';
import MainMenu from '../views/MainMenu.vue';
import ResetPassword from '../views/ResetPassword.vue';
import InicioMenu from '../pages/InicioMenu.vue'

const routes = [

  {
    path: '/',
    name: 'Login',
    component: LoginVentana
  },
  {
    path: '/menu',
    name: 'Menu',
    component: MainMenu,
    children:[
      {
        path: '/inicio',
        name: 'Inicio',
        component: InicioMenu
      }
      
    ]
  },
{
  path: '/reset/:usuarioId',
  name: 'Reset',
  component: ResetPassword
}
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
