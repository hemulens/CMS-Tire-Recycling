<template>
  <div class="container-fluid">
    <div class="row mt-3">
      <base-form class="col-md-12">
        <form @submit.prevent="">
          <div class="form-row">
            <div class="form-group col-md-3">
              <label for="inputEmail">Name</label>
              <input type="text" class="form-control form-control-sm" id="inputName">
            </div>
            <div class="form-group col-md-3">
              <label for="inputEmail">Email</label>
              <input type="email" class="form-control form-control-sm" id="inputEmail">
            </div>
            <div class="form-group col-md-3">
              <label for="inputCountry">Countries</label>
              <select id="inputCountry" class="form-control form-control-sm">
                <option value="" disabled>Select country</option>
                <option v-for="country in countries" :key="country">{{ country }}</option>
              </select>
            </div>
          </div>
          <div class="form-group">
            <label for="inputAddress">Address</label>
            <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
          </div>
          <div class="form-group">
            <label for="inputAddress2">Address 2</label>
            <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputCity">City</label>
              <input type="text" class="form-control" id="inputCity">
            </div>
            <div class="form-group col-md-4">
              <label for="inputState">State</label>
              <select id="inputState" class="form-control">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div class="form-group col-md-2">
              <label for="inputZip">Zip</label>
              <input type="text" class="form-control" id="inputZip">
            </div>
          </div>
          <div class="form-group">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck">
              <label class="form-check-label" for="gridCheck">
                Check me out
              </label>
            </div>
          </div>
          <button type="submit" class="btn btn-primary">Sign in</button>
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