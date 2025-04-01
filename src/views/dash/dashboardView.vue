<template>
  <div :class="`dash-board-page-${this.$store.state.theme}`">
    <SidBarComponent />
    <div class="section">
      <transition name="slide">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
import SidBarComponent from "@/components/dash/SidBarComponent.vue";
export default {
  data() {
    return {};
  },
  components: {
    SidBarComponent,
  },
  mounted() {
    // check if the user is loged in or not
    if (!this.$store.state.admin_data) {
      // change the url
      window.location = "/login";
    }
  },
  methods: {},
};
</script>

<style lang="scss">
@import "../../sass/_varibels.scss";
// dark
.dash-board-page-dark {
  width: 100%;
  height: 100%;
  margin: auto;
  background-color: $dark-theme;
  display: flex;

  @media (max-width: $phone) {
    width: 96%;
    margin: 0px 2%;
  }

  .section {
    width: 80%;
    height: 96vh;
    background-color: $dash-dark-theme;
    border-radius: 5px;
    margin: 10px 5px 5px 5px;
    overflow-y: scroll;
    padding: 5px 10px;
    transition-duration: 0.5s;

    @media (max-width: $phone) {
      width: 60%;
      margin: 2px;
    }

    .slide-enter-active {
      animation: slideIn 0.5s ease-out;
    }

    .slide-leave-active {
      animation: slideOut 0.5s ease-in;
    }

    @keyframes slideIn {
      from {
        transform: translateY(40px);
        opacity: 0;
      }

      to {
        transform: translateY(0);
        opacity: 1;
      }
    }

    @keyframes slideOut {
      from {
        transform: translateY(0);
        opacity: 1;
      }

      to {
        transform: translateY(-40px);
        opacity: 0;
      }
    }
  }

  .section::-webkit-scrollbar {
    width: 0px;
  }
}
// dark

// light
.dash-board-page-light {
  width: 100%;
  height: 100%;
  margin: auto;
  background-color: $light-theme;
  display: flex;

  @media (max-width: $phone) {
    width: 96%;
    margin: 0px 2%;
  }

  .section {
    width: 80%;
    height: 96vh;
    background-color: $dash-light-theme;
    border-radius: 5px;
    margin: 10px 5px 5px 5px;
    overflow-y: scroll;
    padding: 5px 10px;
    transition-duration: 0.5s;

    @media (max-width: $phone) {
      width: 60%;
      margin: 2px;
    }

    .slide-enter-active {
      animation: slideIn 0.5s ease-out;
    }

    .slide-leave-active {
      animation: slideOut 0.5s ease-in;
    }

    @keyframes slideIn {
      from {
        transform: translateY(40px);
        opacity: 0;
      }

      to {
        transform: translateY(0);
        opacity: 1;
      }
    }

    @keyframes slideOut {
      from {
        transform: translateY(0);
        opacity: 1;
      }

      to {
        transform: translateY(-40px);
        opacity: 0;
      }
    }
  }

  .section::-webkit-scrollbar {
    width: 0px;
  }
}
// light
</style>
