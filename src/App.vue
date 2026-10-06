<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
</script>

<template>
  <Navbar />

  <main>
    <RouterView />
  </main>

  <footer>
    <p>Plataforma de Servicios Profesionales de Ñuble</p>
  </footer>
</template>