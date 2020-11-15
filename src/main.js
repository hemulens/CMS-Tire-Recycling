import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import App from './App.vue';
import { routes } from './routes';
import store from './store/store';

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = 'http://localhost:3000/console/';

Vue.filter('date', (value) => {
  return new Date(value).toLocaleDateString('en-US', {month: 'long', day: 'numeric'});
});
Vue.filter('dateShort', (value) => {
  return new Date(value).toLocaleDateString('en-US', {month: 'short', day: 'numeric'});
});
Vue.filter('time', (value) => {
  return new Date(value).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
});
Vue.filter('currency', (value) => {
  return '€ '+ Number(value).toFixed(2).toLocaleString();
});
// Vue.filter('reverse', (value) => {
//   // slice to make a copy of array, then reverse the copy
//   return value.slice().reverse();
// });

const router = new VueRouter({
  mode: 'history',
  routes: routes
});

new Vue({
  el: '#app',
  router: router,
  store: store,
  render: h => h(App)
});


// 20200519144352