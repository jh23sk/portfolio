<template>
  <head>
    <link href="https://use.fontawesome.com/releases/v6.2.0/css/all.css" rel="stylesheet">
  </head>
  <Header msg="Kotomi Sasaki's Portfolio"/>
  <!-- <sample msg="Kotomi Sasaki's Portfolio"/> -->
</template>

<script>
import Header from './components/Header.vue'
// import sample from './components/sample.vue'

export default {
  name: 'App',
  components: {
    Header,
    // sample
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
