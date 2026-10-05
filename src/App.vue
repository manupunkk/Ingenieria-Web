<template>
  <div id="app-layout">
    <Navbar />
    <main class="main-content">
      <router-view />
    </main>
    <FooterApp />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import FooterApp from './components/FooterApp.vue'
</script>

<style>
/* Estilos globales */
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  background-color: #f8f9fa;
  color: #333;
}
#app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.main-content {
  flex: 1;
}
.container {
  max-width: 1000px;
  margin: 2rem auto;
  padding: 0 1rem;
}
</style>