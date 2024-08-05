<template>
  <header>
    <h1 class="display-4">Kotomi Sasaki's Portfolio</h1>
    <VTooltip open-on-hover distance="8" class="v-tooltip" placement="top">
      <img alt="愛猫の画像" src="../assets/img/profile.png" class="rounded" :height="windowSize.y*0.4">
      <template #popper>愛猫のごま＆しおです</template>
    </VTooltip>
  </header>
</template>

<script>

export default {
  name: 'cmp-header',
  props: {
    windowSize: {
        x: String,
        y: String,
      },
  },
}
</script>

<style scoped>
</style>
