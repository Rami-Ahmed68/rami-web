import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import WorksView from "../views/work/WorksView.vue";
import InstallApp from "../views/InstallView.vue";
import CvView from "@/views/CvView.vue";
import SkillsView from "@/views/skill/SkillsView.vue";
import ContactView from "@/views/ContactView.vue";
import MessagesView from "@/views/MessagesView.vue";
import LoginView from "@/views/LogInView.vue";
import WorkView from "@/views/work/WorkView.vue";
import SkillView from "@/views/skill/SkillView.vue";
import dashboardView from "../views/dash/dashboardView.vue";
import DashInfoView from "@/views/dash/DashInfoView.vue";

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
    path: "/work/:title",
    name: "work",
    component: WorkView,
  },
  {
    path: "/skills",
    name: "skills",
    component: SkillsView,
  },
  {
    path: "/skill/:title",
    name: "skill",
    component: SkillView,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },
  {
    path: "/messages",
    name: "messages",
    component: MessagesView,
  },
  {
    path: "/cv",
    name: "cv",
    component: CvView,
  },
  {
    path: "/install",
    name: "install",
    component: InstallApp,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: dashboardView,
    children: [
      {
        path: "",
        name: "dashboard-info",
        component: DashInfoView,
      },

      {
        path: "works",
        name: "dashboard-works",
        component: dashboardView,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
