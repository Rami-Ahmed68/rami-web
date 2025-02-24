<template>
  <div :class="`works-${this.$store.state.theme}`">
    <h1>Works</h1>

    <div class="conatiner">
      <WorkComponent />
      <WorkComponent />
      <WorkComponent />
      <WorkComponent />
      <WorkComponent />
      <WorkComponent />
      <WorkComponent />
    </div>
  </div>
</template>

<script>
import WorkComponent from "@/components/works/WorkComponent.vue";
export default {
  data() {
    return {};
  },
  components: {
    WorkComponent,
  },
};
</script>

<style lang="scss">
@import "../sass/varibels";
// dark
.works-dark {
  width: 40%;
  min-height: 100vh;
  margin: auto;
  color: $font-light;

  @media (max-width: $phone) {
    width: 90%;
    margin: 0px 5%;
  }

  h1 {
    width: 100%;
    height: auto;
    margin: 10px 0%;
    font-size: $x-large;
    color: $font-light;
    border: 1px solid;
    border-color: transparent transparent $font-light transparent;

    @media (max-width: $phone) {
      width: 90%;
      margin: 5px 5%;
    }
  }

  .conatiner {
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    align-items: center;
  }
}
// dark

// light
.works-light {
  width: 40%;
  min-height: 100vh;
  margin: auto;
  color: $font-light;

  @media (max-width: $phone) {
    width: 90%;
    margin: 0px 5%;
  }

  h1 {
    width: 100%;
    height: auto;
    margin: 10px 0%;
    font-size: $x-large;
    color: $font-dark;
    border: 1px solid;
    border-color: transparent transparent $font-dark transparent;

    @media (max-width: $phone) {
      width: 90%;
      margin: 5px 5%;
    }
  }

  .conatiner {
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    align-items: center;
  }
}
// light
</style>
