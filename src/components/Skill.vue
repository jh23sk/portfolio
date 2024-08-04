<template>
  <section class="section" id="skill">
    <h1><font-awesome-icon icon="fa-solid fa-square-pen" class="mr-1"/><span class="section-title-css">SKILL</span></h1>
    <p class="text px-3 mb-1">※1：直近のプロジェクトで使用しており、現在勉強中です。</p>
    <p class="text px-3 m-0">※2：職業訓練校、及び自己研鑽で使用しました。業務経験はありません。</p>
    <!-- <CardSkill :cardType=designCard></CardSkill> -->
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
    //   designCard: {
    //     title: "デザイン・コーディング",
    //     explain: "基本的なことは一通りできます。",
    //     items: [
    //     { tech: "HTML", years: "3年半", rating: 4 },
    //     { tech: "CSS", years: "3年半", rating: 4 },
    //   ],
    //   icon: "mdi-monitor",
    // },
    frontCard: {
      title: "フロントエンド",
      explain: "このサイトではVue3, Bootstrap5等を使用しました。",
      items: [
          { tech: "HTML", years: "3年半", rating: 4 },
          { tech: "CSS", years: "3年半", rating: 4 },
          { tech: "Bootstrap", years: "3年半", rating: 4 },
          { tech: "JavaScript", years: "3年半", rating: 4 },
          { tech: "TypeScript ※1", years: "4ヶ月", rating: 3 },
          { tech: "jQuery", years: "3年半", rating: 4 },
          { tech: "Vue.js ※1", years: "1ヶ月", rating: 3 },
          { tech: "Node.js ※1", years: "4ヶ月", rating: 2 },
        ],
        icon: "mdi-monitor",
      },
      BackCard: {
        title: "バックエンド",
        explain: "直近では〜",
        items: [
          { tech: "VB.NET(ASP.NET)", years: "2年半", rating: 4 },
          { tech: "Python(Django, Flask) ※1", years: "半年", rating: 3 },
          { tech: "Java(JSP/サーブレット) ※2", years: "半年", rating: 3 },
          { tech: "PHP(Laravel) ※2", years: "半年", rating: 3 },
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
