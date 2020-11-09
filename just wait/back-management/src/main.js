/* eslint-disable no-unused-vars */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

Vue.config.productionTip = false;

router.afterEach((to, from) => {
  // console.log(to.matched);
  store.commit("setCrumb", to.matched);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
