<template>
  <div>
    <Tareas />
    <contacto />
  </div>
</template>

<script>
import Tareas from './components/Tareas.vue';
import Contacto from './components/Contacto.vue';
export default {
  components: { Tareas, Contacto }
}
</script>