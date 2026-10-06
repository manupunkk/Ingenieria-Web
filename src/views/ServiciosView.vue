<script setup>
import { ref, computed } from 'vue'
import ServicioCard from '../components/ServicioCard.vue'
import { servicios } from '../data/servicios'

const buscar = ref('')
const categoria = ref('Todas')

const categorias = computed(() => {
  return ['Todas', ...new Set(servicios.map(servicio => servicio.categoria))]
})

const serviciosFiltrados = computed(() => {
  return servicios.filter(servicio => {
    const coincideNombre = servicio.nombre
      .toLowerCase()
      .includes(buscar.value.toLowerCase())

    const coincideCategoria =
      categoria.value === 'Todas' ||
      servicio.categoria === categoria.value

    return coincideNombre && coincideCategoria
  })
})
</script>

<template>
  <section class="pagina">
    <h1>Servicios profesionales</h1>

    <p>
      Explora los servicios profesionales disponibles en la Región de Ñuble.
    </p>

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
      />
    </div>

    <p v-else>
      No se encontraron servicios para los criterios seleccionados.
    </p>
  </section>
</template>