<template>
  <div :class="`work-${this.$store.state.theme}`">
    <router-link :to="`/work/${this.work_data._id}`">
      <img src="../../assets/download.jpg" alt="work's cover" />
      <h3>Work's title</h3>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing</p>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    work_data: Object,
  },
};
</script>

<style lang="scss">
@import "../../sass/varibels";

// dark style
.work-dark {
  width: 48%;
  min-height: 100px;
  margin: 10px 1%;

  @media (max-width: $phone) {
    width: 90%;
    min-height: 100px;
    margin: 20px 5%;
  }

  a {
    text-decoration: none;
    img {
      width: 100%;
      height: auto;
      border-radius: 10px;
      margin: 5px 0%;
    }

    h3 {
      width: 100%;
      height: auto;
      color: $font-light;
      font-weight: 600;
      text-align: center;
    }

    p {
      width: 100%;
      height: auto;
      color: $font-light;
      font-size: $small;
      font-weight: 500;
      text-align: center;
    }
  }
}
// dark style

// dark style
.work-light {
  width: 48%;
  min-height: 100px;
  margin: 10px 1%;

  @media (max-width: $phone) {
    width: 90%;
    min-height: 100px;
    margin: 20px 5%;
  }

  a {
    text-decoration: none;

    img {
      width: 100%;
      height: auto;
      border-radius: 10px;
      margin: 5px 0%;
    }

    h3 {
      width: 100%;
      height: auto;
      color: $font-dark;
      font-weight: 600;
      text-align: center;
    }

    p {
      width: 100%;
      height: auto;
      color: $font-dark;
      font-size: $small;
      font-weight: 500;
      text-align: center;
    }
  }
}
// dark style
</style>
