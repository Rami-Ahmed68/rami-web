<template>
  <div class="dash-works" @scroll="HandelScroll">
    <h1>
      Works <span>{{ works_count }}</span>
    </h1>
    <div class="works-container">
      <WorkComponent
        v-for="(work, index) in this.geted_works"
        :key="index"
        :work_data="work"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import WorkComponent from "@/components/dash/work/WorkComponent";
export default {
  data() {
    return {
      geted_works: [],
      page: 1,
      limit: 10,
      works_count: 0,
    };
  },
  components: {
    WorkComponent,
  },
  mounted() {
    this.GetWorks();

    this.GetCount();
  },
  methods: {
    async GetWorks() {
      // check if the works data array in store is empty or not
      if (this.geted_works.length == 0) {
        // start the loader
        this.$store.state.loader_status = "open";
      }

      await axios
        .get(this.$store.state.Apis.works.get_all, {
          params: {
            page: this.page,
            limit: this.limit,
          },
        })
        .then((response) => {
          // stop the loader
          this.$store.state.loader_status = "close";

          if (this.geted_works.length > 0) {
            // set the works of the resposne to geted_works in store
            this.geted_works = [
              ...this.geted_works,
              ...response.data.works_data,
            ];
          } else {
            // set the works of the resposne to geted_works in store
            this.geted_works = response.data.works_data;
          }
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

    async GetCount() {
      await axios
        .get(this.$store.state.Apis.works.get_count)
        .then((res) => {
          this.works_count = res.data.works_count;
        })
        .catch((err) => {
          this.$store.state.message.type = "error";
          this.$store.state.message.message = err.response.data.message.english;
          this.$store.commit("OpenTheMessgae");
          this.$store.commit("CloseTheMessgaeAfter5s");
        });
    },

    async HandelScroll() {
      // check if the window height is donw
      if (
        window.scrollY + window.innerHeight >=
        document.body.scrollHeight - 1000
      ) {
        // to change page
        this.page += 1;

        // call the GetWork method
        await this.GetWorks();
      }
    },
  },
};
</script>

<style lang="scss">
@import "../../sass/_varibels.scss";

.dash-works {
  width: 100%;
  height: 100%;
  overflow-y: scroll;

  h1 {
    width: 100%;
    height: auto;
    border-bottom: 1px solid var(--border-color);
    color: var(--theme-text);
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      font-size: $small;
    }
  }

  .works-container {
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    align-items: center;
  }
}

.dash-works::-webkit-scrollbar {
  width: 0px;
}
</style>
