import { createRouter, createWebHistory } from 'vue-router';

import Home from './components/Home.vue';
import Inquiries from './components/inquiries/Inquiries.vue';
import Subscribers from './components/subscribers/Subscribers.vue';
import Orders from './components/orders/Orders.vue';
import Order from './components/orders/Order.vue';
import OrderEdit from './components/orders/OrderEdit.vue';
import OrderEmpty from './components/orders/OrderEmpty.vue';
import Error404 from './components/Error404.vue';

// import store from './store/index.js';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { 
      name: 'home',
      path: '/', 
      component: Home
    },
    { 
      name: 'inquiries',
      path: '/inquiries', 
      component: Inquiries 
    },
    { 
      path: '/subscribers', 
      name: 'subscribers',
      component: Subscribers,
      children: [
        {
          path: '/delete/:subscriberId', 
          // component: Order, 
          name: 'deleteSubscriber',
          beforeEnter: (to, from, next) => {
            console.log('Inside the delete subscriber');
            next();
          }
        }
      ]
    },
    {
      path: '/orders', 
      component: Orders,
      children: [
        { 
          path: '',
          component: OrderEmpty,
          beforeEnter: (to, from, next) => {
            console.log('Inside the empty order');
            next();
          }, 
        },
        { 
          path: ':orderId', 
          component: Order, 
          name: 'order',
          beforeEnter: (to, from, next) => {
            console.log('Inside the order');
            next();
          }
        },
        { path: ':orderId/edit', component: OrderEdit }
      ]
    },
    { 
      path: '*', 
      component: Error404
      // redirect: '/orders' 
    },
  ]
});

export default router;
