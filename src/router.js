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
      name: 'allInquiries',
      path: '/inquiries', 
      component: Inquiries 
    },
    { 
      name: 'allSubscribers',
      path: '/subscribers', 
      component: Subscribers,
      children: [
        {
          name: 'deleteSubscriber',
          path: '/delete/:subscriberId', 
          // component: Order, 
          beforeEnter: (to, from, next) => {
            console.log('Inside the delete subscriber');
            next();
          }
        }
      ]
    },
    {
      name: 'allOrders',
      path: '/orders', 
      component: Orders,
      children: [
        { 
          path: '',
          component: OrderEmpty
        },
        { 
          name: 'order',
          path: ':orderId', 
          component: Order
        },
        { path: ':orderId/edit', component: OrderEdit }
      ]
    },
    { 
      name: 'error404',
      path: '/:notFound(.*)', 
      component: Error404
      // redirect: '/orders' 
    },
  ]
});

export default router;
