<template>
  <div class="work-dash" @click="GetToWorkPage">
    <div class="container">
      <span class="count"><icon icon="eye" /> {{ work_data.views }}</span>
      <img
        :src="
          this.work_data.cover ? this.work_data.cover : this.work_data.images[0]
        "
        alt="work's cover"
      />
    </div>
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
    GetToWorkPage() {
      this.$router.push(`work/${this.work_data.title}`);
    },
  },
};
</script>

<style lang="scss">
@import "../../../sass/_varibels.scss";

.work-dash {
  height: auto;
  width: 30%;
  margin: 10px 1.5%;
  cursor: pointer;

  @media (max-width: $phone) {
    width: 90%;
    min-height: 100px;
    max-height: 300px;
    margin: 20px 5%;
  }

  text-decoration: none;

  .container {
    position: relative;
    width: 100%;
    height: 100%;

    .count {
      position: absolute;
      top: 5px;
      left: 5px;
      padding: 3px;
      border-radius: 5px;
      background-color: var(--card-bg);
      color: var(--theme-text);
      font-size: $small;
    }

    img {
      width: 100%;
      height: auto;
      border-radius: 10px;
      max-height: 250px;
    }
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
