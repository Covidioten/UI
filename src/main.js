import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

import VueApexCharts from "vue-apexcharts";

import SentimentLineDummy from "./charts/SentimentLineDummy";
import ComboChart from "./charts/ComboChart";
import PolitCombo from "./charts/PolitCombo";

import BarExample from "./charts/BarExample";
import ColumnExample from "./charts/ColumnExample";
import ScatterExample from "./charts/ScatterExample";
import MixedExample from "./charts/MixedExample";
import DonutExample from "./charts/DonutExample";
import RadialBarExample from "./charts/RadialBarExample";
import BubbleExample from "./charts/BubbleExample";
import HeatmapExample from "./charts/HeatmapExample";

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
router.replace("/sentimentLine");

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
