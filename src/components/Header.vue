<template>
  <header>
    <h1>{{ msg }}</h1>
    <div>
      <img alt="愛猫のごましおです" src="../assets/image/profile.png" class="rounded img-fluid" style="max-width: 30%; height: auto;">
    </div>
    <nav id="gnav">
      <ul>
        <!-- <li><i class="fa-solid fa-address-card"></i><a href="#Profile">PROFILE</a></li>
        <li><i class="fa-solid fa-square-pen"></i><a href="#skill">SKILL</a></li>
        <li><i class="fa-solid fa-envelope"></i><a href="#contact">CONTACT</a></li> -->
        <li><font-awesome-icon icon="fa-solid fa-address-card"/><a href="#Profile">PROFILE</a></li>
        <li><font-awesome-icon icon="fa-solid fa-square-pen"/><a href="#skill">SKILL</a></li>
        <li><font-awesome-icon icon="fa-solid fa-envelope"/><a href="#contact">CONTACT</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { useHead } from '@unhead/vue'

export default {
  name: 'cmp-header',
  props: {
    msg: String
  },
}

useHead({
  // title: 'usehead',
  // meta: [
  //   {
  //     name: "discription",
  //     content: "WEB制作やプログラミングについて語るブログです",
  //   },
  // ],
  // script: [
  //   {
  //     src: '/hoge/hoge.js',
  //     tagPosition: 'bodyClose'
  //   },
  // ],
  link: [
    {
      href: 'https://use.fontawesome.com/releases/v6.2.0/css/all.css',
      rel: 'stylesheet'
    },
  ],
})
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
