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
    initSubscribers({commit}) {
      // TODO 3: Change http request for fetch
      // Vue.http.get('subscribers')
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log('***');
        console.log(data);
        if (data) {
          const subscribers = data.data;
          commit('setSubscribers', subscribers);
        } else {
          console.log('subscribers not fetched');
        }
      })
      .catch(err => {
        console.log(err);
      });
    },
    // delete(subscriber)
  },
  getters: {
    subscribers: state => {
      return state.subscribers;
    }
  }
};