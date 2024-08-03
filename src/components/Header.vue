<template>
  <header>
    <h1>{{ msg }}</h1>
    <div>
      <img alt="愛猫のごましおです" src="../assets/image/profile.png" class="rounded img-fluid" style="max-width: 30%; height: auto;">
    </div>
    <nav id="gnav">
      <ul>
        <li><font-awesome-icon icon="fa-solid fa-address-card"/><a href="#Profile">PROFILE</a></li>
        <li><font-awesome-icon icon="fa-solid fa-square-pen"/><a href="#skill">SKILL</a></li>
        <!-- <li><font-awesome-icon icon="fa-solid fa-rotate-right"/><a href="#works">WORKS</a></li> -->
        <li><font-awesome-icon icon="fa-solid fa-envelope"/><a href="#contact">CONTACT</a></li>
      </ul>
    </nav>
  </header>
</template>
<script>
export default {
  name: 'cmp-header',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
</style>
