<template>
  <ul class="list-group">
    <app-subscriber v-for="(subscriber, index) in subscribers.slice().reverse()" v-bind:key="subscriber._id" v-bind:subscriber="subscriber" v-bind:index="subscribers.length - index"></app-subscriber>
  </ul>
</template>

<script>
  import Subscriber from './Subscriber.vue';
  export default {
    data: function() {
      return {
        
      }
    },
    components: {
      appSubscriber: Subscriber
    },
    computed: {
      subscribers() {
        return this.$store.getters.subscribers;  // create func in $store
      }
    }
  }
</script>