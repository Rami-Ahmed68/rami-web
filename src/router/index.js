import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import WorksView from "../views/WorksView.vue";
import InstallApp from "../views/InstallView.vue";
import CvView from "@/views/CvView.vue";
import SkillsView from "@/views/SkillsView.vue";
import ContactView from "@/views/ContactView.vue";
import MessagesView from "@/views/MessagesView.vue";
import LoginView from "@/views/LogInView.vue";
import WorkView from "@/views/WorkView.vue";

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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
