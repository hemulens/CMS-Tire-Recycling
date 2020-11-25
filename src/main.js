import { createApp } from 'vue';

import router from './router.js';
import store from './store/index.js';
import App from './App.vue';

// TODO 1: Switch to filters in Vue 3.0

// Vue.filter('date', (value) => {
//   return new Date(value).toLocaleDateString('en-US', {month: 'long', day: 'numeric'});
// });
// Vue.filter('dateShort', (value) => {
//   return new Date(value).toLocaleDateString('en-US', {month: 'short', day: 'numeric'});
// });
// Vue.filter('time', (value) => {
//   return new Date(value).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
// });
// Vue.filter('currency', (value) => {
//   return '€ '+ Number(value).toFixed(2).toLocaleString();
// });
// // Vue.filter('reverse', (value) => {
// //   // slice to make a copy of array, then reverse the copy
// //   return value.slice().reverse();
// // });

// TODO 2: Set root address for http requests
// Vue.http.options.root = 'http://localhost:3000/console/';

const app = createApp(App);

app.use(router);
app.use(store);

app.mount('#app');