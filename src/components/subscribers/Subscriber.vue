// Experimental

<template>
  <li @mouseover="hoveredItem = true" @mouseleave="hoveredItem = false" class="list-group-item">
    <div class="form-row">
      <div class="col-xl-1 col-lg-1">
        {{ index }}
      </div>
      <div class="col-xl-2 col-lg-2">
        {{ subscriber.date | dateShort }}, {{ subscriber.date | time }}
      </div>
      <div class="col-xl-2 col-lg-2">
        {{ subscriber.country }}
      </div>
      <div class="col-xl-2 col-lg-2">
        {{ subscriber.name }}
      </div>
      <div class="col-xl-3 col-lg-3">
        {{ subscriber.email }}
      </div>
      <div class="col-xl-2 col-lg-2">
        {{ subscriber.phone }}
      </div>
      <span v-if="hoveredItem" @click="deleteSubscriber" @mouseover="btnHover(true)" @mouseleave="btnHover(false)" v-bind:class="{ 'delete-hover': displayDeleteBtn }" class="delete-button">
        <i class="fas fa-trash-alt"></i>
      </span>
    </div>
  </li>
</template>

<script>
  export default {
    props: ['subscriber', 'index'],
    data() {
      return {
        hoveredItem: false,
        displayDeleteBtn: false,
        error: null
      }
    },
    methods: {
      deleteSubscriber() {
        this.error = this.post = null;
      },
      btnHover(hovered) {
        if (hovered) {
          this.displayDeleteBtn = true;
        } else {
          this.displayDeleteBtn = false;
        }
      } 
    }
  }
</script>

<style scoped>
  .delete-button {
    position: absolute;
    right: 15px;
    color: #8dbe48;
    cursor: pointer;
  }
  .delete-hover {
    color: #161616;
  }

</style>