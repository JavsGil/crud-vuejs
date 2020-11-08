import Vue from 'vue'
import App from './App.vue';
import vuetify from './plugins/vuetify';
import "vuetify/dist/vuetify.min.css";
import VueRouter from 'vue-router';

import Empleados from './components/Empleados';
import Contratistas from './components/Contratistas';
import Reporte from './components/Reporte';

Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: '/empleados',
      component: Empleados
    },
    {
      path: '/contratistas',
      component: Contratistas
    },
    {
      path: '/reporte',
      component: Reporte
    }
  ]
})

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
