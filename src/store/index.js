import { createStore } from 'vuex';

import inquiries from './modules/inquiries';
import subscribers from './modules/subscribers';
import orders from './modules/orders';
// import * as actions from './actions';

const store = createStore({
  // actions: actions,
  modules: {
    inquiries: inquiries,
    subscribers: subscribers,
    orders: orders
  }
});

export default store;