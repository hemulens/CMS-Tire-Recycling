<template>
  <div v-if="selectedOrder != undefined" class="card mb-1 selected">
    <div class="card-body" :class="{show: cardBodyOpen}">
      <!-- <div class="float-left float-xl-left float-lg-left float-md-left float-sm-left"></div> -->
      <div class="row">
        <div class="col-lg-6">
          <h4>Client</h4>
          <div class="form-row">
            <div class="col-xl-3 col-lg-3 col-md-3">Name:</div>
            <div class="col-xl-9 col-lg-9">{{selectedOrder.client.name}}</div>
            <div class="col-xl-3 col-lg-3 col-md-3">Email:</div>
            <div class="col-xl-9 col-lg-9">{{selectedOrder.client.email}}</div>
            <div class="col-xl-3 col-lg-3 col-md-3">Phone:</div>
            <div class="col-xl-9 col-lg-9">{{selectedOrder.client.phone}}</div>
          </div>
          <div v-if="selectedOrder.client.company" class="form-row">
            <div class="col-xl-3 col-lg-3 col-md-3">Company:</div>
            <div class="col-xl-9 col-lg-9">{{selectedOrder.client.company}}</div>
            <div class="col-xl-3 col-lg-3 col-md-3">VAT:</div>
            <div class="col-xl-9 col-lg-9">{{selectedOrder.client.vat}}</div>
          </div>
          <div class="form-row">
            <div class="col-xl-3 col-lg-3 col-md-3">Address:</div>
            <div class="col-xl-9 col-lg-9">{{selectedOrder.client.address}}</div>
            <div class="col-xl-3 col-lg-3 col-md-3">ZIP:</div>
            <div class="col-xl-9 col-lg-9">{{selectedOrder.client.zip}}</div>
            <div class="col-xl-3 col-lg-3 col-md-3">City:</div>
            <div class="col-xl-9 col-lg-9">{{selectedOrder.client.city}}</div>
            <div class="col-xl-3 col-lg-3 col-md-3">Country:</div>
            <div class="col-xl-9 col-lg-9">{{selectedOrder.client.country}}</div>
          </div>
        </div>
        <div class="col-lg-6">
          <h4>Service</h4>
          <div class="form-row">
            <div class="col-xl-3 col-lg-3 col-md-3">Title:</div>
            <div class="col-xl-9 col-lg-9">{{selectedOrder.service.type}} "{{selectedOrder.service.title}}"</div>
            <div class="col-xl-3 col-lg-3 col-md-3">Price:</div>
            <div class="col-xl-9 col-lg-9">{{$filter.currency(selectedOrder.service.price)}}</div>
          </div>
          <div class="form-row" v-if="selectedOrder.service.type == 'Webinar'">
            <div class="col-xl-3 col-lg-3 col-md-3">Date:</div>
            <div class="col-xl-9 col-lg-9">{{$filter.date(selectedOrder.service.date.day)}}</div>
            <div class="col-xl-3 col-lg-3 col-md-3">Time:</div>
            <div class="col-xl-9 col-lg-9">{{$filter.time(selectedOrder.service.date.time)}}</div>
          </div>
          <br>
          <h4>Meta</h4>
          <div class="form-row">
            <div class="col-xl-3 col-lg-3 col-md-3">Received on:</div>
            <div class="col-xl-9 col-lg-9">
              {{ $filter.date(selectedOrder.meta.date) }}, {{ $filter.time(selectedOrder.meta.date) }}
            </div>
            <div class="col-xl-3 col-lg-3 col-md-3">Order ID:</div>
            <div class="col-xl-9 col-lg-9">
              {{ selectedOrder.meta.orderId }}
            </div>
          </div>
        </div>
      </div>
      <div class="option-panel float-right float-xl-right float-lg-right float-md-right float-sm-right">
        <button class="btn btn-success btn-icon">
          <i class="fas fa-trash-alt"></i>
        </button>
        <button class="btn btn-success btn-icon" v-on:click="test">
          <i class="fas fa-pencil-alt"></i>
        </button>
        <a :href="invoiceDomain + selectedOrder.meta.orderId" target="_blank">
          <button class="btn btn-success btn-icon">
            <i class="fas fa-file-pdf"></i>
          </button>
        </a>
      </div>
    </div>
  </div>
  <div v-else>
    <div class="card selected">
      <div class="card-body">
        <h2>'selectedOrder' not fetched</h2>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    // props: ['selectedOrder'],
    data() {
      return {
        invoiceDomain: 'http://localhost:3000/console/invoice/',
        // orderId: this.$route.params.orderId
      }
    },
    methods: {
      test() {
        console.log(this.$route.params.orderId);
      }
    },
    computed: {
      orders() {
        return this.$store.getters.orders;
      },
      selectedOrder() {
        return this.orders.find(el => {
          return el.meta.orderId === this.$route.params.orderId;
        });
      }
    },
    created: function() {
      console.log('created');
      this.$store.dispatch('selectOrder', this.$route.params.orderId);
      console.log(this.$store.getters.selectedOrder);
    }
  }
</script>

<style scoped>
  
</style>