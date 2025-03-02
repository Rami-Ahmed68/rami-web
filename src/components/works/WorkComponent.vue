<template>
  <div :class="`work-${this.$store.state.theme}`" @click="GetToWorkPage">
    <img :src="this.work_data.images[0]" alt="work's cover" />
    <h3>Work's title</h3>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing</p>
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
  methods: {
    // get work's page method
    GetToWorkPage() {
      // change the page
      this.$router.push(`/work/${this.work_data.title}`);
    },
  },
};
</script>

<style lang="scss">
@import "../../sass/varibels";

// dark style
.work-dark {
  width: 48%;
  min-height: 100px;
  max-height: 400px;
  margin: 10px 1%;
  cursor: pointer;

  @media (max-width: $phone) {
    width: 90%;
    min-height: 100px;
    max-height: 300px;
    margin: 20px 5%;
  }

  text-decoration: none;
  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    margin: 5px 0%;
    max-height: 250px;
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
// dark style

// dark style
.work-light {
  width: 48%;
  min-height: 100px;
  max-height: 400px;
  margin: 10px 1%;
  cursor: pointer;

  @media (max-width: $phone) {
    width: 90%;
    min-height: 100px;
    max-height: 300px;
    margin: 20px 5%;
  }

  text-decoration: none;

  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    margin: 5px 0%;
    max-height: 250px;
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
// dark style
</style>
