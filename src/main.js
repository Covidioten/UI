import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

import VueApexCharts from "vue-apexcharts";

import SentimentLineDummy from "./charts/SentimentLineDummy";
import ComboChart from "./charts/ComboChart";
import PolitCombo from "./charts/PolitCombo";

import ColumnExample from "./charts/ColumnExample";

import InfoSection from "./components/InfoSection";

Vue.component("apexchart", VueApexCharts);

Vue.use(VueRouter);

// 1. Define route components.
// These can be imported from other files
const routes = [
  { path: "/sentimentLine", component: SentimentLineDummy },
  { path: "/column", component: ColumnExample },
  { path: "/info", component: InfoSection },
  { path: "/combo", component: ComboChart },
  { path: "/polit", component: PolitCombo },
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
