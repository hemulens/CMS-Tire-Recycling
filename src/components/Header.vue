<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link to="/" class="navbar-brand">
      <img src="/src/assets/favicon-weibold.png" alt="Weibold Logo" class="logo">
    </router-link>
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav mr-auto">
        <router-link class="nav-item" to="/inquiries" activeClass="active" tag="li"><a class="nav-link">Inquiries</a></router-link>
        <router-link class="nav-item" to="/subscribers" activeClass="active" tag="li"><a class="nav-link">Subscribers</a></router-link>
        <router-link class="nav-item" to="/orders" activeClass="active" tag="li"><a class="nav-link">Orders</a></router-link>
      </ul>
      <ul class="navbar-nav navbar-right">
        <!-- <li class="nav-item">
          <a class="nav-link" href="#">End Day</a>
        </li> -->
        
        <!-- <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" @click="dropdownOpen = !dropdownOpen" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Save & Load</a>
          <div class="dropdown-menu" :class="{show: dropdownOpen}" aria-labelledby="navbarDropdown" @click="dropdownOpen = !dropdownOpen">
            <a class="dropdown-item" href="#">Save Data</a>
            <a class="dropdown-item" href="#">Load Data</a>
          </div>
        </li> -->
        <li class="nav-item">
          <i class="navbar-text navbar-right">Logged in as <strong >Sergei</strong></i>
        </li>
        <!-- <li class="nav-item">
          <a class="nav-link" href="#">Log out</a>
        </li> -->
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {
    data() {
      return {
        dropdownOpen: false
      }
    }
  }
</script>

<style scoped>
  nav {
    margin-bottom: 30px;
  }
  .logo {
    width: 70px;
  }
</style>