import Vue from 'vue';

const state = {
  inquiries: []
};

const mutations = {
  setInquiries(state, inquiries) {
    state.inquiries = inquiries;
  }
};

const actions = {
  initInquiries({commit}) {
    Vue.http.get('inquiries')
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log('***');
      console.log(data);
      if (data) {
        const inquiries = data.data;
        commit('setInquiries', inquiries);
      } else {
        console.log('inquiries not fetched');
      }
    })
    .catch(err => {
      console.log(err);
    });
  }
};

const getters = {
  inquiries: state => {
    return state.inquiries;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};