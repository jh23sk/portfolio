<template>
  <section class="section" id="contact">
    <!-- TODO：最後にclass=""削除する -->
    <v-col class="" style="height: 70px;"></v-col>
    <h2 class="display-5">
      <font-awesome-icon icon="fa-solid fa-envelope" class="mr-3"/>
      <span class="section-title-css">Contact</span>
    </h2>
      <v-container class="pt-2">
        <v-card elevation="16" class="mx-auto bg-clear-white" max-width="400">
          <!-- <v-card-title class="fw-bold">ポートフォリオ</v-card-title> -->
          <v-card-text>
            <p class="text m-0 px-3 py-1">
              ご連絡の際は際はこちらの<br>
              メールアドレスへお願いいたします。
              <span class="fw-bold text-black-50">
                s13ak44@gmail.com
              </span>
            </p>
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
