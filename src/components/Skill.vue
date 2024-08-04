<template>
  <section class="section" id="skill">
    <h1 class=""><font-awesome-icon icon="fa-solid fa-square-pen" class="mr-1"/><span class="section-title-css">SKILL</span></h1>
    <CardSkill :cardType=designCard></CardSkill>
    <CardSkill :cardType=frontCard></CardSkill>
    <CardSkill :cardType=BackCard></CardSkill>
    <CardSkill :cardType=DBCard></CardSkill>
    <CardSkill :cardType=ServerCard></CardSkill>
    <CardSkill :cardType=OtherCard></CardSkill>
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
        icon: "mdi-monitor",
      },
      frontCard: {
        title: "フロントエンド",
        explain: "直近のプロジェクトではVue.jsを使用しています。このサイトでも使用しました。",
        items: [
          { tech: "HTML", years: "3年半", level: 3 },
          { tech: "CSS", years: "3年半", level: 3 },
          { tech: "CSS", years: "3年半", level: 3 },
        ],
        icon: "mdi-monitor",
      },
      BackCard: {
        title: "バックエンド",
        explain: "直近では〜",
        items: [
          { tech: "HTML", years: "3年半", level: 3 },
          { tech: "CSS", years: "3年半", level: 3 },
        ],
        icon: "mdi-monitor",
      },
      DBCard: {
        title: "DB",
        explain: "直近では〜",
        items: [
          { tech: "HTML", years: "3年半", level: 3 },
          { tech: "CSS", years: "3年半", level: 3 },
        ],
        icon: "mdi-database",
      },
      ServerCard: {
        title: "インフラ・サーバー",
        explain: "直近では〜",
        items: [
          { tech: "HTML", years: "3年半", level: 3 },
          { tech: "CSS", years: "3年半", level: 3 },
        ],
        icon: "mdi-server",
      },
      OtherCard: {
        title: "その他",
        explain: "直近では〜",
        items: [
          { tech: "HTML", years: "3年半", level: 3 },
          { tech: "CSS", years: "3年半", level: 3 },
        ],
        icon: "mdi-note",
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
