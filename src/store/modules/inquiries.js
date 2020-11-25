export default {
  state: {
    inquiries: []
  },
  mutations: {
    setInquiries(state, inquiries) {
      state.inquiries = inquiries;
    }
  },
  actions: {
    initInquiries({commit}) {
      // TODO 3: Change for fetch
      // Vue.http.get('inquiries')
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
  },
  getters: {
    inquiries: state => {
      return state.inquiries;
    }
  }
};