<template>
  <div :class="`dash-works-${this.$store.state.theme}`">
    <h1>Works</h1>

    <div class="works-container">
      <WorkComponent v-for="work in 5" :key="work" />
    </div>
  </div>
</template>

<script>
import WorkComponent from "@/components/dash/work/WorkComponent";
export default {
  data() {
    return {};
  },
  components: {
    WorkComponent,
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss">
@import "../../sass/_varibels.scss";
// dark
.dash-works-dark {
  width: 100%;
  height: auto;

  h1 {
    width: 100%;
    height: auto;
    border-bottom: 1px solid $border-color-dark;
    color: $font-light;
  }

  .container {
    width: 100%;
    height: auto;
    background-color: green;
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    align-items: center;
  }
}
// dark

// light
.dash-works-light {
  width: 100%;
  height: auto;

  h1 {
    width: 100%;
    height: auto;
    border-bottom: 1px solid $border-color-light;
    color: $font-dark;
  }

  .container {
    width: 100%;
    height: auto;
    background-color: green;
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    align-items: center;
  }
}
// light
</style>
