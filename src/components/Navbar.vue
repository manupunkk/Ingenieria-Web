<template>
  <nav class="navbar">
    <div class="logo">🏔️ Turismo Chillán</div>
    <div class="links">
      <router-link to="/">Inicio</router-link>
      <router-link to="/atractivos">Atractivos</router-link>
      <router-link to="/gastronomia">Gastronomía</router-link>
      <router-link to="/contacto">Contacto</router-link>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1b4332; /* Verde bosque / identidad regional */
  padding: 1rem 2rem;
  color: white;
}
.logo {
  font-size: 1.4rem;
  font-weight: bold;
}
.links a {
  color: #d8f3dc;
  margin-left: 1.5rem;
  text-decoration: none;
  font-weight: 500;
}
.links a.router-link-exact-active {
  color: #f4a261; /* Color destacado activo */
  border-bottom: 2px solid #f4a261;
}
</style>