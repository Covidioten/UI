import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

import VueApexCharts from "vue-apexcharts";

import PolitCombo from "./charts/PolitCombo";
import InfoSection from "./components/InfoSection";
import SentimentExplained from "./components/SentimentExplained";

Vue.component("apexchart", VueApexCharts);

Vue.use(VueRouter);

// 1. Define route components.
// These can be imported from other files
const routes = [
  { path: "/info", component: InfoSection },
  { path: "/polit", component: PolitCombo },
  { path: "/senti", component: SentimentExplained },
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
