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
      console.log(response);
      const responseData = await response.json();
      if (!response.ok || !responseData) {
        const error = new Error(responseData.message || 'Failed to fetch subscribers.');  // TODO 5: display error in component
        throw error;
      }
      const subscribers = responseData.data;  // TODO 5: refactor Node.js response object?
      console.log(subscribers);
      context.commit('setSubscribers', subscribers);
    },
    // delete(subscriber)
  },
  getters: {
    subscribers(state) {
      return state.subscribers;
    }
  }
};