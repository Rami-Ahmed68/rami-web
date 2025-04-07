<template>
  <div class="skill-component">
    <router-link :to="`/skill/${this.skill_data.title}`">
      <img :src="this.skill_data.icon" alt="skill icon" />

      <div class="info">
        <h3>{{ this.skill_data.title }}</h3>

        <p>Lorem ipsum dolor, sit amet ...</p>
      </div>

      <span><icon icon="eye" />{{ skill_data.views }}</span>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    skill_data: Object,
  },
};
</script>

<style lang="scss">
@import "../../../sass/varibels";
.skill-component {
  width: 100%;
  height: auto;
  border-radius: 5px;
  background-color: var(--card-bg);

  a {
    width: 100%;
    height: 100%;
    text-decoration: none;
    display: flex;
    margin: 5px 0px;
    padding: 3px;
    position: relative;

    img {
      max-width: 80px;
      max-height: 80px;
      border-radius: 5px;
    }

    .info {
      max-width: 70%;
      height: 100%;
      margin: 0px 10px;

      h3 {
        color: var(--theme-text);
      }

      p {
        color: var(--theme-text);
        font-size: small;
      }
    }

    span {
      padding: 3px;
      border-radius: 3px;
      position: absolute;
      right: 5px;
      top: 5px;
      background-color: var(--card-bg);
      color: var(--theme-text);
      font-size: $small;

      svg {
        margin: 0px 3px;
      }
    }
  }
}
</style>
