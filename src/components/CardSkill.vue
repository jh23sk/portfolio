<template>
  <!-- 【mdi一覧】https://pictogrammers.com/library/mdi/icon/monitor/ -->
  <!-- 【レスポンシブ】https://qiita.com/nthm/items/5ddc4b789617bcd9ce6c -->
  <v-container>
    <!-- <v-card v-resize="$emit('onResize')" class="mx-auto bg-light" max-width="500" variant="outlined" :prepend-icon="cardType.icon"> -->
    <v-card class="mx-auto bg-white" max-width="500" variant="outlined" :prepend-icon="cardType.icon">
      <template v-slot:title>{{ cardType.title }}</template>
      <v-card-text>
        <p class="text">{{ cardType.explain }}</p>
        <table class="table table-sm m-0 table-bordered">
        <!-- <v-table> --><!-- これ使うと、テーブルの下に横スクロールのバーが出る -->
          <thead class="table-secondary">
            <tr>
              <th scope="col" class="text-center" width="40%">技術</th>
              <th scope="col" class="text-center" width="25%">経験年数</th>
              <th scope="col" class="text-center" width="35%">レベル</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in cardType.items" :key="index">
              <td>{{ item.tech }}</td>
              <td>{{ item.years }}</td>
              <td>
                <v-rating
                  color="teal"
                  large
                  v-model=item.rating
                  size="20"
                  readonly
                ></v-rating>
              </td>
            </tr>
          </tbody>
        </table>
        <!-- </v-table> -->
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'cmp-card-skill',
  props: {
    cardType : {
      title: String,
      explains: String,
      items: [
        {
          tech: String,
          years: String,
          rating: String,
          icon: String,
        }
      ],
      icon: String,
    },
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
