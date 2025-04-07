<template>
  <div class="skill-page">
    <div
      :class="`header-${this.$store.state.current_skill ? 'open' : 'close'}`"
    >
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
      // start the loader
      this.$store.state.loader = "open";

      await axios
        .get(this.$store.state.Apis.skills.get_one, {
          params: {
            skill_title: this.$route.params.title,
          },
        })
        .then((response) => {
          // stop the loader
          this.$store.state.loader_status = "close";

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

          // stop the loader
          this.$store.state.loader_status = "close";

          // to close the message after 500ms
          this.$store.commit("CloseTheMessgaeAfter5s");
        });
    },
  },
};
</script>

<style lang="scss">
@import "../../sass/varibels";
.skill-page {
  width: 40%;
  min-height: 100vh;
  margin: auto;

  @media (max-width: $phone) {
    width: 96%;
    margin: 0px 2%;
  }

  .header-open {
    width: 100%;
    display: flex;
    justify-content: start;
    padding-top: 0px;
    transition-duration: 0.5s;
    opacity: 1;

    img {
      width: 100px;
      height: 100px;
    }

    .info {
      width: auto;
      height: 100%;

      h2 {
        color: var(--theme-text);
      }

      span {
        padding: 3px;
        border-radius: 3px;
        background-color: var(--chips-green-body);
        color: var(--chips-green-text);
        border: 1px solid var(--chips-green-border);
        font-size: $x-small;
      }
    }
  }

  .header-close {
    @extend .header-open;
    padding-top: 20px;
    transition-duration: 0.5s;
    opacity: 0;
  }

  p {
    width: 100%;
    height: auto;
    padding: 5px 10px;
    margin: 5px 0px;
    color: var(--theme-text);
    font-size: $small;
  }
}
</style>
