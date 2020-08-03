<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Datos />
  </div>
</template>

<script>
import Datos from './components/Datos.vue'

export default {
  name: 'App',
  components: {
    Datos
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
