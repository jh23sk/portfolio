<template>
  <section class="section" id="works">
    <h2 class="display-5">
      <font-awesome-icon icon="fa-solid fa-cube" class="mr-3"/>
      <span class="section-title-css">Works</span>
    </h2>
      <v-container>
        <v-card elevation="16" class="mx-auto" max-width="400" style="background-color: rgba(255, 255, 255, 0.7);">
          <v-card-title class="fw-bold">ポートフォリオ</v-card-title>
          <v-card-text>
            <p class="text m-0 px-3 py-1">
              自分自身のポートフォリオです。
            </p>
            <p class="fst-italic text-black-50">
              Vue.js / Vuetify / Bootstrap
            </p>
            <a class="fs-6 text-decoration-underline" href="https://github.com/jh23sk/portfolio">GitHub</a>
          </v-card-text>
        </v-card>
      </v-container>
  </section>
</template>

<script>
export default {
  name: 'cmp-works',
  // props: {
  //   msg: String
  // },
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
