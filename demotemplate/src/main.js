import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import VueOffline from 'vue-offline'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

Vue.config.productionTip = false
const options = {
  //Global options for Toast
};
Vue.use(VueOffline)
Vue.use(Toast, options);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
