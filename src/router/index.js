import { createRouter, createWebHistory } from 'vue-router'
import InicioView from '../views/InicioView.vue'
import AtractivosView from '../views/AtractivosView.vue'
import GastronomiaView from '../views/GastronomiaView.vue'
import ContactoView from '../views/ContactoView.vue'

const routes = [
  { path: '/', name: 'Inicio', component: InicioView },
  { path: '/atractivos', name: 'Atractivos', component: AtractivosView },
  { path: '/gastronomia', name: 'Gastronomia', component: GastronomiaView },
  { path: '/contacto', name: 'Contacto', component: ContactoView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router