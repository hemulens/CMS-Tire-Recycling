import Vue from 'vue';

const state = {
  subscribers: [], 
};

const mutations = {
  setSubscribers(state, subscribers) {
    state.subscribers = subscribers;
  }
};

const actions = {
  initSubscribers({commit}) {
    Vue.http.get('subscribers')
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
};

const getters = {
  subscribers: state => {
    return state.subscribers;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};