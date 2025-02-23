<template>
  <div :class="`cv-${this.$store.state.theme}`">
    <h1>My Cv</h1>
    <img src="../assets/download.jpg" alt="" />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@import "../sass/varibels";
// dark
.cv-dark {
  width: 40%;
  min-height: 100vh;
  margin: auto;

  @media (max-width: $phone) {
    width: 90%;
    min-height: 100px;
    margin: 20px 5%;
  }

  h1 {
    width: 100%;
    height: auto;
    color: $font-light;
    border: 1px solid;
    border-color: transparent transparent $font-light transparent;
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 5px;
    margin: 10px 0px;
  }
}
// dark

// light
.cv-light {
  width: 40%;
  min-height: 100vh;
  margin: auto;

  @media (max-width: $phone) {
    width: 90%;
    min-height: 100px;
    margin: 20px 5%;
  }

  h1 {
    width: 100%;
    height: auto;
    color: $font-dark;
    border: 1px solid;
    border-color: transparent transparent $font-dark transparent;
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 5px;
    margin: 10px 0px;
  }
}
// light
</style>
