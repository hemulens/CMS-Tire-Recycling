<template>
  <div v-if="!inquiry" class="card-body">
    Select inquiry
  </div>
  <div v-else>
    <div class="card-header">
      {{ $filters.dateShort(inquiry.date) }}, {{ $filters.time(inquiry.date) }}
    </div>
    <div class="card-body">
      <ul>
        <li><b>Name:</b> {{ inquiry.name }}</li>
        <li><b>Email:</b> {{ inquiry.email }}</li>
        <li><b>Phone:</b> {{ inquiry.phone }}</li>
        <li><b>Country:</b> {{ inquiry.country }}</li>
        <li><b>Budget:</b> {{ inquiry.budget }}</li>
        <li><b>Experience:</b> {{ inquiry.bgr }}</li>
        <br>
        <li><b>Message:</b> {{ inquiry.text }}</li>
        <br>
        <li><b>Page:</b> {{ inquiry.page }}</li>
      </ul>
      <div class="control-buttons">
        <button @click="deleteItem" class="btn btn-secondary btn-sm">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // inject: ['inquiries'],
  props: ['page', 'inquiries'],
  computed: {
    inquiryId() {
      return this.$route.params.inquiryId;
    },
    inquiry() {
      return this.inquiries.find(inq => inq._id === this.inquiryId);
    }
  },
  methods: {
    loadInquiryDetails(inquiryId) {
      const inquiries = this.inquiries;
      const inquiry = inquiries.find(el => el._id === inquiryId);
      this.$store.commit('selectInquiry', inquiry);
    },
    deleteItem() {
      this.$store.dispatch('deleteInquiry', {
        id: this.inquiry._id,
        page: this.page
      });
    }
  },
  created() {
    // this.loadInquiryDetails(this.inquiryId);
  },
  // reusing the same component with new data, because route changed; alternative to watch (below)
  beforeRouteUpdate(to, from, next) {
    // console.log(to, from);
    this.loadInquiryDetails(to.params.inquiryId);
    // console.log(this.inquiryId);
    next();
  }
}
</script>

<style lang="scss" scoped>
.card {
  min-height: 80vh;
}
.card-header {
  padding: 0.3rem 0.5rem;
}
.card-body {
  ul {
    list-style: none;
    padding-left: 0;
  }
  .control-buttons {
    position: absolute;
    bottom: 30px;
    right: 20px;
  }
}
</style>