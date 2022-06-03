<template>
  <v-main></v-main>
  <v-department></v-department>
</template>

<script>
import vMain from './components/v-main.vue'
import vDepartment from './components/v-department.vue'
export default {
  name: 'App',
  components: {
    vMain,
    vDepartment
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
