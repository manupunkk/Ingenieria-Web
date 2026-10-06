<script setup>
import { ref, computed, onMounted } from 'vue'
import ServicioCard from '../components/ServicioCard.vue'
import { obtenerServicios } from '../services/serviciosService'

const servicios = ref([])
const favoritos = ref([])

const cargando = ref(true)
const error = ref('')

const serviciosFavoritos = computed(() => {
  return servicios.value.filter(servicio =>
    favoritos.value.includes(servicio.id)
  )
})

function cambiarFavorito(id) {
  favoritos.value = favoritos.value.filter(
    favoritoId => favoritoId !== id
  )

  localStorage.setItem(
    'favoritos',
    JSON.stringify(favoritos.value)
  )
}

onMounted(async () => {
  const guardados = localStorage.getItem('favoritos')

  favoritos.value = guardados
    ? JSON.parse(guardados)
    : []

  try {
    cargando.value = true
    error.value = ''

    servicios.value = await obtenerServicios()
  } catch (err) {
    console.error(err)
    error.value = 'No fue posible cargar los servicios favoritos.'
  } finally {
    cargando.value = false
  }
})
</script>

<template>
  <section class="pagina">

    <h1>Servicios favoritos</h1>

    <p v-if="cargando">
      Cargando servicios...
    </p>

    <p v-else-if="error">
      {{ error }}
    </p>

    <div
      v-else-if="serviciosFavoritos.length"
      class="servicios-grid"
    >
      <ServicioCard
        v-for="servicio in serviciosFavoritos"
        :key="servicio.id"
        :servicio="servicio"
        :favorito="true"
        @cambiar-favorito="cambiarFavorito"
      />
    </div>

    <div v-else>
      <p>
        Aún no has seleccionado servicios favoritos.
      </p>

      <RouterLink to="/servicios">
        Revisar servicios
      </RouterLink>
    </div>

  </section>
</template>