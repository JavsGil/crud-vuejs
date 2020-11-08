<template>
  <div id="app">
  <router-link to="/empleados">Empleados</router-link> |
  <router-link to="/contratistas">Contratistas</router-link> |
  <router-link to="/reporte">Reporte</router-link>
<router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    // Contratistas
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
