import { createApp } from 'vue';
import App from './App.vue';
import vuetify from "./assets/js/vuetify";
// import { createHead } from '@unhead/vue'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import './assets/style/common.css';
// VTooltip
import { Tooltip } from "floating-vue";
import "floating-vue/dist/style.css";
// fontawesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
// TODO：使わなくなったものあれば削除する faUserとか
import {
  faUser,
  faAddressCard,
  faSquarePen,
  faCube,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
library.add(faUser, faAddressCard, faSquarePen, faCube, faEnvelope);


const app = createApp(App);
app.use(vuetify);

// TODO：unhead使わないならuninstallする
// Vue3のOption APIではmixinの登録が必要
// https://blog.kurodigi.com/posts/vue3-custom-head
// const head = createHead()
// app.use(head)

app.component("VTooltip", Tooltip);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');

// パターン1
// createApp(App).mount('#app')

// パターン2
// const app = createApp(App)
// app.mount('#app')

// パターン3
// createApp(App).use(BootstrapVue).mount('#app')

// ---------------------------------------
// Vue2,3で書き方が違う（https://qiita.com/laineus/items/d1f1f7972f521556a788）
// Vue3はbootstrap-vue未対応（https://stackoverflow.com/questions/70147707/importing-bootstrapvue-in-vue-3）

// 【Vue2】
// import Vue from 'vue'
// import ...
// new Vue({
//   el: '#app',
//   components: { App },
//   router
// })

// 【Vue3】
// import { createApp } from 'vue'
// import ...
// const app = createApp(App)
// app.use(router)
// app.mount('#app')


