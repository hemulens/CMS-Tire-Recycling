<template>
  <div class="col-xl-4 col-md-6 col-xs-6">
    <div class="card mb-4">
      <div class="card-header">
        <div class="float-left float-xl-left float-lg-left float-md-left float-sm-left">
          {{ inquiry.date | date }}, {{ inquiry.date | time }}
        </div>
        <div class="float-right float-xl-right float-lg-right float-md-right float-sm-right">
          {{ inquiry.country }}
        </div>
      </div>
      <div class="card-body">
        <div class="float-left float-xl-left float-lg-left float-md-left float-sm-left">
          <p>{{ inquiry.name }}</p>
        </div>
        <div class="float-right float-xl-right float-lg-right float-md-right float-sm-right">
          <button class="btn btn-success">Button</button>
        </div>
      </div>
      <!-- {{ inquiry }} -->
    </div>
  </div>
</template>

<script>
  export default {
    props: ['inquiry'],
  }
</script>

<style scoped>

</style>