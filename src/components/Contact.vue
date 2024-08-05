<template>
  <section class="section" id="contact">
    <v-col style="height: 70px;"></v-col>
    <h2 class="display-5">
      <font-awesome-icon icon="fa-solid fa-envelope" class="mr-3"/>
      <span class="section-title-css">Contact</span>
    </h2>
      <v-container class="pt-2">
        <v-card elevation="16" class="mx-auto bg-clear-white" max-width="400">
          <v-card-text>
            <p class="text m-0 px-3 py-1">
              ご連絡の際は際はこちらの<br>
              メールアドレスへお願いいたします。
              <a class="fs-6 text-decoration-underline" href="mailto:s13ak44@gmail.com">s13ak44@gmail.com</a>
            </p>
          </v-card-text>
        </v-card>
      </v-container>
  </section>
</template>

<script>
export default {
  name: 'cmp-contact',
  props: {
  },
}
</script>

<style scoped>
</style>
