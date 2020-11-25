import { rootPath } from '../../util/util.js';

export default {
  state: {
    inquiries: []
  },
  mutations: {
    setInquiries(state, payload) {
      state.inquiries = payload;
    }
  },
  actions: {
    async fetchInquiries(context) {
      const response = await fetch(`${rootPath}inquiries`);
      console.log(response);
      console.log(`RootPath: ${rootPath}`);
      const responseData = await response.json();
      if (!response.ok || !responseData) {
        const error = new Error(responseData.message || 'Failed to fetch inquiries.');  // TODO 5: display error in component
        throw error;
      }
      const inquiries = responseData.data;  // TODO 5: refactor Node.js response object?
      console.log(inquiries);
      context.commit('setInquiries', inquiries);
    }
  },
  getters: {
    inquiries(state) {
      return state.inquiries;
    }
  }
};