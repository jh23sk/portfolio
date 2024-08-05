<template>
  <section class="section" id="works">
    <v-col style="height: 70px;"></v-col>
    <h2 class="display-5">
      <font-awesome-icon icon="fa-solid fa-cube" class="mr-3"/>
      <span class="section-title-css">Works</span>
    </h2>
      <v-container class="pt-2">
        <v-card elevation="16" class="mx-auto bg-clear-white" max-width="400">
          <v-card-title class="fw-bold">ポートフォリオ</v-card-title>
          <v-card-text>
            <p class="text m-0 px-3 py-1">
              自分自身のポートフォリオです。<br>
              <span class="fst-italic text-black-50">
                Vue.js / Vuetify / Bootstrap
              </span>
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
  props: {
  },
}
</script>

<style scoped>
</style>
