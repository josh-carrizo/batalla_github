<template>
  <div id="app">
    <img alt="logo" class="logo" src="https://miro.medium.com/max/1125/1*wotzQboYWAfaj-7bvGNIkQ.png">
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
.logo{
  width: 30rem;
  height: 50%;
}
</style>
