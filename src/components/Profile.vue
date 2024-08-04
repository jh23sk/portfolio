<template>
  <section class="section" id="Profile">
    <h1><font-awesome-icon icon="fa-solid fa-address-card" class="mr-1"/><span class="section-title-css">PROFILE</span></h1>
    <!-- <v-card v-resize="$emit('onResize')" class="mx-auto bg-white" max-width="600" variant="outlined"> -->
      <v-container>
        <v-card elevation="16" class="mx-auto" max-width="600" style="background-color: rgba(255, 255, 255, 0.7);">
          <v-card-text>
            <p class="text m-0 px-3 py-1" style="line-height: 1.8;">
              <!--
              -->はじめまして。佐々木琴美と申します。<br><!--
              -->宮城県仙台市出身・在住の、猫好きの28歳です。<br><!--
              -->社会人歴は6年目、IT業界歴は4年目（2024年8月で経験年数3年）です。<br><!--
              -->文系の高校・大学を卒業後、新卒で不動産会社に入社し<br class="pc-only"><!--
              -->賃貸部門の事務として勤務しました。<br><!--
              -->業務で賃貸管理システムを使用したことがきっかけで、<br class="pc-only"><!--
              -->システムを使う側から作る側になってみたいと感じ、<br class="pc-only"><!--
              -->エンジニアを目指して職業訓練校に入所しました。<br><!--
              -->卒業後は現在の勤務先であるSES企業に入社し、<br class="pc-only"><!--
              -->業務システムの開発（基本設計〜導入）に携わっています。
            </p>
          </v-card-text>
        </v-card>
      </v-container>
  </section>
</template>

<script>
export default {
  name: 'cmp-profile',
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
