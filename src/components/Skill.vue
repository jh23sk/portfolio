<template>
  <section class="section" id="skill">
    <h1><font-awesome-icon icon="fa-solid fa-square-pen" class="mr-1"/><span class="section-title-css">SKILL</span></h1>
    <p class="text">※1：直近のプロジェクトで使用しており、現在勉強中です。</p>
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
          { tech: "HTML", years: "3年半", rating: 4 },
          { tech: "CSS", years: "3年半", rating: 4 },
        ],
        icon: "mdi-monitor",
      },
      frontCard: {
        title: "フロントエンド",
        explain: "このサイトではVue3, Bootstrap5を使用しました。",
        items: [
          { tech: "JavaScript", years: "3年半", rating: 4 },
          { tech: "TypeScript ※1", years: "4ヶ月", rating: 3 },
          { tech: "CSS", years: "3年半", rating: 3 },
        ],
        icon: "mdi-monitor",
      },
      BackCard: {
        title: "バックエンド",
        explain: "直近では〜",
        items: [
          { tech: "HTML", years: "3年半", rating: 3 },
          { tech: "CSS", years: "3年半", rating: 3 },
        ],
        icon: "mdi-monitor",
      },
      DBCard: {
        title: "DB",
        explain: "直近では〜",
        items: [
          { tech: "HTML", years: "3年半", rating: 3 },
          { tech: "CSS", years: "3年半", rating: 3 },
        ],
        icon: "mdi-database",
      },
      ServerCard: {
        title: "インフラ・サーバー",
        explain: "直近では〜",
        items: [
          { tech: "HTML", years: "3年半", rating: 3 },
          { tech: "CSS", years: "3年半", rating: 3 },
        ],
        icon: "mdi-server",
      },
      OtherCard: {
        title: "その他",
        explain: "直近では〜",
        items: [
          { tech: "HTML", years: "3年半", rating: 3 },
          { tech: "CSS", years: "3年半", rating: 3 },
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
