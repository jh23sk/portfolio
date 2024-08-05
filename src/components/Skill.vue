<template>
  <section class="section" id="skill">
    <v-col style="height: 70px;"></v-col>
    <h2 class="display-5">
      <font-awesome-icon icon="fa-solid fa-square-pen" class="mr-3"/>
      <span class="section-title-css">Skill</span>
    </h2>
    <p class="text px-3 mb-1">
      ※1 {{ noteComment.note1 }}
    </p>
    <p class="text px-3 mb-1">
      ※2 {{ noteComment.note2 }}
    </p>
    <CardSkill :cardType=frontCard :noteComment=noteComment></CardSkill>
    <CardSkill :cardType=BackCard :noteComment=noteComment></CardSkill>
    <CardSkill :cardType=DBCard :noteComment=noteComment></CardSkill>
    <CardSkill :cardType=OtherCard :noteComment=noteComment></CardSkill>
  </section>
</template>

<script>
import CardSkill from './CardSkill.vue';

export default {
  name: 'cmp-skill',
  props: {
  },
  components: {
    CardSkill,
  },
  data() {
    return {
      frontCard: {
        title: "フロントエンド",
        explain: "このサイトではVue3, Bootstrap5等を使用しました。",
        items: [
          { tech: "HTML", note1: false, note2: false, years: "3年半", rating: 4 },
          { tech: "CSS", note1: false, note2: false, years: "3年半", rating: 4 },
          { tech: "Bootstrap", note1: false, note2: false, years: "3年半", rating: 4 },
          { tech: "JavaScript", note1: false, note2: false, years: "3年半", rating: 4 },
          { tech: "jQuery", note1: false, note2: false, years: "3年半", rating: 4 },
          { tech: "Vue.js", note1: true, note2:false, years: "1ヶ月", rating: 3 },
        ],
        icon: "mdi-monitor",
      },
      BackCard: {
        title: "バックエンド",
        explain: "直近ではPythonを使用しています。",
        items: [
          { tech: "VB.NET(ASP.NET)", note1: false, note2: false, years: "2年半", rating: 4 },
          { tech: "Python(Django, Flask)", note1: true, note2:false, years: "半年", rating: 3 },
          { tech: "TypeScript(Express + Node.js)", note1: true, note2:false, years: "4ヶ月", rating: 2 },
          { tech: "Java(JSP/サーブレット)", note1: false, note2:true, years: "半年", rating: 3 },
          { tech: "PHP(Laravel)", note1: false, note2: true, years: "半年", rating: 2 },
        ],
        icon: "mdi-monitor",
      },
      DBCard: {
        title: "DB",
        explain: "SQL ServerのTransact-SQLも使用可能です。",
        items: [
          { tech: "SQL Server", note1: false, note2: false, years: "2年半", rating: 4 },
          { tech: "PostgreSQL", note1: true, note2:false, years: "4ヶ月", rating: 3 },
          { tech: "MariaDB", note1: false, note2:true, years: "4ヶ月", rating: 3 },
        ],
        icon: "mdi-database",
      },
      OtherCard: {
        title: "その他",
        explain: "AWSはCodeCommit, CodeBuild, CodeDeploy, CodePipeline,CloudWatchを使用しています。",
        items: [
          { tech: "Windowsバッチ", note1: false, note2: false, years: "2年半", rating: 3 },
          { tech: "SVN", note1: false, note2: false, years: "2年半", rating: 4 },
          { tech: "Git", note1: true, note2: false, years: "4ヶ月", rating: 3 },
          { tech: "AWS", note1: true, note2: false, years: "4ヶ月", rating: 2 },
          { tech: "Docker", note1: true, note2: false, years: "4ヶ月", rating: 3 },
          { tech: "pytest", note1: true, note2: false, years: "1ヶ月", rating: 3 },
          { tech: "Postman", note1: true, note2: false, years: "1ヶ月", rating: 3 },
          { tech: "Heroku", note1: false, note2: true, years: "半年", rating: 2 },
        ],
        icon: "mdi-note",
      },
      noteComment: {
        note1: "直近のプロジェクトで使用しており、現在勉強中です。",
        note2: "職業訓練校または自己研鑽で使用しました。",
      }
    };
  },
}
</script>

<style scoped>
</style>
