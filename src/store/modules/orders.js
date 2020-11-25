import { rootPath } from '../../util/util.js';

export default {

  state: {
    orders: [],
    selectedOrder: null
  },

  mutations: {
    setOrders(state, payload) {
      state.orders = payload;
    },
    selectOrder(state, payload) {
      state.selectedOrder = payload;
    }
  },

  actions: {
    async fetchOrders(context) {
      const response = await fetch(`${rootPath}orders`);
      console.log(response);
      const responseData = await response.json();
      if (!response.ok || !responseData) {
        const error = new Error(responseData.message || 'Failed to fetch orders.');  // TODO 5: display error in component
        throw error;
      }
      const orders = responseData.data;  // TODO 5: refactor Node.js response object?
      console.log(orders);
      context.commit('setOrders', orders);
    },
    selectOrder(context, payload) {
      context.commit('selectOrder', payload);
      // 'selectOrder' is the name of the mutation we use
    }
  },

  getters: {
    orders(state) {
      return state.orders;
    },
    selectedOrder(state) {
      return state.selectedOrder;
    }
  }
};