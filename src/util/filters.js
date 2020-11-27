// Filters (alternative to v2)
export default (app) => {
  return app.config.globalProperties.$filters = {
    date(val) {
      return new Date(val).toLocaleDateString('en-US', {month: 'long', day: 'numeric'});
    },
    dateShort(val) {
      return new Date(val).toLocaleDateString('de-AT', {month: '2-digit', day: '2-digit', year: '2-digit'});
    },
    time(val) {
      return new Date(val).toLocaleTimeString('de-AT', {hour: '2-digit', minute: '2-digit'});
    },
    currency(val) {
      return '€ '+ Number(val).toFixed(2).toLocaleString();
    }
  };
};

// Vue.filter('reverse', (value) => {
//   // slice to make a copy of array, then reverse the copy
//   return value.slice().reverse();
// });