<template>
  <v-layout>
    <NavBar/>
    <v-main>
      <span v-resize="onResize"></span>
      <Header class="pt-5" :windowSize="windowSize"/>
      <Profile/>
      <Skill/>
      <Works/>
      <Contact class="mb-5"/>
      <Footer/>
    </v-main>
  </v-layout>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Header from './components/Header.vue'
import Profile from './components/Profile.vue';
import Skill from './components/Skill.vue';
import Works from './components/Works.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    Header,
    Profile,
    Skill,
    Works,
    Contact,
    Footer,
  },
  data() {
    return {
      windowSize: {
        x: 0,
        y: 0,
      },
    };
  },
    mounted () {
      this.onResize()
    },
    methods: {
      onResize () {
        this.windowSize = { x: window.innerWidth, y: window.innerHeight }
      },
    },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: linear-gradient(90deg, rgba(171, 176, 255, 1), rgba(246, 204, 172, 1) 19%, rgba(224, 216, 239, 1) 31%, rgba(239, 248, 255, 1) 61%);
}
</style>
