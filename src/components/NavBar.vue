<template>
  <v-app-bar app>
    <v-app-bar-title class="text-left pc-only">
      Kotomi Sasaki's Portfolio
    </v-app-bar-title>
    <template v-slot:append>
      <font-awesome-icon icon="fa-solid fa-address-card" class="mr-1"/><a href="#profile" class="text-black-50 mr-3">Profile</a>
      <font-awesome-icon icon="fa-solid fa-square-pen" class="mr-1"/><a href="#skill" class="text-black-50 mr-3">Skill</a>
      <font-awesome-icon icon="fa-solid fa-cube" class="mr-1"/><a href="#works" class="text-black-50 mr-3">Works</a>
      <font-awesome-icon icon="fa-solid fa-envelope" class="mr-1"/><a href="#contact" class="text-black-50 mr-2">Contact</a>
    </template>
  </v-app-bar>
</template>

<script>
export default {
  name: 'cmp-nav-bar',
  props: {
  },
}
</script>

<style scoped>
</style>
