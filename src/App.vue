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
export default {
  data() {
    return {
      name: "app page",
    };
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
