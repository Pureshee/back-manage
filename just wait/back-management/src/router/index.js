import Vue from "vue";
import VueRouter from "vue-router";
const home = () => import("../views/home/home.vue");
const purchase = () => import("../views/purchase/index.vue");
const orderAdd = () => import("../views/purchase/order-add/orderAdd.vue");
const orderList = () => import("../views/purchase/order-list/orderList.vue");
const orderAnalyse = () =>
  import("../views/purchase/order-analyse/orderAnalyse.vue");
const orderCancel = () => import("../views/purchase/order-cancel/index.vue");
const cancelList = () =>
  import("../views/purchase/order-cancel/cancel-list/cancelList.vue");
const cancelAnalyse = () =>
  import("../views/purchase/order-cancel/cancel-analyse/cancelAnalyse.vue");
const stock = () => import("../views/stock/stock.vue");
const persons = () => import("../views/persons/persons.vue");

Vue.use(VueRouter);
// 防止路由重复点击报错
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};
const routes = [
  {
    path: "",
    name: "layout",
    component: () => import("../views/layout/layout.vue"),
    meta: {
      name: "首页"
    },
    redirect: "home",
    children: [
      {
        path: "home",
        name: "Home",
        component: home,
        meta: {
          name: "首页"
        }
      },
      {
        path: "purchase",
        name: "purchase-manege",
        component: purchase,
        meta: {
          name: "采购管理"
        },
        children: [
          {
            path: "add",
            name: "order-add",
            component: orderAdd,
            meta: {
              name: "新增订单"
            }
          },
          {
            path: "list",
            name: "order-list",
            component: orderList,
            meta: {
              name: "订单列表"
            }
          },
          {
            path: "analyse",
            name: "order-analyse",
            component: orderAnalyse,
            meta: {
              name: "订单分析"
            }
          },
          {
            path: "cancel",
            name: "order-cancel",
            component: orderCancel,
            meta: {
              name: "退货管理"
            },
            children: [
              {
                path: "list",
                name: "cancel-list",
                component: cancelList,
                meta: {
                  name: "退货列表"
                }
              },
              {
                path: "analyse",
                name: "cancel-analyse",
                component: cancelAnalyse,
                meta: {
                  name: "退货分析"
                }
              }
            ]
          }
        ]
      },
      {
        path: "stock",
        name: "stock-manage",
        component: stock,
        meta: {
          name: "库存分析"
        }
      },
      {
        path: "persons",
        name: "persons-manage",
        component: persons,
        meta: {
          name: "职工管理"
        }
      }
    ]
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
