<template>
  <v-footer class="d-flex align-center justify-center">
    <div>
      <p class="my-2">Copyright &copy; 2024 Kotomi Sasaki. All Rights Reserved.</p>
    </div>
  </v-footer>
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
