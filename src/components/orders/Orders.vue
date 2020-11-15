<template>
  <div class="form-row">
    <!-- Query Panel -->
    <!-- <div class="col-12 mb-4">
      <form>
        <div class="form-row align-items-center">
          <div class="col-auto my-1">
            <label class="mr-sm-2 sr-only" for="serviceType">Services</label>
            <select v-model="selectedServiceType" class="custom-select mr-sm-2" id="serviceType">
              <option value="all">All Services</option>
              <option value="webinars">Webinars</option>
              <option value="webinars">Reports</option>
            </select>
          </div>
          <div class="col-auto my-1">
            <label class="mr-sm-2 sr-only" for="webinarTitle">Webinar Title</label>
            <select class="custom-select mr-sm-2" id="webinarTitle">
              <option value="1">All Webinars</option>
              <option value="1">Introduction to Tire Recycling</option>
              <option value="1">Introduction to Tire Pyrolysis</option>
            </select>
          </div>
          <div class="col-auto my-1">
            <label class="mr-sm-2 sr-only" for="webinarDate">Webinar Date</label>
            <select class="custom-select mr-sm-2" id="webinarDate">
              <option value="">All Time</option>
              <option value="1">9:00</option>
              <option value="1">16:00</option>
            </select>
          </div>
          <div class="col-auto">
            {{selectedServiceType}}
          </div>
        </div>
      </form>
      <button class="btn btn-success" v-on:click="selectOrder">fetch</button>
    </div> -->
    <div class="col-4 item-list">
      <app-order-li v-for="order in orders" v-bind:key="order._id" v-bind:order="order"></app-order-li>
    </div>
    <div class="col-8">
      <!-- <router-view v-bind:selectedOrder="selectedOrder"></router-view> -->
      <transition name="slideItem" mode="out-in">
        <router-view v-bind:key="this.$route.params.orderId"></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
  import OrderListItem from './OrderListItem.vue';
  import OrderEmpty from './OrderEmpty.vue';
  export default {
    data() {
      return {
        serviceTypes: ['All Services', 'Webinars', 'Reports'],
      }
    },
    methods: {
      
    },
    components: {
      appOrderLi: OrderListItem,
    },
    computed: {
      orders() {
        return this.$store.getters.orders;
      },
      // selectedOrder() {
      //   return this.$store.getters.selectedOrder;
      // }
    }
  }
</script>

<style scoped>
  /* order transition */
  .slideItem-enter-active {
		animation: slideItem-in 200ms ease-out forwards;
	}
	.slideItem-leave-active {
		animation: slideItem-out 200ms ease-out forwards;
	}
	@keyframes slideItem-in {
		from {
			/* transform: translateY(-30px); */
			opacity: 0;
		} to {
			/* transform: translateY(0); */
			opacity: 1;
		}
	}
	@keyframes slideItem-out {
		from {
			/* transform: translateY(0); */
			opacity: 1;
		} to {
			/* transform: translateY(-30px); */
			opacity: 0;
		}
	}
</style>
