<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { obtenerServicios } from '../services/serviciosService'

const route = useRoute()

const servicio = ref(null)
const cargando = ref(true)
const error = ref('')

onMounted(async () => {
  try {
    cargando.value = true
    error.value = ''

    const servicios = await obtenerServicios()

    servicio.value = servicios.find(
      servicio => servicio.id === Number(route.params.id)
    )
  } catch (err) {
    console.error(err)
    error.value = 'No fue posible cargar el servicio.'
  } finally {
    cargando.value = false
  }
})
</script>

<template>
  <section class="pagina">

    <p v-if="cargando">
      Cargando servicio...
    </p>

    <p v-else-if="error">
      {{ error }}
    </p>

    <div v-else-if="servicio" class="detalle-servicio">
      <span class="categoria">
        {{ servicio.categoria }}
      </span>

      <h1>{{ servicio.nombre }}</h1>

      <p>{{ servicio.descripcion }}</p>

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

      <p>
        El servicio solicitado no existe.
      </p>

      <RouterLink to="/servicios">
        ← Volver a servicios
      </RouterLink>
    </div>

  </section>
</template>