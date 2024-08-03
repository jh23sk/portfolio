import { createApp } from 'vue'
import App from './App.vue'
import { createHead } from '@unhead/vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/style/common.css';

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// import {
//   faUser,
//   faAddressCard,
//   faSquarePen,
//   faEnvelope,
// } from "@fortawesome/free-solid-svg-icons";
// library.add(faUser, faAddressCard, faSquarePen, faEnvelope);

const app = createApp(App)

// Vue3のOption APIではmixinの登録が必要
// https://blog.kurodigi.com/posts/vue3-custom-head
const head = createHead()
app.use(head)

// app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')

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

// ---------------------------------------
// font awesome



// ---------------------------------------

