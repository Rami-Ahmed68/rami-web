<template>
  <div class="work" @click="GetToWorkPage">
    <img
      :src="
        this.work_data.cover ? this.work_data.cover : this.work_data.images[0]
      "
      alt="work's cover"
    />
    <h3>{{ this.work_data.title }}</h3>
    <p>{{ this.work_data.description.slice(0, 60) }}...</p>
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

.work {
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
    color: var(--theme-text);
    font-weight: 600;
    text-align: center;
  }

  p {
    width: 100%;
    height: auto;
    color: var(--theme-text);
    font-size: var(--x-large);
    font-weight: 500;
    text-align: center;
  }
}
</style>
