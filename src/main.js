import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

//import of the ApexCharts library
import VueApexCharts from "vue-apexcharts";

//import of the components
import SentiPolitCovidChart from "./charts/SentiPolitCovidChart";
import InfoSection from "./components/InfoSection";
import SentimentExplained from "./components/SentimentExplained";
import Imprint from "./components/Imprint";
import Footer from "./components/Footer";

Vue.component("apexchart", VueApexCharts);
Vue.component("footer", Footer);

Vue.use(VueRouter);

//declare all possible routes
const routes = [
  { path: "/info", component: InfoSection },
  { path: "/polit", component: SentiPolitCovidChart },
  { path: "/senti", component: SentimentExplained },
  { path: "/imprint", component: Imprint },
];

const router = new VueRouter({
  routes: routes,
});

//One main container which is replaced by different views/components
router.replace("/polit");

Vue.config.productionTip = false;

//renders and mounts app
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
