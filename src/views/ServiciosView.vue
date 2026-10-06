<script setup>
import ServicioCard from '../components/ServicioCard.vue'
import { servicios } from '../data/servicios'
</script>

<template>
  <section class="pagina">
    <h1>Servicios profesionales</h1>

    <p>
      Explora los servicios profesionales disponibles en la Región de Ñuble.
    </p>

    <div class="servicios-grid">
      <ServicioCard
        v-for="servicio in servicios"
        :key="servicio.id"
        :servicio="servicio"
      />
    </div>
  </section>
</template>