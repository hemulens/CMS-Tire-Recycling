<template>
  <div class="container-fluid">
    <div class="row">
      <search-form></search-form>
    </div>
  </div>
  <div class="container-fluid">
    <div class="form-row">
      <div class="col-md-5 item-list">
        <app-inquiry v-for="inquiry in inquiries" :key="inquiry._id" :inquiry="inquiry" :selectedId="selectedInquiryId"></app-inquiry>
        <button @click="loadMore" class="btn btn-secondary btn-sm btn-block">Load more</button>
      </div>
      <div class="col-md-7">
        <inquiry-details></inquiry-details>
      </div>
    </div>
  </div>
</template>

<script>
  import Inquiry from './Inquiry.vue';
  import InquiryDetails from './InquiryDetails.vue';
  import SearchForm from '../search/SearchForm.vue';
  export default {
    components: {
      AppInquiry: Inquiry,
      InquiryDetails: InquiryDetails,
      SearchForm: SearchForm
    },
    data() {
      return {
        currentPage: 1
      }
    },
    computed: {
      inquiries() {
        return this.$store.getters.inquiries;
      },
      selectedInquiryId() {
        const selectedInquiry = this.$store.getters.selectedInquiry;
        if (!selectedInquiry) {
          return null;
        }
        return selectedInquiry._id;
      }
    },
    watch: {
      inquiries() {
        return this.$store.getters.inquiries;
      }
    },
    methods: {
      loadMore() {
        this.currentPage++;
        this.$store.dispatch('loadMoreInquiries', this.currentPage);
        // console.log('loadMore');
        // console.log(this.$store.getters.inquiries);
        this.inquiries = this.$store.getters.inquiries;
      }
    },
    created() {
      this.$store.dispatch('fetchInquiries');
    }
  }
</script>

<style scoped>
.item-list {
  overflow: -moz-scrollbars-vertical; 
  overflow-y: scroll;
  height: 80vh;
}
</style>

