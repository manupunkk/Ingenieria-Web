<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="navbar">
    <div class="marca">
      <h2>Servicios Ñuble</h2>
    </div>

    <nav>
      <RouterLink to="/">Inicio</RouterLink>
      <RouterLink to="/servicios">Servicios</RouterLink>
      <RouterLink to="/favoritos">Favoritos</RouterLink>
      <RouterLink to="/contacto">Contacto</RouterLink>
    </nav>
  </header>
</template>