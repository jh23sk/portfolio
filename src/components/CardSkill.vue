<template>
  <!-- 【mdi一覧】https://pictogrammers.com/library/mdi/icon/monitor/ -->
  <!-- 【レスポンシブ】https://qiita.com/nthm/items/5ddc4b789617bcd9ce6c -->
  <!-- <v-col cols="12" class="mx-3"> -->
  <v-container>
    <!-- <v-card class="mx-auto" variant="outlined" width="550" :prepend-icon="cardType.icon"> -->
    <v-card v-resize="onResize" class="mx-auto bg-light" max-width="500" variant="outlined" :prepend-icon="cardType.icon">
      <template v-slot:title>{{ cardType.title }}</template>
      <v-card-text>
        <p class="text">{{ cardType.explain }}</p>
        <table class="table">
        <!-- <v-table> -->
          <thead>
            <tr>
              <th scope="col" class="text-center">技術</th>
              <th scope="col" class="text-center">経験年数</th>
              <th scope="col" class="text-center">レベル</th>
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
                  v-model=item.level
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
  <!-- </v-col> -->
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
          level: String,
          icon: String,
        }
      ],
      icon: String,
    },
  data() {
    return {
      // items: [
      //   { tech: "HTML", years: "3年半", level: 3 },
      //   { tech: "CSS", years: "3年半", level: 3 },
      // ],
      windowSize: {
        x: 0,
        y: 0,
      },
    };
  },
    mounted () {
      this.onResize()
    },
    computed: {
      style () {
        // return 'height: ' + this.windowSize.y * 0.8 + 'px;'
        return 'height: ' + this.windowSize.y * 0.99 + 'px;'
      }
    },
    methods: {
      onResize () {
        this.windowSize = { x: window.innerWidth, y: window.innerHeight }
        // this.iconSize = window.innerHeight * 0.1
      },
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
