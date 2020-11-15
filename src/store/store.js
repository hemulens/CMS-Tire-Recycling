import Vue from 'vue';
import Vuex from 'vuex';

import inquiries from './modules/inquiries';
import subscribers from './modules/subscribers';
import orders from './modules/orders';
// import * as actions from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
  // actions: actions,
  modules: {
    inquiries: inquiries,
    subscribers: subscribers,
    orders: orders
  }
});