<template>
  <!-- <div class="box m-0" height="300px" style="background:tomato;"></div> -->
  <Header title="Kotomi Sasaki's Portfolio" class="pt-5"/>
  <Profile class="m-5"/>
  <Skill class="m-5"/>
  <!-- <sample msg="Kotomi Sasaki's Portfolio"/> -->
</template>

<script>
import Header from './components/Header.vue'
import Profile from './components/Profile.vue';
import Skill from './components/Skill.vue';
// import { useHead } from '@unhead/vue'

export default {
  name: 'App',
  components: {
    Header,
    Profile,
    Skill,
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  /* background-image: linear-gradient(90deg, rgba(171, 176, 255, 1), rgba(255, 137, 179, 1) 19%, rgba(224, 216, 239, 1) 31%, rgba(216, 237, 255, 1) 61%); */
  background-image: linear-gradient(90deg, rgba(171, 176, 255, 1), rgba(246, 204, 172, 1) 19%, rgba(224, 216, 239, 1) 31%, rgba(239, 248, 255, 1) 61%);
}
</style>
