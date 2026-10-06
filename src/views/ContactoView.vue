<script setup>
import { ref } from 'vue'

const nombre = ref('')
const correo = ref('')
const servicio = ref('')
const mensaje = ref('')

const error = ref('')
const confirmacion = ref('')

function enviarFormulario() {
  error.value = ''
  confirmacion.value = ''

  if (
    !nombre.value.trim() ||
    !correo.value.trim() ||
    !servicio.value.trim() ||
    !mensaje.value.trim()
  ) {
    error.value = 'Por favor, completa todos los campos.'
    return
  }

  if (!correo.value.includes('@')) {
    error.value = 'Ingresa un correo electrónico válido.'
    return
  }

  confirmacion.value = 'Tu solicitud fue enviada correctamente.'

  nombre.value = ''
  correo.value = ''
  servicio.value = ''
  mensaje.value = ''
}
</script>

<template>
  <section class="pagina">
    <h1>Contacto</h1>

    <p>
      Completa el formulario para solicitar información sobre un servicio.
    </p>

    <form
      class="formulario-contacto"
      @submit.prevent="enviarFormulario"
    >
      <div class="campo">
        <label for="nombre">
          Nombre
        </label>

        <input
          id="nombre"
          v-model="nombre"
          type="text"
          placeholder="Ingresa tu nombre"
        />
      </div>

      <div class="campo">
        <label for="correo">
          Correo electrónico
        </label>

        <input
          id="correo"
          v-model="correo"
          type="email"
          placeholder="correo@ejemplo.cl"
        />
      </div>

      <div class="campo">
        <label for="servicio">
          Servicio de interés
        </label>

        <input
          id="servicio"
          v-model="servicio"
          type="text"
          placeholder="Ej: Desarrollo de Sitios Web"
        />
      </div>

      <div class="campo">
        <label for="mensaje">
          Mensaje
        </label>

        <textarea
          id="mensaje"
          v-model="mensaje"
          rows="5"
          placeholder="Escribe tu mensaje"
        ></textarea>
      </div>

      <p
        v-if="error"
        class="mensaje-error"
      >
        {{ error }}
      </p>

      <p
        v-if="confirmacion"
        class="mensaje-exito"
      >
        {{ confirmacion }}
      </p>

      <button type="submit">
        Enviar solicitud
      </button>
    </form>
  </section>
</template>