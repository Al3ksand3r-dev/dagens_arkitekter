import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/pages/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: Home,
  },
  {
    path: "/services",
    name: "Services",
    component: Home,
  },
  {
    path: "/permits",
    name: "Permits",
    component: Home,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Home,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
