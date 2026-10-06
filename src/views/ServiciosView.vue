<script setup>
import { ref, computed, onMounted } from 'vue'
import ServicioCard from '../components/ServicioCard.vue'
import { obtenerServicios } from '../services/serviciosService'

const servicios = ref([])
const buscar = ref('')
const categoria = ref('Todas')
const favoritos = ref([])

const cargando = ref(true)
const error = ref('')

const categorias = computed(() => {
  return [
    'Todas',
    ...new Set(
      servicios.value.map(servicio => servicio.categoria)
    )
  ]
})

const serviciosFiltrados = computed(() => {
  return servicios.value.filter(servicio => {
    const coincideNombre = servicio.nombre
      .toLowerCase()
      .includes(buscar.value.toLowerCase())

    const coincideCategoria =
      categoria.value === 'Todas' ||
      servicio.categoria === categoria.value

    return coincideNombre && coincideCategoria
  })
})

function cambiarFavorito(id) {
  if (favoritos.value.includes(id)) {
    favoritos.value = favoritos.value.filter(
      favoritoId => favoritoId !== id
    )
  } else {
    favoritos.value.push(id)
  }

  localStorage.setItem(
    'favoritos',
    JSON.stringify(favoritos.value)
  )
}

onMounted(async () => {
  const guardados = localStorage.getItem('favoritos')

  if (guardados) {
    favoritos.value = JSON.parse(guardados)
  }

  try {
    cargando.value = true
    error.value = ''

    servicios.value = await obtenerServicios()
  } catch (err) {
    console.error(err)
    error.value = 'No fue posible cargar los servicios.'
  } finally {
    cargando.value = false
  }
})
</script>

<template>
  <section class="pagina">
    <h1>Servicios profesionales</h1>

    <p>
      Explora los servicios profesionales disponibles en la Región de Ñuble.
    </p>

    <p v-if="cargando">
      Cargando servicios...
    </p>

    <p v-else-if="error">
      {{ error }}
    </p>

    <template v-else>
      <div class="filtros">
        <input
          v-model="buscar"
          type="text"
          placeholder="Buscar servicio..."
        />

        <select v-model="categoria">
          <option
            v-for="cat in categorias"
            :key="cat"
            :value="cat"
          >
            {{ cat }}
          </option>
        </select>
      </div>

      <div
        v-if="serviciosFiltrados.length"
        class="servicios-grid"
      >
        <ServicioCard
          v-for="servicio in serviciosFiltrados"
          :key="servicio.id"
          :servicio="servicio"
          :favorito="favoritos.includes(servicio.id)"
          @cambiar-favorito="cambiarFavorito"
        />
      </div>

      <p v-else>
        No se encontraron servicios para los criterios seleccionados.
      </p>
    </template>
  </section>
</template>