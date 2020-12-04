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
          <li>Name: {{ inquiry.name }}</li>
          <li>Email: {{ inquiry.email }}</li>
          <li>Phone: {{ inquiry.phone }}</li>
          <li>Country: {{ inquiry.country }}</li>
          <li>Budget: {{ inquiry.budget }}</li>
          <li>Experience: {{ inquiry.bgr }}</li>
          <br>
          <li>Message: {{ inquiry.text }}</li>
          <br>
          <li>Page: {{ inquiry.page }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    inquiry() {
      return this.$store.getters.selectedInquiry;
    }
  }
}
</script>

<style scoped>
.card {
  height: 80vh;
}
.card-header {
  padding: 0.3rem 0.5rem;
}
</style>