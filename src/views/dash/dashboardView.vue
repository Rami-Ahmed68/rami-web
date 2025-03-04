<template>
  <div :class="`dash-board-page-${this.$store.state.theme}`">
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
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
  width: 40%;
  min-height: 100vh;
  margin: auto;
  background-color: red;

  @media (max-width: $phone) {
    width: 96%;
    margin: 0px 2%;
  }
}
// dark

// light
.dash-board-page-light {
  width: 40%;
  min-height: 100vh;
  margin: auto;
  background-color: red;

  @media (max-width: $phone) {
    width: 96%;
    margin: 0px 2%;
  }
}
// light
</style>
