<template>
  <div class="page container">
    <h2>Contacto y Consultas</h2>
    <form @submit.prevent="enviarConsulta" class="form">
      <label>Nombre completo:</label>
      <input v-model="form.nombre" type="text" required placeholder="Tu nombre" />

      <label>Correo electrónico:</label>
      <input v-model="form.correo" type="email" required placeholder="tu@correo.com" />

      <label>Mensaje:</label>
      <textarea v-model="form.mensaje" rows="4" required placeholder="¿En qué te podemos ayudar?"></textarea>

      <button type="submit">Enviar Mensaje</button>
    </form>

    <div v-if="enviado" class="exito">
      ¡Gracias {{ form.nombre }}! Tu mensaje ha sido enviado con éxito.
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const form = reactive({
  nombre: '',
  correo: '',
  mensaje: ''
})

const enviado = ref(false)

function enviarConsulta() {
  if (form.nombre && form.correo && form.mensaje) {
    enviado.value = true
  }
}
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  max-width: 500px;
}
input, textarea {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
button {
  background-color: #1b4332;
  color: white;
  border: none;
  padding: 0.7rem;
  border-radius: 4px;
  cursor: pointer;
}
.exito {
  margin-top: 1rem;
  padding: 1rem;
  background-color: #d4edda;
  color: #155724;
  border-radius: 4px;
}
</style>