import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/layout",
    name: "layout",
    component: () => import("../views/layout/layout.vue"),
    // redirect: "home",
    children: [
      {
        path: "home",
        name: "Home",
        component: Home
      }
    ]
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/login/login.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
