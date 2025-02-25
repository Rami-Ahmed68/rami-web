<template>
  <div :class="`works-${this.$store.state.theme}`">
    <h1>Works {{ this.$store.state.loading_status }}</h1>

    <div class="conatiner" v-if="this.$store.state.geted_works.length > 0">
      <WorkComponent
        v-for="(work, index) in this.$store.state.geted_works"
        :work_data="work"
        :key="index"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import WorkComponent from "@/components/works/WorkComponent.vue";
export default {
  data() {
    return {
      page: 1,
      limit: 20,
    };
  },
  components: {
    WorkComponent,
  },
  mounted() {
    // call to the handele scroll method on window scroll
    window.addEventListener("scroll", this.HandelScroll);

    // call to get works method
    this.getWorks();
  },
  methods: {
    async getWorks() {
      // check if the works data array in store is empty or not
      if (this.$store.state.geted_works.length == 0) {
        // start the loading
        this.$store.state.loading_status = "open";
      }

      await axios
        .get(this.$store.state.Apis.works.get_all, {
          params: {
            page: this.page,
            limit: this.limit,
          },
        })
        .then((response) => {
          // stop the loading
          this.$store.state.loading_status = "close";

          if (this.$store.state.geted_works.length > 0) {
            // set the works of the resposne to geted_works in store
            this.$store.state.geted_works = [
              ...this.$store.state.geted_works,
              ...response.data.works_data,
            ];
          } else {
            // set the works of the resposne to geted_works in store
            this.$store.state.geted_works = response.data.works_data;
          }
        })
        .catch((error) => {
          // stop the loading
          this.$store.state.loading_status = "close";

          // set the messgae's type to error's object in store
          this.$store.state.message.type = "error";

          // set the error messgae to error in store
          this.$store.state.message.message =
            error.response.data.message.english;

          // to open the message
          this.$store.commit("OpenTheMessgae");

          // to close the message after 500ms
          this.$store.commit("CloseTheMessgaeAfter500ms");
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
        // call the getWorks method
        await this.getWorks();
      }
    },
  },
};
</script>

<style lang="scss">
@import "../sass/varibels";
// dark
.works-dark {
  width: 40%;
  min-height: 100vh;
  margin: auto;
  color: $font-light;

  @media (max-width: $phone) {
    width: 98%;
    margin: 0px 1%;
  }

  h1 {
    width: 100%;
    height: auto;
    margin: 10px 0%;
    font-size: $x-large;
    color: $font-light;
    border: 1px solid;
    border-color: transparent transparent $font-light transparent;

    @media (max-width: $phone) {
      width: 90%;
      margin: 5px 5%;
    }
  }

  .conatiner {
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    align-items: center;
  }
}
// dark

// light
.works-light {
  width: 40%;
  min-height: 100vh;
  margin: auto;
  color: $font-light;

  @media (max-width: $phone) {
    width: 98%;
    margin: 0px 1%;
  }

  h1 {
    width: 100%;
    height: auto;
    margin: 10px 0%;
    font-size: $x-large;
    color: $font-dark;
    border: 1px solid;
    border-color: transparent transparent $font-dark transparent;

    @media (max-width: $phone) {
      width: 90%;
      margin: 5px 5%;
    }
  }

  .conatiner {
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    align-items: center;
  }
}
// light
</style>
