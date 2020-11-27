<template>
  <div class="table-responsive-md">
    <table class="table table-sm table-striped table-hover">
      <thead>
        <tr>
          <th scope="col" class="sticky">#</th>
          <th scope="col">Date</th>
          <th scope="col">Time</th>
          <th scope="col">Country</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
        </tr>
      </thead>
      <tbody>
        <app-subscriber v-for="(subscriber, index) in subscribers.slice().reverse()" :key="subscriber._id" :subscriber="subscriber" :index="subscribers.length - index"></app-subscriber>
      </tbody>
    </table>
  </div>


  <!-- <ul class="list-group">
    <app-subscriber v-for="(subscriber, index) in subscribers.slice().reverse()" :key="subscriber._id" :subscriber="subscriber" :index="subscribers.length - index"></app-subscriber>
  </ul> -->
</template>

<script>
  import Subscriber from './Subscriber.vue';
  export default {
    components: {
      appSubscriber: Subscriber
    },
    computed: {
      subscribers() {
        return this.$store.getters.subscribers;  // create func in $store
      }
    },
    created() {
      console.log('Created (Subscribers)');
      this.$store.dispatch('fetchSubscribers');
    }
  }
</script>

<style lang="scss" scoped>
body {
  padding: 0;
}
table {
  .sticky {
    position: sticky;
  }
}
</style>