import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

import Status from "./components/NavigationBar.vue";
import VueApexCharts from "vue-apexcharts";

import SentimentLineDummy from "./charts/SentimentLineDummy";

Vue.component("apexchart", VueApexCharts);
Vue.component("navigation", Status);
Vue.use(VueRouter);

// 1. Define route components.
// These can be imported from other files
const routes = [{ path: "/sentimentLine", component: SentimentLineDummy }];

const router = new VueRouter({
  routes: routes,
});
router.replace("/sentimentLine");

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
