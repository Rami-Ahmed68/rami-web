<template>
  <div class="dash-skills" @scroll="this.HandelScroll">
    <h1>
      Skills <span>{{ skills_count }}</span>
    </h1>

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
      skills_count: 0,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.HandelScroll);

    this.GetSkills();

    this.GetCount();
  },
  components: {
    SkillComponent,
  },
  methods: {
    async GetSkills() {
      if (this.geted_skills.length == 0) {
        this.$store.state.loader_status = "open";
      }

      await axios
        .get(this.$store.state.Apis.skills.get_all, {
          params: {
            limit: this.limit,
            page: this.page,
          },
        })
        .then((res) => {
          this.$store.state.loader_status = "close";

          if (this.geted_skills.length > 0) {
            this.geted_skills = [...this.geted_skills, ...res.data.skills_data];
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

    async GetCount() {
      await axios
        .get(this.$store.state.Apis.skills.get_count)
        .then((res) => {
          this.skills_count = res.data.skills_count;
        })
        .catch((err) => {
          this.$store.state.message.type = "error";
          this.$store.state.message.message = err.response.data.message.english;
          this.$store.commit("OpenTheMessgae");
          this.$store.commit("CloseTheMessgaeAfter5s");
        });
    },

    // handel scroll
    async HandelScroll() {
      // check if the window height is donw
      if (
        window.scrollY + window.innerHeight >=
        document.body.scrollHeight - 1000
      ) {
        // to change page
        this.page += 1;

        // call the getSkills method
        await this.GetSkills();
      }
    },
  },
};
</script>

<style lang="scss">
@import "../../sass/varibels";

.dash-skills {
  width: 100%;
  height: 100%;
  overflow-y: scroll;

  h1 {
    width: 100%;
    height: auto;
    color: var(--theme-text);
    border-bottom: 1px solid var(--border-color);
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      font-size: $small;
    }
  }

  .skills-section {
    width: 100%;
    height: auto;
  }
}

.dash-skills::-webkit-scrollbar {
  width: 0px;
}
</style>
