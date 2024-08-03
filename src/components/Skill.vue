<template>
  <section class="section" id="skill">
    <h1 class=""><font-awesome-icon icon="fa-solid fa-square-pen" class="mr-1"/><span class="section-title-css">SKILL</span></h1>
    <CardSkill v-bind:cardType=designCard></CardSkill>
    <CardSkill v-bind:cardType=designFront></CardSkill>
    <CardSkill v-bind:cardType=designBack></CardSkill>
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
      designCard: {
        title: "デザイン・コーディング",
        explain: "基本的なことは一通りできます。",
        items: [
          { tech: "HTML", years: "3年半", level: 3 },
          { tech: "CSS", years: "3年半", level: 3 },
        ],
      },
      designFront: {
        title: "フロントエンド",
        explain: "直近では〜",
        items: [
          { tech: "HTML", years: "3年半", level: 3 },
          { tech: "CSS", years: "3年半", level: 3 },
          { tech: "CSS", years: "3年半", level: 3 },
        ],
      },
      designBack: {
        title: "バックエンド",
        explain: "直近では〜",
        items: [
          { tech: "HTML", years: "3年半", level: 3 },
          { tech: "CSS", years: "3年半", level: 3 },
        ],
      },
    };
  },
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
