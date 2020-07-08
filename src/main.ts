import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import VueCompositionApi from "@vue/composition-api";
import vuetify from "./plugins/vuetify";
import router from "./router";

Vue.use(VueCompositionApi);
Vue.config.productionTip = false;

new Vue({
  store,
  vuetify,
  router,
  render: h => h(App)
}).$mount("#app");
