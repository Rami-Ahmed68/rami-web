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
import dashboardWorskview from "@/views/dash/dashboardWorksview.vue";
import DashInfoView from "@/views/dash/DashInfoView.vue";
import dashWorkView from "@/views/dash/dashWorkView.vue";
import dashSkillsView from "@/views/dash/dashSkillsView.vue";
import dashSkillView from "@/views/dash/dashSkillView.vue";
import dashCreateWorkView from "@/views/dash/dashCreateWorkView.vue";
// import NotFoundView from "@/views/NotFoundView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      title: "🚀 Rami Ahmed | Home Page",
      keywords:
        "MEVN stack, Fullstack Developer, Vue.js, Node.js, MongoDB, Express, Rami Ahmed, Kuwait, Qatar, Saudi Arabia, UAE, Oman, Web Development",
    },
  },
  {
    path: "/works",
    name: "works",
    component: WorksView,
    meta: {
      title: "💼 Rami Ahmed | My Projects",
      keywords:
        "MEVN projects, Web Development portfolio, Kuwait developer, Qatar tech, Saudi Arabia programmer, UAE web apps, Oman software",
    },
  },
  {
    path: "/work/:title",
    name: "work",
    component: WorkView,
    meta: {
      title: "🔧 Project Details",
      keywords:
        "Vue.js project, Node.js case study, MongoDB implementation, Middle East developers",
    },
  },
  {
    path: "/skills",
    name: "skills",
    component: SkillsView,
    meta: {
      title: "🛠️ Rami Ahmed | Technical Skills",
      keywords:
        "Vue.js skills, Node.js expertise, MongoDB knowledge, Express framework, Fullstack developer Kuwait, Qatar tech skills",
    },
  },
  {
    path: "/skill/:title",
    name: "skill",
    component: SkillView,
    meta: {
      title: "📊 Skill Overview",
      keywords:
        "Web development skill, JavaScript expertise, MEVN stack tutorial, Saudi Arabia developer resources",
    },
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
    meta: {
      title: "📩 Rami Ahmed | Contact",
      keywords:
        "Hire MEVN developer, Kuwait web developer contact, Qatar freelance programmer, Saudi Arabia tech consultant",
    },
  },
  {
    path: "/messages",
    name: "messages",
    component: MessagesView,
    meta: {
      title: "✉️ Rami Ahmed | Client Messages",
      keywords:
        "Developer inbox, client communications, Kuwait Qatar Saudi Arabia UAE Oman projects",
    },
  },
  {
    path: "/cv",
    name: "cv",
    component: CvView,
    meta: {
      title: "📄 Rami Ahmed | CV",
      keywords:
        "Web developer resume, MEVN stack CV, Kuwait Qatar Saudi Arabia employment, UAE Oman tech jobs",
    },
  },
  {
    path: "/install",
    name: "install",
    component: InstallApp,
    meta: {
      title: "📲 Rami Ahmed | Install App",
      keywords:
        "Progressive Web App, MEVN PWA, Kuwait Qatar Saudi Arabia UAE Oman mobile apps",
    },
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
    meta: {
      title: "🔐 Rami Ahmed | Admin Login",
      keywords:
        "Developer portal, MEVN stack admin, secure login, Middle East web developer",
    },
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: dashboardView,
    meta: {
      title: "⚙️ Rami Ahmed | Dashboard",
      keywords:
        "MEVN admin panel, developer dashboard, Kuwait Qatar Saudi Arabia UAE Oman portfolio management",
    },
    children: [
      {
        path: "",
        name: "dashboard-info",
        component: DashInfoView,
      },
      {
        path: "works",
        name: "dashboard-works",
        component: dashboardWorskview,
      },
      {
        path: "work/:title",
        name: "dashboard-work",
        component: dashWorkView,
      },
      {
        path: "create/work",
        name: "dashboard-create-work",
        component: dashCreateWorkView,
      },
      {
        path: "skills",
        name: "dashboard-skills",
        component: dashSkillsView,
      },
      {
        path: "skill/:title",
        name: "dashboard-skill",
        component: dashSkillView,
      },
    ],
  },
  // {
  //   path: "/:pathMatch(.*)*",
  //   name: "notfound",
  //   component: NotFoundView,
  //   meta: {
  //     title: "❌ Rami Ahmed | Page Not Found",
  //     keywords:
  //       "404 error, MEVN stack developer, Kuwait Qatar Saudi Arabia UAE Oman web solutions",
  //   },
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Update page titles and meta tags
router.beforeEach((to, from, next) => {
  document.title = to.meta?.title || "Rami Ahmed";

  // You can add meta tag manipulation here if needed
  // For example using vue-meta or manually updating tags

  next();
});

export default router;
