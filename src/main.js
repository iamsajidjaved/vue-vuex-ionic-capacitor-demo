import Vue from 'vue'
import VueRouter from 'vue-router'
import { store } from './store'
import App from './App.vue'
import IonicVue from '@ionic/vue';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import LoginComponent from './components/LoginComponent.vue'
import DashboardComponent from './components/DashboardComponent.vue'

Vue.config.productionTip = false

Vue.use(IonicVue);
Vue.use(VueRouter);

const routes = [
  { path: '/', component: LoginComponent },
  { path: '/dashboard', component: DashboardComponent }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})


new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
