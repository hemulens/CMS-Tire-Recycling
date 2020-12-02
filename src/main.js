import { createApp } from 'vue';

import router from './router.js';
import store from './store/index.js';
import App from './App.vue';

// Utils and global variables
import { countries } from './util/util.js';
import filters from './util/filters.js';

// Global components
import BaseForm from './components/ui/BaseForm.vue';

// TODO 2: Set root address for http requests
// Vue.http.options.root = 'http://localhost:3000/console/';

const app = createApp(App);

app.use(router);
app.use(store);

// Global filters (alternative to Vue 2)
app.config.globalProperties.$filters = filters;
// Global variables
app.provide('countries', countries);
// Global components
app.component('base-form', BaseForm)

app.mount('#app');