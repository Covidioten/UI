import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

import VueApexCharts from "vue-apexcharts";

import PolitCombo from "./charts/PolitCombo";
import InfoSection from "./components/InfoSection";
import SentimentExplained from "./components/SentimentExplained";
import Imprint from "./components/Imprint";
import Footer from "./components/Footer";

Vue.component("apexchart", VueApexCharts);
Vue.component("footer", Footer);

Vue.use(VueRouter);

const routes = [
  { path: "/info", component: InfoSection },
  { path: "/polit", component: PolitCombo },
  { path: "/senti", component: SentimentExplained },
  { path: "/imprint", component: Imprint },
];

const router = new VueRouter({
  routes: routes,
});

router.replace("/polit");

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
