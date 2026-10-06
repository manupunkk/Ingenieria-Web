<script setup>
defineProps({
  servicio: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <article class="servicio-card">
    <span class="categoria">
      {{ servicio.categoria }}
    </span>

    <h2>{{ servicio.nombre }}</h2>

    <p>{{ servicio.descripcion }}</p>

    <strong>
      ${{ servicio.precio.toLocaleString('es-CL') }}
    </strong>

    <p v-if="servicio.disponible" class="disponible">
      Disponible
    </p>

    <p v-else class="no-disponible">
      No disponible
    </p>

    <RouterLink :to="`/servicios/${servicio.id}`">
      Ver detalle
    </RouterLink>
  </article>
</template>