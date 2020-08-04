<template>
  <div id="app">
    <img alt="logo" class="logo" src="https://miro.medium.com/max/1125/1*wotzQboYWAfaj-7bvGNIkQ.png">
    <div class="jumbotron">
      <Datos class="card_info" usuario="1"/>
      <Datos class="card_info" usuario="2"/>
    </div>
    <button class="btn btn-primary" @click="fight">Fight</button>
  </div>
</template>

<script>
import Datos from './components/Datos.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'App',
  components: {
    Datos
  },
  methods:{
    fight(){
      if(this.$store.state.Puntaje1 > this.$store.state.Puntaje2){
        console.log('Gana Usuario 1')
        alert("Gana el usuario 1")
      }else if
      (this.$store.state.Puntaje1 < this.$store.state.Puntaje2){
        console.log('Gana Usuario 2')
        alert("Gana el usuario 2")
      } else {
        console.log('Empate')
        alert("Empate")
      }
    }
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

.card_info{
  display: inline-block;
  margin-left:7rem;
}
</style>
