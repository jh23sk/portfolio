<template>
  <section class="section" id="skill">
    <h2 class=""><font-awesome-icon icon="fa-solid fa-square-pen" class="mr-1"/><span class="section-title-css">SKILL</span></h2>

    <!-- <v-card
      loading
      title="Card title"
      subtitle="Subtitle"
      text="..."
    >
  <v-card-actions>
    <v-btn>Click me</v-btn>
  </v-card-actions>
</v-card>     -->

    <v-card class="mx-auto" width="400" prepend-icon="mdi-home">
      <template v-slot:title>
        This is a title
      </template>

      <v-card-text>
        This is content
      </v-card-text>
    </v-card>
  </section>
</template>

<script>
export default {
  name: 'cmp-skill',
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
