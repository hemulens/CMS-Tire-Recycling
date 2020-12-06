<template>
  <div class="card">
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
  </div>
</template>

<script>
export default {
  props: ['page'],
  computed: {
    inquiry() {
      return this.$store.getters.selectedInquiry;
    }
  },
  methods: {
    deleteItem() {
      this.$store.dispatch('deleteInquiry', {
        param: this.inquiry._id,
        page: this.page
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  height: 80vh;
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