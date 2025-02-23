import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import WorksView from "../views/WorksView.vue";
import InstallApp from "../views/InstallView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/works",
    name: "works",
    component: WorksView,
  },
  {
    path: "/install",
    name: "install",
    component: InstallApp,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
