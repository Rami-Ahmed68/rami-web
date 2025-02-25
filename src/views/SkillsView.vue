<template>
  <div :class="`skills-page-${this.$store.state.theme}`">
    <h1>Skills</h1>

    <div class="container">
      <SkillsComponent
        v-for="(skill, index) in this.$store.state.geted_skills"
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
    return {};
  },
  components: {
    SkillsComponent,
  },
  mounted() {
    // call to get skills method
    this.getskills();
  },
  methods: {
    async getskills() {
      // start the loading
      this.$store.state.loading_status = "open";

      await axios
        .get(this.$store.state.Apis.skills.get_all)
        .then((response) => {
          console.log(response);
          // stop the loading
          this.$store.state.loading_status = "close";

          // set the skills of the resposne to geted_skills in store
          this.$store.state.geted_skills = response.data.skills_data;
        })
        .catch((error) => {
          this.$store.state.loading_status = "close";

          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss">
@import "../sass/varibels";
// dark
.skills-page-dark {
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
