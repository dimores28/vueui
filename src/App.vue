<template>
  <div class="v-main-wrapper container">
       <h3 class="d-flex justify-content-center">
          Vue JS Front End
      </h3>
      <h5 class="d-flex justify-content-center">
          Employee Management Portal
      </h5>

      <nav class="navbar navbar-expand-sm bg-light navbar-dark">
          <ul class="navbar-nav">
          <li class="nav-item m-1">
              <router-link class="btn btn-light btn-outline-primary"
              to="/home">Home</router-link>
          </li>
          <li class="nav-item m-1">
              <router-link class="btn btn-light btn-outline-primary"
              to="/department">Department</router-link>
          </li>
          <li class="nav-item m-1">
              <router-link class="btn btn-light btn-outline-primary"
              to="/employee">Employee</router-link>
          </li>
          </ul>
      </nav>

    <router-view></router-view>
   </div>

</template>

<script>

import vMainWrapper from './components/v-main-wrapper.vue'

export default {
  name: 'App',
  components: {
    vMainWrapper
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
