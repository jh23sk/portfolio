<template>
  <header>
    <!-- <v-container> -->
    <h1>Kotomi Sasaki's Portfolio</h1>
    <!-- TODO：ツールチップ入れたい -->
    <img alt="愛猫のごましおです" src="../assets/img/profile.png" class="rounded" :height="windowSize.y*0.4">
    <!-- TODO：トップに固定したい -->
    <nav id="gnav" class="mt-3">
      <ul>
        <li class="pr-4"><font-awesome-icon icon="fa-solid fa-address-card" class="mr-1"/><a href="#Profile">PROFILE</a></li>
        <li class="pr-4"><font-awesome-icon icon="fa-solid fa-square-pen" class="mr-1"/><a href="#skill">SKILL</a></li>
        <li class="pr-4"><font-awesome-icon icon="fa-solid fa-square-pen" class="mr-1"/><a href="#skill">WORKS</a></li>
        <li><font-awesome-icon icon="fa-solid fa-envelope" class="mr-1"/><a href="#contact">CONTACT</a></li>
      </ul>
    </nav>
    <!-- </v-container> -->
  </header>
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
