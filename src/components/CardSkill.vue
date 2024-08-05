<template>
  <v-container>
    <v-card class="mx-auto bg-clear-white" max-width="500" variant="outlined" :prepend-icon="cardType.icon">
      <template v-slot:title><span class="fw-bold">{{ cardType.title }}</span></template>
      <v-card-text>
        <p class="text">{{ cardType.explain }}</p>
        <table class="table m-0">
          <thead class="table-secondary">
            <tr class="text-center ">
              <th scope="col" class="px-0" width="35%">技術</th>
              <th scope="col" class="px-0" width="10%"></th>
              <th scope="col" class="px-0" width="23%">経験年数</th>
              <th scope="col" class="px-0" width="32%">レベル</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in cardType.items" :key="index">
              <td class="px-1">{{ item.tech }}</td>
              <td class="px-0">
                <VTooltip v-if="item.note1" open-on-hover distance="8" class="v-tooltip" placement="top">
                  <span>※1</span>
                  <template #popper>{{ noteComment.note1 }}</template>
                </VTooltip>
                <VTooltip v-else-if="item.note2" open-on-hover distance="8" class="v-tooltip" placement="top">
                  <span>※2</span>
                  <template #popper>{{ noteComment.note2 }}</template>
                </VTooltip>
              </td>
              <td>{{ item.years }}</td>
              <td>
                <v-rating color="teal" large v-model=item.rating size="16" readonly></v-rating>
              </td>
            </tr>
          </tbody>
        </table>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'cmp-card-skill',
  props: {
    cardType: {
      title: String,
      explains: String,
      items: [
        {
          tech: String,
          note1: Boolean,
          note2: Boolean,
          years: String,
          rating: Number,
        }
      ],
      icon: String,
    },
    noteComment:{
      note1: String,
      note2: String,
    }
  },
}
</script>

<style scoped>
</style>
