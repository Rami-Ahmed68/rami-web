<template>
  <div class="dash-skills">
    <h1>Skills</h1>

    <div class="skills-section">
      <SkillComponent
        v-for="(skill, index) in this.geted_skills"
        :key="index"
        :skill_data="skill"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import SkillComponent from "@/components/dash/skill/SkillComponent.vue";
export default {
  data() {
    return {
      geted_skills: [],
      limit: 20,
      page: 1,
    };
  },
  mounted() {
    this.GetSkills();
  },
  components: {
    SkillComponent,
  },
  methods: {
    async GetSkills() {
      this.$store.state.loader_status = "open";

      await axios
        .get(this.$store.state.Apis.skills.get_all, {
          params: {
            limit: this.limit,
            page: this.page,
          },
        })
        .then((res) => {
          this.$store.state.loader_status = "close";

          console.log(res);

          if (this.geted_skills.length > 0) {
            this.geted_skills = [...this.geted_skills, res.data.skills_data];
          } else {
            this.geted_skills = res.data.skills_data;
          }
        })
        .catch((err) => {
          this.$store.state.message.type = "error";

          this.$store.state.message.message = err.response.data.message.english;

          this.$store.commit("OpenTheMessgae");

          this.$store.state.loader_status = "close";

          this.$store.commit("CloseTheMessgaeAfter5s");
        });
    },
  },
};
</script>

<style lang="scss">
@import "../../sass/varibels";

.dash-skills {
  width: 100%;
  height: 100%;

  h1 {
    width: 100%;
    height: auto;
    color: var(--theme-text);
    border-bottom: 1px solid var(--border-color);
  }

  .skills-section {
    width: 100%;
    height: auto;
  }
}
</style>
