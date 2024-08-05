<template>
  <v-app-bar class="" app>
    <v-app-bar-title class="text-left pc-only">
      Kotomi Sasaki's Portfolio
    </v-app-bar-title>
    <template v-slot:append>
      <font-awesome-icon icon="fa-solid fa-address-card" class="mr-1"/><a href="#profile" class="text-black-50 mr-3">Profile</a>
      <font-awesome-icon icon="fa-solid fa-square-pen" class="mr-1"/><a href="#skill" class="text-black-50 mr-3">Skill</a>
      <font-awesome-icon icon="fa-solid fa-cube" class="mr-1"/><a href="#works" class="text-black-50 mr-3">Works</a>
      <font-awesome-icon icon="fa-solid fa-envelope" class="mr-1"/><a href="#contact" class="text-black-50 mr-3">Contact</a>
    </template>
  </v-app-bar>
</template>

<script>
// import { useHead } from '@unhead/vue'

export default {
  name: 'cmp-header',
  props: {
    // title: String,
    windowSize: {
        x: String,
        y: String,
      },
  },
}

// useHead({
//   // title: 'usehead',
//   // meta: [
//   //   {
//   //     name: "discription",
//   //     content: "WEB制作やプログラミングについて語るブログです",
//   //   },
//   // ],
//   // script: [
//   //   {
//   //     src: '/hoge/hoge.js',
//   //     tagPosition: 'bodyClose'
//   //   },
//   // ],
//   link: [
//     {
//       href: 'https://use.fontawesome.com/releases/v6.2.0/css/all.css',
//       rel: 'stylesheet'
//     },
//   ],
// })
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
