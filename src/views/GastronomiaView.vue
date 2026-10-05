<template>
  <div class="page container">
    <h2>Gastronomía Típica</h2>
    <div class="grid">
      <TarjetaLugar
        v-for="(plato, index) in platos"
        :key="index"
        :titulo="plato.titulo"
        :descripcion="plato.descripcion"
        :imagen="plato.imagen"
        categoria="Gastronomía"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TarjetaLugar from '../components/TarjetaLugar.vue'

const platos = ref([
  {
    titulo: 'Longanizas de Chillán',
    descripcion: 'Embutido tradicional con denominación de origen y sabor inconfundible.',
    imagen: 'https://picsum.photos/400/250?random=5'
  },
  {
    titulo: 'Pan Amasado',
    descripcion: 'Crujiente pan recién horneado tradicional de los campos del Ñuble.',
    imagen: 'https://picsum.photos/400/250?random=6'
  },
  {
    titulo: 'Vinos del Valle del Itata',
    descripcion: 'Cepa ancestral con historia viñatera reconocida a nivel internacional.',
    imagen: 'https://picsum.photos/400/250?random=7'
  }
])
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}
</style>