<template>
  <ul class="list-group">
    <app-subscriber v-for="(subscriber, index) in subscribers.slice().reverse()" :key="subscriber._id" :subscriber="subscriber" :index="subscribers.length - index"></app-subscriber>
  </ul>
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