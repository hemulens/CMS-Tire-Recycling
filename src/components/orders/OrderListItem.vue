<template>
  <router-link class="card mb-1" v-bind:to="orderLink" activeClass="active" tag="div">
    <!-- <div class="card-header" v-on:click="selectOrder(order)"> -->
    <div class="card-header">
      <b>{{ order.meta.date | date }}, {{ order.meta.date | time }} | {{ order.service.price | currency }}</b>
      <br>
      {{ order.client.email }}
      <br>
      {{ order.service.type }} "{{ order.service.title }}"
    </div>
  </router-link>
</template>

<script>
  export default {
    props: ['order'],
    data() {
      return {
        // invoiceDomain: 'http://localhost:3000/console/invoice/',
        // selectedOrder: null
        orderId: this.$route.params.orderId,
        orderLink: {
          name: 'order',
          params: { orderId: this.order.meta.orderId }
        }
      }
    },
    watch: {
      '$route'(to, from) {
        this.orderId = to.params.orderId;
      }
    },
    methods: {
      // selectOrder(item) {
      //   // this.$store.state.selectedOrder = item;
      //   this.$store.dispatch('selectOrder', item);
      //   // console.log(this.$store.state.selectedOrder);
      //   // Experimental
      //   console.log(this.$route.params.orderId);
      // },
      // navigateHome() {
      //   // this.$router.push('/');
      //   // this.$router.push({path: '/', });
      //   this.$router.push({name: 'selectedOrder'});
      // }
    },
    computed: {
      // selectedOrder() {
      //   return this.$store.getters.orders[0];
      // }
    }
  }
</script>

<style scoped>
  
</style>