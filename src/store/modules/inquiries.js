import { rootPath } from '../../util/util.js';
// create an object holding all paths

export default {
  state: {
    inquiries: [],
    selectedInquiry: null,
    page: 1
  },
  mutations: {
    setInquiries(state, payload) {
      state.inquiries = payload;
    },
    selectInquiry(state, payload) {
      state.selectedInquiry = payload;
    },
    mergeInquiries(state, payload) {
      // for (const item of payload) {
      //   state.inquiries.push(item);
      // }
      state.inquiries = payload;
    }
  },
  actions: {
    async fetchInquiries(context) {
      const response = await fetch(`${rootPath}inquiries?page=1`);
      // console.log(response);
      // console.log(`RootPath: ${rootPath}`);
      const responseData = await response.json();
      if (!response.ok || !responseData) {
        const error = new Error(responseData.message || 'Failed to fetch inquiries.');  // TODO 5: display error in component
        throw error;
      }
      const inquiries = responseData.data;  // TODO 5: refactor Node.js response object?
      // console.log(inquiries);
      context.commit('setInquiries', inquiries);
    },
    async loadMoreInquiries(context, payload) {
      const response = await fetch(`${rootPath}inquiries?page=${payload}`);
      // console.log(response);
      // console.log(`RootPath: ${rootPath}`);
      const responseData = await response.json();
      if (!response.ok || !responseData) {
        const error = new Error(responseData.message || 'Failed to fetch inquiries.');  // TODO 5: display error in component
        throw error;
      }
      const inquiries = responseData.data;  // TODO 5: refactor Node.js response object?
      // console.log(inquiries);
      context.commit('mergeInquiries', inquiries);
    },
    async deleteInquiry(context, payload) {
      const response = await fetch(`${rootPath}inquiries/${payload.param}/delete`, {
        method: 'DELETE'
      });
      const responseData = await response.json();
      console.log(responseData);
      if (!response.ok || !responseData) {
        const error = new Error(responseData.message || 'Failed to delete the inquiry.');  // TODO 5: display error in component
        throw error;
      }
      // Refresh subscribers list
      context.dispatch('loadMoreInquiries', payload.page);
      context.commit('selectInquiry', null);
    },
    async saveInquiry(context, payload) {
      const response = await fetch(`${rootPath}inquiries/save`, {
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
        const error = new Error(responseData.message || 'Failed to save the inquiry.');  // TODO 5: display error in component
        throw error;
      }
      // Refresh subscribers list
      context.dispatch('fetchInquiries');
    }
  },
  getters: {
    inquiries(state) {
      return state.inquiries;
    },
    selectedInquiry(state) {
      return state.selectedInquiry;
    }
  }
};