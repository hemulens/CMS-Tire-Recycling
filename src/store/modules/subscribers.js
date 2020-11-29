import { rootPath } from '../../util/util.js';

export default {
  state: {
    subscribers: [], 
  },
  mutations: {
    setSubscribers(state, subscribers) {
      state.subscribers = subscribers;
    }
  },
  actions: {
    async fetchSubscribers(context) {
      const response = await fetch(`${rootPath}subscribers`);
      const responseData = await response.json();
      if (!response.ok || !responseData) {
        const error = new Error(responseData.message || 'Failed to fetch subscribers.');  // TODO 5: display error in component
        throw error;
      }
      const subscribers = responseData.data;  // TODO 5: refactor Node.js response object?
      context.commit('setSubscribers', subscribers);
    },
    async deleteSubscriber(context, payload) {
      const response = await fetch(`${rootPath}subscribers/${payload}/delete`, {
        method: 'DELETE'
      });
      const responseData = await response.json();
      console.log(responseData);
      if (!response.ok || !responseData) {
        const error = new Error(responseData.message || 'Failed to fetch subscribers.');  // TODO 5: display error in component
        throw error;
      }
      // Refresh subscribers list
      context.dispatch('fetchSubscribers');
    },
    async saveSubscriber(context, payload) {
      const response = await fetch(`${rootPath}subscribers/save`, {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'PUT',
        body: JSON.stringify(payload)
      });
      console.log(payload);
      const responseData = await response.json();
      console.log(responseData);
      if (!response.ok || !responseData) {
        const error = new Error(responseData.message || 'Failed to save the subscriber.');  // TODO 5: display error in component
        throw error;
      }
      // Refresh subscribers list
      context.dispatch('fetchSubscribers');
    }
  },
  getters: {
    subscribers(state) {
      return state.subscribers;
    }
  }
};