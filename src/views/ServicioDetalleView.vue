<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { servicios } from '../data/servicios'

const route = useRoute()

const servicio = computed(() => {
  return servicios.find(
    servicio => servicio.id === Number(route.params.id)
  )
})
</script>

<template>
  <section class="pagina">
    <div v-if="servicio" class="detalle-servicio">
      <span class="categoria">
        {{ servicio.categoria }}
      </span>

      <h1>{{ servicio.nombre }}</h1>

      <p>
        {{ servicio.descripcion }}
      </p>

      <h2>
        ${{ servicio.precio.toLocaleString('es-CL') }}
      </h2>

      <p
        v-if="servicio.disponible"
        class="disponible"
      >
        Disponible
      </p>

      <p
        v-else
        class="no-disponible"
      >
        No disponible
      </p>

      <RouterLink to="/servicios">
        ← Volver a servicios
      </RouterLink>
    </div>

    <div v-else>
      <h1>Servicio no encontrado</h1>
      <p>El servicio solicitado no existe.</p>

      <RouterLink to="/servicios">
        ← Volver a servicios
      </RouterLink>
    </div>
  </section>
</template>