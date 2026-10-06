<script setup>
import { ref, computed, onMounted } from 'vue'
import ServicioCard from '../components/ServicioCard.vue'
import { servicios } from '../data/servicios'

const favoritos = ref([])

onMounted(() => {
  const guardados = localStorage.getItem('favoritos')

  favoritos.value = guardados
    ? JSON.parse(guardados)
    : []
})

const serviciosFavoritos = computed(() => {
  return servicios.filter(servicio =>
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
</script>

<template>
  <section class="pagina">
    <h1>Servicios favoritos</h1>

    <div
      v-if="serviciosFavoritos.length"
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
      <p>Aún no has seleccionado servicios favoritos.</p>

      <RouterLink to="/servicios">
        Revisar servicios
      </RouterLink>
    </div>
  </section>
</template>