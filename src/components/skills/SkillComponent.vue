<template>
  <div :class="`skill-component-${this.$store.state.theme}`">
    <router-link :to="`/skill/${this.skill_data.title}`">
      <img :src="this.skill_data.icon" alt="skill icon" />

      <div class="info">
        <h3>{{ this.skill_data.title }}</h3>

        <p>Lorem ipsum dolor, sit amet ...</p>
      </div>
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
@import "../../sass/varibels";

// dark
.skill-component-dark {
  width: 100%;
  height: auto;
  border-radius: 5px;

  a {
    width: 100%;
    height: 100%;
    text-decoration: none;
    display: flex;
    // align-items: center;
    margin: 5px 0px;
    padding: 3px;

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
        color: $font-light;
      }

      p {
        color: $font-light;
        font-size: small;
      }
    }
  }
}
// dark

// light
.skill-component-light {
  width: 100%;
  height: auto;
  border-radius: 5px;

  a {
    width: 100%;
    height: 100%;
    text-decoration: none;
    display: flex;
    // align-items: center;
    margin: 5px 0px;
    padding: 3px;

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
        color: $font-dark;
      }

      p {
        color: $font-dark;
        font-size: small;
      }
    }
  }
}
// light
</style>
