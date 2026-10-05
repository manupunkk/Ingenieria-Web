<template>
  <div class="card">
    <img :src="imagen" :alt="titulo" class="card-img" />
    <div class="card-body">
      <span class="badge">{{ categoria }}</span>
      <h3>{{ titulo }}</h3>
      <p>{{ descripcion }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  titulo: String,
  descripcion: String,
  imagen: String,
  categoria: String
})
</script>

<style scoped>
.card {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  background: white;
  transition: transform 0.2s;
}
.card:hover {
  transform: translateY(-5px);
}
.card-img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}
.card-body {
  padding: 1rem;
}
.badge {
  background-color: #e76f51;
  color: white;
  font-size: 0.75rem;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
}
h3 {
  margin: 0.5rem 0;
  color: #2d6a4f;
}
p {
  color: #555;
  font-size: 0.9rem;
}
</style>