<template>
  <!-- https://pictogrammers.com/library/mdi/icon/monitor/ -->
  <v-card class="mx-auto" width="500" prepend-icon="mdi-monitor">
    <template v-slot:title>
      {{ title }}
    </template>
    <v-card-text>
      <p class="text">{{ explain }}</p>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">技術</th>
            <th scope="col">経験年数</th>
            <th scope="col">レベル</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in items" :key="index">
            <td>{{ item.tech }}</td>
            <td>{{ item.years }}</td>
            <td>
              <v-rating
                background-color="orange lighten-3"
                color="blue"
                large
                v-model=item.level
                size="20"
                readonly
              ></v-rating>
            </td>
          </tr>
        </tbody>
      </table>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'cmp-card-skill',
  props: {
    title: String,
    explain: String,
    items: [
      {
        tech: String,
        years: String,
        level: String,
      }
    ],
  },
  // data() {
  //   return {
  //     items: [
  //       { tech: "HTML", years: "3年半", level: 3 },
  //       { tech: "CSS", years: "3年半", level: 3 },
  //     ],
  //   };
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
