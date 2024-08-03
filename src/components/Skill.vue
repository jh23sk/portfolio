<template>
  <section class="section" id="skill">
    <h1 class=""><font-awesome-icon icon="fa-solid fa-square-pen" class="mr-1"/><span class="section-title-css">SKILL</span></h1>

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

    <!-- https://pictogrammers.com/library/mdi/icon/monitor/ -->
    <!-- <v-card class="mx-auto" width="500" prepend-icon="mdi-monitor">
      <template v-slot:title>
        デザイン・コーディング
      </template>
      <v-card-text>
        <p class="text">基本的なことは一通りできます。</p>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">技術</th>
              <th scope="col">経験年数</th>
              <th scope="col">レベル</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in itemsDesign" :key="index">
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
    </v-card> -->

    <CardSkill
      title="デザイン・コーディング"
      explain="基本的なことは一通りできます。"
      v-bind:items=itemsDesign
    ></CardSkill>
  </section>
</template>

<script>
import CardSkill from './CardSkill.vue';

export default {
  name: 'cmp-skill',
  // props: {
  //   msg: String
  // },
  components: {
    CardSkill,
  },
  data() {
    return {
      itemsDesign: [
        { tech: "HTML", years: "3年半", level: 3 },
        { tech: "CSS", years: "3年半", level: 3 },
      ],
    };
  },
}
// const itemsDesign = [
//         { tech: "HTML", years: "3年半", level: 3 },
//         { tech: "CSS", years: "3年半", level: 3 },
//       ]

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
