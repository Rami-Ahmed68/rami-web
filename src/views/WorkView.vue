<template>
  <div
    :class="`work-page-${this.$store.state.theme}`"
    v-if="this.$store.state.current_work"
  >
    <div class="head">
      <router-link to="/works"> Works <icon icon="arrow-right" /></router-link>

      <h3>
        {{ this.$store.state.current_work.title }}
        <span>{{ this.$store.state.current_work.created_at }}</span>
      </h3>
    </div>

    <p class="description">
      {{ this.$store.state.current_work.description }}
    </p>

    <div class="front-end">
      <p>Front end</p>

      <span
        v-for="(line, index) in this.$store.state.current_work.front_end"
        :key="index"
        >{{ line }}</span
      >
    </div>

    <div class="back-end">
      <p>Back end</p>

      <span
        v-for="(line, index) in this.$store.state.current_work.back_end"
        :key="index"
        >{{ line }}</span
      >
    </div>

    <div class="type">
      <p>Type</p>

      <span>{{ this.$store.state.current_work.type }}</span>
    </div>

    <div class="link">
      <p v-if="this.$store.state.current_work.web">Web</p>

      <a :href="this.$store.state.current_work.web" target="_blank">{{
        this.$store.state.current_work.web.split("/")[2]
      }}</a>
    </div>

    <div class="link">
      <p v-if="this.$store.state.current_work.android">Android</p>

      <a :href="this.$store.state.current_work.android" target="_blank">{{
        this.$store.state.current_work.android.split("/")[2]
      }}</a>
    </div>

    <div class="link">
      <p v-if="this.$store.state.current_work.ios">Ios</p>

      <a :href="this.$store.state.current_work.ios" target="_blank">{{
        this.$store.state.current_work.ios.split("/")[2]
      }}</a>
    </div>

    <div class="images">
      <img
        v-for="(url, index) in this.$store.state.current_work.images"
        :key="index"
        :src="url"
        alt="work's image"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "work-page",
  data() {
    return {};
  },
  mounted() {
    // call to GetWork method
    this.GetWork();

    console.log(this.$store.state.current_work);
  },
  methods: {
    // get the work
    async GetWork() {
      // start the loading
      this.$store.state.loading_status = "open";

      await axios
        .get(this.$store.state.Apis.works.get_one, {
          params: {
            work_title: this.$route.params.title,
          },
        })
        .then((response) => {
          console.log(response);
          // set the work's data in to store
          this.$store.state.current_work = response.data.work_data;

          // stop the loading
          this.$store.state.loading_status = "close";
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
@import "../sass/varibels";
// dark
.work-page-dark {
  width: 40%;
  min-height: 100vh;
  margin: auto;

  @media (max-width: $phone) {
    width: 96%;
    margin: 0px 2%;
  }

  .head {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: start;
    align-items: center;

    a {
      width: auto;
      text-decoration: none;
      color: $links-dark;
      font-size: $medium;
    }

    a:hover {
      text-decoration: underline;
    }

    h3 {
      color: $font-light;
      margin-left: 10px;

      span {
        padding: 3px;
        border-radius: 3px;
        font-size: $x-small;
        background-color: $chips-dark-green-body;
        color: $chips-dark-green-text;
        border: 1px solid $chips-dark-green-border;
      }
    }
  }

  .description {
    width: 100%;
    height: auto;
    color: $font-light;
    font-size: $small;
    margin: 5px 0px;
  }

  .front-end,
  .back-end,
  .type {
    width: 100%;
    height: auto;
    margin: 5px 0px;
    color: $font-light;
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    align-items: center;

    p {
      padding: 2px;
      border-radius: 2px;
      font-size: $small;
      font-weight: 800;
      margin-right: 5px;
      background-color: $chips-dark-green-body;
      color: $chips-dark-green-text;
      border: 1px solid $chips-dark-green-border;
    }

    span {
      font-size: $medium;
      margin: 2px;
      padding: 2px;
      border-radius: 3px;
      font-size: $small;
      background-color: $chips-dark-gray-body;
      border: 1px solid $chips-dark-gray-border;
      color: $chips-dark-gray-text;

      @media (max-width: $phone) {
        font-size: $small;
      }
    }
  }

  .link {
    width: 100%;
    height: auto;
    margin: 5px 0px;
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    align-items: center;

    p {
      padding: 2px;
      border-radius: 2px;
      font-size: $small;
      font-weight: 800;
      margin-right: 5px;
      background-color: $chips-dark-green-body;
      color: $chips-dark-green-text;
      border: 1px solid $chips-dark-green-border;
    }

    a {
      color: $links-dark;
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }
  }

  .images {
    width: 100%;
    height: auto;

    img {
      width: 98%;
      height: auto;
      margin: 5px 1%;
      border-radius: 5px;
    }
  }
}
// dark

// light
.work-page-light {
  width: 40%;
  min-height: 100vh;
  margin: auto;

  @media (max-width: $phone) {
    width: 96%;
    margin: 0px 2%;
  }

  .head {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: start;
    align-items: center;

    a {
      width: auto;
      text-decoration: none;
      color: $links-light;
      font-size: $medium;
    }

    a:hover {
      text-decoration: underline;
    }

    h3 {
      color: $font-dark;
      margin-left: 10px;

      span {
        padding: 3px;
        border-radius: 3px;
        font-size: $x-small;
        background-color: $chips-light-green-body;
        color: $chips-light-green-text;
        border: 1px solid $chips-light-green-border;
      }
    }
  }

  .description {
    width: 100%;
    height: auto;
    color: $font-dark;
    font-size: $small;
    margin: 5px 0px;
  }

  .front-end,
  .back-end,
  .type {
    width: 100%;
    height: auto;
    margin: 5px 0px;
    color: $font-dark;
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    align-items: center;

    p {
      padding: 2px;
      border-radius: 2px;
      font-size: $small;
      font-weight: 800;
      margin-right: 5px;
      background-color: $chips-light-green-body;
      color: $chips-light-green-text;
      border: 1px solid $chips-light-green-border;
    }

    span {
      font-size: $medium;
      margin: 2px;
      padding: 2px;
      border-radius: 3px;
      font-size: $small;
      background-color: $chips-light-gray-body;
      border: 1px solid $chips-light-gray-border;
      color: $chips-light-gray-text;

      @media (max-width: $phone) {
        font-size: $small;
      }
    }
  }

  .link {
    width: 100%;
    height: auto;
    margin: 5px 0px;
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    align-items: center;

    p {
      padding: 2px;
      border-radius: 2px;
      font-size: $small;
      font-weight: 800;
      margin-right: 5px;
      background-color: $chips-light-green-body;
      color: $chips-light-green-text;
      border: 1px solid $chips-light-green-border;
    }

    a {
      color: $links-light;
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }
  }

  .images {
    width: 100%;
    height: auto;

    img {
      width: 98%;
      height: auto;
      margin: 5px 1%;
      border-radius: 5px;
    }
  }
}
// light
</style>
