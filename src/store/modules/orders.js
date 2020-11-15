import Vue from 'vue';

const state = {
  orders: [],
  selectedOrder: null
  // selectedOrder: {
  //   client: {
  //     address: "Amman, Serh alsheed st, tabrbour, jordan ",
  //     city: "Amman",
  //     company: "IVER",
  //     country: "Jordan",
  //     email: "mike@4x4autogroup.com",
  //     name: "Mike Alsaid",
  //     phone: "5715998877",
  //     privacy: "I agree with Weibold's privacy policy",
  //     status: "company",
  //     vat: "",
  //     zip: "1145"
  //   },
  //   meta: {
  //     date: "2020-07-06T21:14:00.598Z",
  //     orderId: "20200706211400"
  //   },
  //   payment: {
  //     paid: true,
  //     promo: Object,
  //     id: "",
  //     used: false
  //   },
  //   service: {
  //     date: {
  //       day: "2020-07-08T15:00:00.000Z",
  //       time: "2020-07-08T15:00:00.000Z"
  //     },
  //     price: 100,
  //     title: "Roadmap Towards Recovered Carbon Black as a Commodity",
  //     type: "Webinar"
  //   },
  //   _id: "5f039418af93707e74b85956"
  // }
};

const mutations = {
  setOrders(state, orders) {
    state.orders = orders;
  },
  selectOrder(state, payload) {
    state.selectedOrder = payload;
  }
};

const actions = {
  initOrders({commit}) {
    Vue.http.get('orders')
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log('***');
      console.log(data);
      if (data) {
        const orders = data.data;
        commit('setOrders', orders);
      } else {
        console.log('data not fetched');
      }
    })
    .catch(err => {
      console.log(err);
    })
  },
  selectOrder({commit}, payload) {
    commit('selectOrder', payload);
    // 'selectOrder' is the name of the mutation we use
  }
};

const getters = {
  orders: state => {
    return state.orders;
  },
  selectedOrder: state => {
    return state.selectedOrder;
  }
};


export default {
  state,
  mutations,
  actions,
  getters
};