<template>
  <div class="card mb-1" :class="{active: isSelected}" @click="openInquiry(inquiry)">
    <div class="card-body">
      <div class="form-row">
        <div class="col-1">
          {{ adjustedIndex }}
        </div>
        <div class="col-3">
          {{ $filters.dateShort(inquiry.date) }}, {{ $filters.time(inquiry.date) }}
        </div>
        <div class="col-4">
          {{ inquiry.name }}
        </div>
        <div class="col-4">
          {{ inquiry.country }}
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="card mb-2">
    <div class="card-header">
      <div class="float-left float-xl-left float-lg-left float-md-left float-sm-left">
        {{ $filters.dateShort(inquiry.date) }}, {{ $filters.time(inquiry.date) }}
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
        <button class="btn btn-secondary btn-sm">Button</button>
      </div>
    </div>
    {{ inquiry }}
  </div> -->
</template>

<script>
  export default {
    props: ['inquiry', 'selectedId', 'index', 'page'],
    data() {
      return {
        inqPerPage: 100
      }
    },
    computed: {
      isSelected() {
        return this.inquiry._id === this.selectedId;
      },
      adjustedIndex() {
        return this.inqPerPage * (this.page - 1) + (this.index + 1);
      },
    },
    methods: {
      openInquiry(inquiry) {
        this.$store.commit('selectInquiry', inquiry);
      }
    },
    // created() {
    //   console.log(this.isSelected);
    // }
  }
</script>

<style lang="scss" scoped>
  .card {
    &:hover {
      cursor: pointer;
      background-color: rgba(0,0,0,.03);
    }
    &.active {
      background-color: rgba(0,0,0,.03);
    }
  }
  .card-body {
    padding: 0.3rem 0.5rem;
  }
</style>