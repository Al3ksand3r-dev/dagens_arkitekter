import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueCarousel from "vue-carousel";
import VueCompositionAPI from "@vue/composition-api";
import AOS from "aos";
import "aos/dist/aos.css";

Vue.use(VueCompositionAPI);
Vue.use(VueCarousel);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  created() {
    AOS.init({
      once: true,
    });
  },
  render: (h) => h(App),
}).$mount("#app");
