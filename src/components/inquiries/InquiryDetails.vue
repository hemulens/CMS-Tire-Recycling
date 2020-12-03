<template>
  <div class="card">
    <div class="card-body">
      <!-- {{ inquiry.text }} -->
      asdsa
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
</style>