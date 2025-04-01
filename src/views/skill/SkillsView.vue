<template>
  <div :class="`skills-page-${this.$store.state.theme}`">
    <h1>Skills</h1>

    <div class="container">
      <SkillsComponent
        v-for="(skill, index) in this.geted_skills"
        :key="index"
        :skill_data="skill"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import SkillsComponent from "@/components/skills/SkillComponent.vue";

export default {
  data() {
    return {
      page: 1,
      limit: 20,
      geted_skills: [],
    };
  },
  components: {
    SkillsComponent,
  },
  mounted() {
    // call to the handele scroll method on window scroll
    window.addEventListener("scroll", this.HandelScroll);

    // call to get skills method
    this.getSkills();
  },
  methods: {
    async getSkills() {
      // check if the geted skills in store is empty
      if (this.geted_skills && this.geted_skills.length === 0) {
        // start the loader
        this.$store.state.loader_status = "open";
      }

      await axios
        .get(this.$store.state.Apis.skills.get_all)
        .then((response) => {
          // stop the loader
          this.$store.state.loader_status = "close";

          // set the skills of the resposne to geted_skills in store
          if (this.geted_skills.length == 0) {
            this.geted_skills = [
              ...this.geted_skills,
              ...response.data.skills_data,
            ];
          } else {
            this.geted_skills = response.data.skills_data;
          }
        })
        .catch((error) => {
          // stop the loader
          this.$store.state.loader_status = "close";

          // set the messgae's type to error's object in store
          this.$store.state.message.type = "error";

          // set the error messgae to error in store
          this.$store.state.message.message =
            error.response.data.message.english;

          // to open the message
          this.$store.commit("OpenTheMessgae");

          // to close the message after 500ms
          this.$store.commit("CloseTheMessgaeAfter5s");
        });
    },

    // handel scroll
    async HandelScroll() {
      // check if the window height is donw
      if (
        window.scrollY + window.innerHeight >=
        document.body.scrollHeight - 600
      ) {
        // to change page
        this.page += 1;

        // call the getSkills method
        await this.getSkills();
      }
    },
  },
};
</script>

<style lang="scss">
@import "../../sass/varibels";
// dark
.skills-page-dark {
  width: 40%;
  min-height: 100vh;
  margin: auto;
  padding-bottom: 5px;

  @media (max-width: $phone) {
    width: 90%;
    margin: 0px 5%;
  }

  h1 {
    width: 100%;
    height: auto;
    color: $font-light;
    border: 1px solid;
    border-color: transparent transparent $font-light transparent;
  }

  .container {
    width: 100%;
    height: auto;
  }
}
// dark

// light
.skills-page-light {
  width: 40%;
  height: auto;
  margin: auto;
  padding-bottom: 5px;

  @media (max-width: $phone) {
    width: 90%;
    margin: 0px 5%;
  }

  h1 {
    width: 100%;
    height: auto;
    color: $font-dark;
    border: 1px solid;
    border-color: transparent transparent $font-dark transparent;
  }

  .container {
    width: 100%;
    height: auto;
  }
}
// light
</style>
