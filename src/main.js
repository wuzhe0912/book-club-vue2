import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// styles
import 'normalize.css/normalize.css';
import './styles/main.scss';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
