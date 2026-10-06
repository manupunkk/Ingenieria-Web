<script setup>
defineProps({
  servicio: {
    type: Object,
    required: true
  },
  favorito: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['cambiar-favorito'])
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

    <div class="acciones">
      <RouterLink :to="`/servicios/${servicio.id}`">
        Ver detalle
      </RouterLink>

      <button
        type="button"
        @click="emit('cambiar-favorito', servicio.id)"
      >
        {{ favorito ? '★ Quitar favorito' : '☆ Agregar favorito' }}
      </button>
    </div>
  </article>
</template>