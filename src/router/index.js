import { createRouter, createWebHistory } from 'vue-router';
import ServiciosView from '../views/ListaServicios.vue';
import ServicioFormView from '../views/FormularioServicio.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/servicios' },
    { path: '/servicios', component: ServiciosView },
    { path: '/servicios/nuevo', component: ServicioFormView },
    { path: '/servicios/:id/editar', component: ServicioFormView }
  ]
})
