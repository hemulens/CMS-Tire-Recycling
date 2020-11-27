<template>
  <nav class="top navbar fixed-top navbar-expand-md navbar-dark bg-info">
    <router-link to="/" class="navbar-brand">
      <div>
        <span class="logo">W!</span>
      </div>
    </router-link>
    <!-- Collapse button -->
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <!-- Main navbar -->
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav mr-auto">
        <router-link class="nav-item" to="/inquiries" activeClass="active" tag="li"><a class="nav-link">Inquiries</a></router-link>
        <router-link class="nav-item" to="/subscribers" activeClass="active" tag="li"><a class="nav-link">Subscribers</a></router-link>
        <router-link class="nav-item" to="/orders" activeClass="active" tag="li"><a class="nav-link">Orders</a></router-link>
      </ul>
      <ul class="navbar-nav navbar-right">
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

<style scoped lang="scss">
  nav {
    &.top {
      margin-bottom: 30px;
    }
  }
  .navbar {
    padding-top: 0;
    padding-bottom: 0;
  }
  span.logo {
    font-family: "PublicaPlay-Bold";
    display: inline-block;
    // margin: 35px;
    -webkit-transform: scale(1.15, 1);
    -moz-transform: scale(1.15, 1);
    -o-transform: scale(1.15, 1);
    transform: scale(1.15, 1);
  }
</style>