<template>
  <div class="row">
    <app-inquiry v-for="inquiry in inquiries" v-bind:key="inquiry._id" v-bind:inquiry="inquiry"></app-inquiry>
  </div>
</template>

<script>
  import Inquiry from './Inquiry.vue';
  export default {
    data: function() {
      return {
        
      }
    },
    components: {
      appInquiry: Inquiry
    },
    computed: {
      inquiries() {
        return this.$store.getters.inquiries;
      }
    }
  }
</script>

