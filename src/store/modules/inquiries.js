import { rootPath } from '../../util/util.js';
// create an object holding all paths

export default {
  state: {
    inquiries: [],
    lastPage: true,
    selectedInquiry: null,
    queries: null
  },
  mutations: {
    setInquiries(state, payload) {
      state.inquiries = payload.items;
      state.lastPage = payload.lastPage;
    },
    selectInquiry(state, payload) {
      state.selectedInquiry = payload;
    },
    setQueries(state, payload) {
      state.queries = payload;
    },
    resetQueries(state) {
      state.queries = null;
    }
    // // Use selectively
    // deleteInquiry(state, payload) {
    //   const id = payload;
    //   const index = state.inquiries.findIndex(item => {
    //     return item._id === id;
    //   });
    //   state.inquiries.splice(index, 1);
    // }
  },
  actions: {
    async fetchInquiries(context, payload) {
      console.log('inside fetchInquiries');
      let page;
      let queries = '';
      // TODO on load
      const stateQueries = context.getters.queries;
      if (!payload || !payload.page) {
        page = 1;
      } else {
        page = payload.page;
      }
      // TODO: check for queries and push to state
      if (payload && payload.queries || stateQueries) {
        // console.log(payload.queries);
        // console.log(Object.keys(payload.queries));
        // console.log(Object.values(payload.queries));
        // console.log('looop');
        // Define the 'query' string
        context.commit('setQueries', payload.queries);
        for (let i = 0; i < Object.keys(payload.queries).length; i++) {
          const key = Object.keys(payload.queries)[i]
          const value = Object.values(payload.queries)[i];
          console.log(Object.keys(payload.queries)[i] + ': ' + Object.values(payload.queries)[i]);
          if (value) {
            const string = `${key}=${value}&`;
            queries += string;
          }
          // queries[Object.keys(payload.queries)[i]] = Object.values(payload.queries)[i];
        }
        console.log(queries);
        // for (let k in payload.queries) {
        //   console.log(k);
        // }
      }
      const response = await fetch(`${rootPath}inquiries?page=${page}&${queries}`);
      // console.log(response);
      // console.log(`RootPath: ${rootPath}`);
      const responseData = await response.json();
      if (!response.ok || !responseData) {
        const error = new Error(responseData.message || 'Failed to fetch inquiries.');  // TODO 5: display error in component
        throw error;
      }
      const data = responseData.data;  // TODO 5: refactor Node.js response object?
      console.log(data);
      context.commit('setInquiries', data);
    },
    async deleteInquiry(context, payload) {
      const id = payload.id;
      const page = payload.page;
      const queries = payload.queries;
      // Options to pass to 'fetchInquiries'
      let options = {
        page: page,
        queries: queries
      };
      const response = await fetch(`${rootPath}inquiries/${id}/delete`, {
        method: 'DELETE'
      });
      const responseData = await response.json();
      console.log(responseData);
      if (!response.ok || !responseData) {
        const error = new Error(responseData.message || 'Failed to delete the inquiry.');  // TODO 5: display error in component
        throw error;
      }
      // Refresh inquiries list
      context.dispatch('fetchInquiries', options);
      context.commit('selectInquiry', null);
    },
    // async saveInquiry(context, payload) {
    //   const response = await fetch(`${rootPath}inquiries/save`, {
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     method: 'PUT',
    //     body: JSON.stringify(payload)
    //   });
    //   console.log(payload);
    //   const responseData = await response.json();
    //   console.log(responseData);
    //   if (!response.ok || !responseData) {
    //     const error = new Error(responseData.message || 'Failed to save the inquiry.');  // TODO 5: display error in component
    //     throw error;
    //   }
    //   // Refresh subscribers list
    //   context.dispatch('fetchInquiries');
    // }
  },
  getters: {
    inquiries(state) {
      return state.inquiries;
    },
    lastPage(state) {
      return state.lastPage;
    },
    selectedInquiry(state) {
      return state.selectedInquiry;
    },
    queries(state) {
      return state.queries;
    }
  }
};