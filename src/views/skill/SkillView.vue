<template>
  <div :class="`skill-page-${this.$store.state.theme}`">
    <div class="header">
      <img :src="this.$store.state.current_skill.icon" alt="skill icon" />
      <div class="info">
        <h2>{{ this.$store.state.current_skill.title }}</h2>
        <span>{{ this.$store.state.current_skill.created_at }}</span>
      </div>
    </div>
    <p>{{ this.$store.state.current_skill.description }}</p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {};
  },
  mounted() {
    console.log(this.$route.params.title);
    // call to get skill method
    this.GetSkill();
  },
  methods: {
    async GetSkill() {
      console.log("sended the req ...");
      // start the loading
      this.$store.state.loading = "open";

      await axios
        .get(this.$store.state.Apis.skills.get_one, {
          params: {
            skill_title: this.$route.params.title,
          },
        })
        .then((response) => {
          // stop the loading
          this.$store.state.loading_status = "close";

          // set the skill's data of the response in to store
          this.$store.state.current_skill = response.data.skill_data;
        })
        .catch((error) => {
          // set the messgae's type to error's object in store
          this.$store.state.message.type = "error";

          // set the error messgae to error in store
          this.$store.state.message.message =
            error.response.data.message.english;

          // to open the message
          this.$store.commit("OpenTheMessgae");

          // stop the loading
          this.$store.state.loading_status = "close";

          // to close the message after 500ms
          this.$store.commit("CloseTheMessgaeAfter5s");
        });
    },
  },
};
</script>

<style lang="scss">
@import "../../sass/varibels";
// dark
.skill-page-dark {
  width: 40%;
  min-height: 100vh;
  margin: auto;

  @media (max-width: $phone) {
    width: 96%;
    margin: 0px 2%;
  }

  .header {
    width: 100%;
    display: flex;
    justify-content: start;

    img {
      width: 100px;
      height: 100px;
    }

    .info {
      width: auto;
      height: 100%;

      h2 {
        color: $font-light;
      }

      span {
        padding: 3px;
        border-radius: 3px;
        background-color: $chips-dark-green-body;
        color: $chips-dark-green-text;
        border: 1px solid $chips-dark-green-border;
        font-size: $x-small;
      }
    }
  }

  p {
    width: 100%;
    height: auto;
    padding: 5px 10px;
    margin: 5px 0px;
    color: $font-light;
    font-size: $small;
  }
}
// dark

// light
.skill-page-light {
  width: 40%;
  min-height: 100vh;
  margin: auto;

  @media (max-width: $phone) {
    width: 96%;
    margin: 0px 2%;
  }

  .header {
    width: 100%;
    display: flex;
    justify-content: start;

    img {
      width: 100px;
      height: 100px;
    }

    .info {
      width: auto;
      height: 100%;

      h2 {
        color: $font-dark;
      }

      span {
        padding: 3px;
        border-radius: 3px;
        background-color: $chips-light-green-body;
        color: $chips-light-green-text;
        border: 1px solid $chips-light-green-border;
        font-size: $x-small;
      }
    }
  }

  p {
    width: 100%;
    height: auto;
    padding: 5px 10px;
    margin: 5px 0px;
    color: $font-dark;
    font-size: $small;
  }
}
// light
</style>
