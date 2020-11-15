// import Vue from 'vue';

// export const loadInquiries = ({commit}) => {
//   Vue.http.get('inquiries')
//   .then(response => {
//     return response.json();
//   })
//   .then(data => {
//     if (data) {
//       const inquiries = data;
//       commit('setInquiries', inquiries);
//     }
//   })
//   .catch(err => {
//     console.log(err);
//   })
// };


// // fetch('http://localhost:3000/console/inquiries/')
// // .then(response => {
// //   console.log('mutation');
// //   return response.json();
// // })
// // .then(data => {
// //   console.log(data);
// //   state.inquiries = inquiries;
// // })
// // .catch(err => {
// //   console.log(err);
// // })