<template>
  <div id="app">
    <Padre />
    <Hijo />
  </div>
</template>

<script>
import Padre from './components/Padre.vue'
import Hijo from  './components/Hijo.vue'

export default {
  components: {
    Padre,
    Hijo,
  }
}
</script>