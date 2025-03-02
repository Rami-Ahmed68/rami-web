<template>
  <div :class="`app-${this.$store.state.theme}`">
    <NavComponnet />
    <ModelComponent />
    <transition name="slide">
      <router-view />
    </transition>
    <ScrollToTopComponnet @click="scrollToTop" />
    <LoadingComponent />
    <MessageComponent />
    <ConfirmDeleteComponent />
  </div>
</template>

<script>
import NavComponnet from "@/components/global/NavComponent.vue";
import ModelComponent from "./components/global/ModelComponent.vue";
import ScrollToTopComponnet from "./components/global/ScrollToTopComponnet.vue";
import LoadingComponent from "./components/global/LoadingComponent.vue";
import MessageComponent from "./components/global/MessageComponent.vue";
import ConfirmDeleteComponent from "./components/global/forms/messages/ConfirmDeleteComponent.vue";
import { computed } from "vue";
import { useHead } from "@vueuse/head";

import { useRoute } from "vue-router";

export default {
  data() {
    return {
      name: "app page",
    };
  },
  setup() {
    const route = useRoute();
    useHead({
      title: computed(() => {
        switch (route.name) {
          case "about me":
            return "Rami Ahmed-about";
          case "works":
            return "Rami Ahmed-works";
          case "work":
            return "Rami Ahmed-work";
          case "skills":
            return "Rami Ahmed-skills";
          case "skill":
            return "Rami Ahmed-skill";
          case "cv":
            return "Rami Ahmed-cv";
          case "login":
            return "Rami Ahmed-login";
          case "dashboard":
            return "Rami Ahmed-dashboard";
          case "install":
            return "Rami Ahmed-install-app";
          case "messages":
            return "Rami Ahmed-messages";

          case "dashboard/works":
            return "Rami Ahmed-dash-works";

          case "dashboard/work/create":
            return "Rami Ahmed-dash-works-create";

          case "dashboard/skills":
            return "Rami Ahmed-dash-skills";

          case "dashboard/skill/create":
            return "Rami Ahmed-dash-skill-create";

          case "dashboard/cv/update":
            return "Rami Ahmed-dash-cv-update";

          case "notfound":
            return "Rami Ahmed-notfound";

          default:
            return "Rami Ahmed-home";
        }
      }),
      meta: [
        {
          name: "description",
          content: computed(() => {
            switch (route.name) {
              case "works":
                return "Explore the works on the works page of designer Rami Ahmed's website";
              case "work":
                return "Explore the work on the work page of designer Rami Ahmed's website";
              case "skills":
                return "Explore the skills on the skills page of designer Rami Ahmed's website";
              case "skill":
                return "Explore the skill on the skill page of designer Rami Ahmed's website";
              case "login":
                return "you can login to Rami Ahmed's website in this page just click it";
              case "dashboard":
                return "This page is a dachBoard to controll all Rami Ahmed's website data";
              case "messages":
                return "You can see all the message here just login";

              case "dashboard/works":
                return "Control all the work in this section in this view";

              case "dashboard/work/create":
                return "Control all the work in this section in this view.";

              case "dashboard/skills":
                return "Control all the skills in this section in this view.";

              case "dashboard/skill/create":
                return "Control all the skill in this section in this view.";

              case "dashboard/cv/update":
                return "Control all the cv events in this section in this view.";

              case "install":
                return "Download the designer Rami Ahmed's application from here and explore the world of fantasy and magnificence";
              case "notfound":
                return "Rami Ahmed-notfound graphic design not found page";
              default:
                return "Mohammad Sultan is an Graphic Designer and video editor from Syria living and working in Dubai | Home page of the inspiring designer Rami Ahmed | Start exploring many beautiful and attractive designs | You can order a design at any time you want";
            }
          }),
        },
        {
          name: "keywords",
          content: computed(() => {
            switch (route.name) {
              case "works":
                return `Designer Rami Ahmed's ,works page. , designer Rami Ahmed's works, here Branding
Layout,
Color theory,
Illustration,
Digital art,
User interface,
Visual communication,
Print design,
Adobe Creative Suite,
Logo design,
Creative process,
Art direction,
Web design,
Motion graphics,
Concept development,
Image editing,
Graphic elements,
Marketing materials,
Infographics,
Portfolio,
Client collaboration,
Design trends,
Visual hierarchy,
Aesthetics`;
              case `work`:
                return `Designer Rami Ahmed's, works page, designer Rami Ahmed's, Branding
Layout,
Color theory,
Illustration,
Digital art,
User interface,
Visual communication,
Print design,
Adobe Creative Suite,
Logo design,
Creative process,
Art direction,
Web design,
Motion graphics,
Concept development,
Image editing,
Graphic elements,
Marketing materials,
Infographics,
Portfolio,
Client collaboration,
Design trends,
Visual hierarchy,
Aesthetics,`;

              case `lessons`:
                return `Designer Rami Ahmed's, lessons page, designer Rami Ahmed's, lessons,Branding
Layout,
Color theory,
Illustration,
Digital art,
User interface,
Visual communication,
Print design,
Adobe Creative Suite,
Logo design,
Creative process,
Art direction,
Web design,
Motion graphics,
Concept development,
Image editing,
Graphic elements,
Marketing materials,
Infographics,
Portfolio,
Client collaboration,
Design trends,
Visual hierarchy,
Aesthetics`;
              case `lesson`:
                return `Designer Rami Ahmed's, lesson's page, designer Rami Ahmed's lesson's , Branding
Layout,
Color theory,
Illustration,
Digital art,
User interface,
Visual communication,
Print design,
Adobe Creative Suite,
Logo design,
Creative process,
Art direction,
Web design,
Motion graphics,
Concept development,
Image editing,
Graphic elements,
Marketing materials,
Infographics,
Portfolio,
Client collaboration,
Design trends,
Visual hierarchy,
Aesthetics`;

              case `skills`:
                return `Designer Rami Ahmed's skills page. You can view all of designer Rami Ahmed's skills here Branding
Layout,
Color theory,
Illustration,
Digital art,
User interface,
Visual communication,
Print design,
Adobe Creative Suite,
Logo design,
Creative process,
Art direction,
Web design,
Motion graphics,
Concept development,
Image editing,
Graphic elements,
Marketing materials,
Infographics,
Portfolio,
Client collaboration,
Design trends,
Visual hierarchy,
Aesthetics`;

              case `skill`:
                return `Designer Rami Ahmed's skill's page. You can view all of designer Rami Ahmed's skill's here Branding
Layout,
Color theory,
Illustration,
Digital art,
User interface,
Visual communication,
Print design,
Adobe Creative Suite,
Logo design,
Creative process,
Art direction,
Web design,
Motion graphics,
Concept development,
Image editing,
Graphic elements,
Marketing materials,
Infographics,
Portfolio,
Client collaboration,
Design trends,
Visual hierarchy,
Aesthetics`;

              case `login`:
                return `login sigin register تسجيل الدخول اشتراك اشترك هنا `;
              case `dashboard`:
                return `Rami Ahmed-dashboard Branding
Layout,
Color theory,
Illustration,
Digital art,
User interface,
Visual communication,
Print design,
Adobe Creative Suite,
Logo design,
Creative process,
Art direction,
Web design,
Motion graphics,
Concept development,
Image editing,
Graphic elements,
Marketing materials,
Infographics,
Portfolio,
Client collaboration,
Design trends,
Visual hierarchy,
Aesthetics`;
              case `install`:
                return `Rami Ahmed-install-app akbar sultan graphic design install the app page Branding
Layout,
Color theory,
Illustration,
Digital art,
User interface,
Visual communication,
Print design,
Adobe Creative Suite,
Logo design,
Creative process,
Art direction,
Web design,
Motion graphics,
Concept development,
Image editing,
Graphic elements,
Marketing materials,
Infographics,
Portfolio,
Client collaboration,
Design trends,
Visual hierarchy,
Aesthetics`;
              case `notfound`:
                return `Muhammad Sultan-notfound akbar sultan graphic design not found page Branding
Layout,
Color theory,
Illustration,
Digital art,
User interface,
Visual communication,
Print design,
Adobe Creative Suite,
Logo design,
Creative process,
Art direction,
Web design,
Motion graphics,
Concept development,
Image editing,
Graphic elements,
Marketing materials,
Infographics,
Portfolio,
Client collaboration,
Design trends,
Visual hierarchy,
Aesthetics`;
              default:
                return `Designer in Syria, Designers in Syria, Advertising, Designer in Dubai, Designers in Dubai, Advertising Design, Dubai, United Arab Emirates, Designers in Yemen, Advertising Design, Graphic Designer
devaslif
developer programing vue.js css js javascript
syria
UAE
web app 
mobile app
site 
web site
Branding
Layout,
Color theory,
Illustration,
Digital art,
User interface,
Visual communication,
Print design,
Adobe Creative Suite,
Logo design,
Creative process,
Art direction,
Web design,
Motion graphics,
Concept development,
Image editing,
Graphic elements,
Marketing materials,
Infographics,
Portfolio,
Client collaboration,
Design trends,
Visual hierarchy,
Aesthetics General, information, about ,designer, Rami Ahmed, designer Rami Ahmed info, Typography
Branding,
Layout,
Color theory,
Illustration,
Digital art,
User interface,
Visual communication,
Print design,
Adobe Creative Suite,
Logo design,
Creative process,
Art direction,
Web design,
Motion graphics,
Concept development,
Image editing,
Graphic elements,
Marketing materials,
Infographics,
Portfolio,
Client collaboration,
Design trends,
Visual hierarchy,
Aesthetics`;
            }
          }),
        },
      ],
    });
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  components: {
    NavComponnet,
    ModelComponent,
    ScrollToTopComponnet,
    LoadingComponent,
    MessageComponent,
    ConfirmDeleteComponent,
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },

    // scroll method
    handleScroll() {
      this.$store.state.scroll_top_status =
        window.scrollY > 200 ? "open" : "close";
    },
  },
};
</script>

<style lang="scss">
@import "./sass/varibels";
.app-dark {
  background-color: $dark-theme;
  width: 100%;
  min-height: 100vh;
}

.app-light {
  background-color: $light-theme;
  width: 100%;
  min-height: 100vh;
}

.slide-enter-active {
  animation: slideIn 0.5s ease-out; /* مدة وسرعة التأثير */
}

.slide-leave-active {
  animation: slideOut 0.5s ease-in; /* تأثير معاكس عند إخفاء المحتوى */
}

@keyframes slideIn {
  from {
    transform: translateY(40px); /* يبدأ من أسفل قليلاً */
    opacity: 0; /* يبدأ بتلاشي */
  }
  to {
    transform: translateY(0); /* يصل إلى مكانه الطبيعي */
    opacity: 1; /* يظهر بشكل كامل */
  }
}

@keyframes slideOut {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-40px); /* ينزلق للأعلى قليلاً */
    opacity: 0;
  }
}
</style>
