<template>
  <div :class="`work-page-${this.$store.state.theme}`">
    <div class="head">
      <router-link to="/works"> Works <icon icon="arrow-right" /></router-link>

      <h3>
        {{ this.$store.state.current_work.title }}
        <span>{{ this.$store.state.current_work.created_at }}</span>
      </h3>
    </div>

    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut cum
      voluptatibus blanditiis labore, deserunt quasi. Maxime molestiae neque
      ullam aut rerum! Temporibus fuga ad corrupti iusto quaerat provident
      praesentium eligendi.
    </p>

    <div class="front-end">
      <p>Front end</p>

      <span
        v-for="(front_end_tag, index) in this.$store.state.current_work
          .front_end"
        :key="index"
        >{{ front_end_tag }}</span
      >
    </div>

    <div class="back-end">
      <p>Back end</p>

      <span>{{ this.$store.state.current_work.back_end }}</span>
    </div>

    <div class="type">
      <p>Type</p>

      <span>{{ this.$store.state.current_work.type }}</span>
    </div>

    <div class="links">
      <p v-if="this.$store.state.current_work.web">Web</p>

      <a :href="this.$store.state.current_work.web" target="_blank">{{
        this.$store.state.current_work.web
      }}</a>

      <p v-if="this.$store.state.current_work.android">Android</p>

      <a :href="this.$store.state.current_work.android" target="_blank">{{
        this.$store.state.current_work.android
      }}</a>

      <p v-if="this.$store.state.current_work.ios">Ios</p>

      <a :href="this.$store.state.current_work.ios" target="_blank">{{
        this.$store.state.current_work.ios
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
    width: 98%;
    margin: 0px 1%;
  }

  .head {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: start;
    align-items: center;

    a {
      text-decoration: none;
      color: $links-dark;
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
        background-color: green;
      }
    }
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
    background-color: red;

    p {
      padding: 2px;
      border-radius: 2px;
      font-size: $small;
      font-weight: 800;
      margin-right: 5px;
      background-color: $chips-green-body;
      color: $chips-green-text;
    }

    span {
      font-size: $medium;
      background-color: rebeccapurple;
      margin: 4px;

      @media (max-width: $phone) {
        font-size: $small;
      }
    }
  }

  .links {
    width: 100%;
    height: auto;
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
      background-color: $chips-green-body;
      color: $chips-green-text;
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
// light
</style>
