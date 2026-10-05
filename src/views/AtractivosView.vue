<template>
  <div class="page container">
    <h2>Atractivos Turísticos</h2>
    <div class="grid">
      <TarjetaLugar
        v-for="(lugar, index) in atractivos"
        :key="index"
        :titulo="lugar.titulo"
        :descripcion="lugar.descripcion"
        :imagen="lugar.imagen"
        :categoria="lugar.categoria"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TarjetaLugar from '../components/TarjetaLugar.vue'

const atractivos = ref([
  {
    titulo: 'Catedral de Chillán',
    descripcion: 'Símbolo arquitectónico y patrimonio icónico reconstruido tras el terremoto de 1939.',
    imagen: 'https://picsum.photos/400/250?random=1',
    categoria: 'Patrimonio'
  },
  {
    titulo: 'Termas de Chillán',
    descripcion: 'Centro de esquí y aguas termales rodeado de majestuosos paisajes cordilleranos.',
    imagen: 'https://picsum.photos/400/250?random=2',
    categoria: 'Naturaleza'
  },
  {
    titulo: 'Valle Las Trancas',
    descripcion: 'Villa de montaña ideal para el ecoturismo, senderismo y descanso.',
    imagen: 'https://picsum.photos/400/250?random=3',
    categoria: 'Aventura'
  },
  {
    titulo: 'Feria de Chillán',
    descripcion: 'Mercado tradicional donde convergen la artesanía en greda y la gastronomía local.',
    imagen: 'https://picsum.photos/400/250?random=4',
    categoria: 'Cultura'
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