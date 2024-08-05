<template>
  <section class="section" id="profile">
    <v-col style="height: 70px;"></v-col>
    <h2 class="display-5">
      <font-awesome-icon icon="fa-solid fa-address-card" class="mr-3"/>
      <span class="section-title-css">Profile</span>
    </h2>
      <v-container class="pt-2">
        <v-card elevation="16" class="mx-auto bg-clear-white" max-width="600">
          <v-card-text>
            <p class="text m-0 px-4 py-1 text-left">
              <!--
              -->はじめまして。佐々木琴美と申します。<br><!--
              -->宮城県仙台市出身・在住の28歳です。<br><!--
              -->社会人歴は6年目、IT業界歴は4年目（2024年8月で経験年数3年）です。<br><!--
              -->文系の高校・大学を卒業後、新卒で不動産会社に入社し<br class="pc-only"><!--
              -->賃貸部門の事務として勤務していました。<br><!--
              -->業務で賃貸管理システムを使用したことがきっかけで<br class="pc-only"><!--
              -->エンジニアを目指し始め、職業訓練校に通いゼロから勉強しました。<br><!--
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
  props: {
  },
}
</script>

<style scoped>
</style>
