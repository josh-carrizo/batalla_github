import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import Vuex from 'vuex'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
//import router from './router';


Vue.use(Vuex)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false
Vue.prototype.axios = axios;


const store = new Vuex.Store({
  state:{
    Puntaje1:0,
    Puntaje2:0

  },
  mutations:{
    update1(state,nuevo_puntaje){
      state.Puntaje1 = nuevo_puntaje;
    },
    update2(state,nuevo_puntaje){
      state.Puntaje2 = nuevo_puntaje;

    }
  }
})


new Vue({
  render: h => h(App),
  store,
  //router,  
}).$mount('#app')
