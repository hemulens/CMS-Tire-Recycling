<template>
  <div class="container-fluid">
    <div class="row mt-3">
      <base-form class="col-md-12">
        <form @submit.prevent="">
          <div class="form-row">
            <div class="form-group col-md-2">
              <!-- <label for="inputEmail">Name</label> -->
              <input type="text" class="form-control form-control-sm" id="inputName" placeholder="Name">
            </div>
            <div class="form-group col-md-2">
              <!-- <label for="inputEmail">Email</label> -->
              <input type="email" class="form-control form-control-sm" id="inputEmail" placeholder="Email">
            </div>
            <div class="form-group col-md-2">
              <!-- <label for="inputCountry">Countries</label> -->
              <select id="inputCountry" class="form-control form-control-sm custom-select custom-select-sm">
                <option value="" selected disabled>Country</option>
                <option v-for="country in countries" :key="country">{{ country }}</option>
              </select>
            </div>
            <div class="form-group col-md-3">
              <button type="submit" class="btn btn-secondary btn-sm">
                Search
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                  <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                </svg>
              </button>
            </div>
          </div>
        </form>
      </base-form>
    </div>
  </div>
</template>

<script>
export default {
  inject: ['countries'],
  
}
</script>

<style lang="scss" scoped>

</style>