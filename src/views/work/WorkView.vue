<template>
  <div class="work-page" v-if="this.current_work">
    <video
      v-if="this.current_work && this.current_work.video"
      class="video"
      type="video/mp4"
      :poster="this.current_work.cover"
      @loadedmetadata="onVideoLoaded"
      controls
    >
      <source play :src="this.current_work.video" type="video/mp4" />
      <source play :src="this.current_work.video" type="video/ogg" />
    </video>
    <div class="head">
      <router-link to="/works"> Works <icon icon="arrow-right" /></router-link>

      <h3>
        {{ this.current_work.title }}
        <span>{{ this.current_work.created_at }}</span>
      </h3>
    </div>

    <p class="description">
      {{ this.current_work.description }}
    </p>

    <div class="front-end">
      <p>Front end</p>

      <span v-for="(line, index) in this.current_work.front_end" :key="index">{{
        line
      }}</span>
    </div>

    <div class="back-end">
      <p>Back end</p>

      <span v-for="(line, index) in this.current_work.back_end" :key="index">{{
        line
      }}</span>
    </div>

    <div class="type">
      <p>Type</p>

      <span>{{ this.current_work.type }}</span>
    </div>

    <div class="link" v-if="this.current_work.web_site_link">
      <p>Web</p>

      <a :href="this.current_work.web" target="_blank">{{
        this.current_work.web_site_link.split("/")[2]
      }}</a>
    </div>

    <div class="link" v-if="this.current_work.android_link">
      <p>Android</p>

      <a :href="this.current_work.android" target="_blank">{{
        this.current_work.android_link.split("/")[2]
      }}</a>
    </div>

    <div class="link" v-if="this.current_work.ios_link">
      <p>Ios</p>

      <a :href="this.current_work.ios" target="_blank">{{
        this.current_work.ios_link.split("/")[2]
      }}</a>
    </div>

    <div class="images">
      <img
        v-for="(url, index) in this.current_work.images"
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
    return {
      current_work: "",
    };
  },
  mounted() {
    // call to GetWork method
    this.GetWork();

    console.log(this.current_work);
  },
  methods: {
    // get the work
    async GetWork() {
      // start the loader
      this.$store.state.loader_status = "open";

      await axios
        .get(this.$store.state.Apis.works.get_one, {
          params: {
            work_title: this.$route.params.title,
          },
        })
        .then((response) => {
          console.log(response);
          // set the work's data in to store
          this.current_work = response.data.work_data;

          // stop the loader
          this.$store.state.loader_status = "close";
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
.work-page {
  width: 40%;
  min-height: 100vh;
  margin: auto;

  @media (max-width: $phone) {
    width: 96%;
    margin: 0px 2%;
  }

  .video {
    width: 100%;
    height: auto;
    border-radius: 5px;
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
      color: var(--link-color);
      font-size: $medium;
    }

    a:hover {
      text-decoration: underline;
    }

    h3 {
      color: var(--theme-text);
      margin-left: 10px;

      span {
        padding: 3px;
        border-radius: 3px;
        font-size: $x-small;
        background-color: var(--chips-green-body);
        color: var(--chips-green-text);
        border: 1px solid var(--chips-green-border);
      }
    }
  }

  .description {
    width: 100%;
    height: auto;
    color: var(--theme-text);
    font-size: $small;
    margin: 5px 0px;
  }

  .front-end,
  .back-end,
  .type {
    width: 100%;
    height: auto;
    margin: 5px 0px;
    color: var(--theme-text);
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
      background-color: var(--chips-green-body);
      color: var(--chips-green-text);
      border: 1px solid var(--chips-green-border);
    }

    span {
      font-size: $medium;
      margin: 2px;
      padding: 2px;
      border-radius: 3px;
      font-size: $small;
      background-color: var(chips-gray-body);
      border: 1px solid var(chips-gray-border);
      color: var(chips-gray-text);

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
      background-color: var(--chips-green-body);
      color: var(--chips-green-text);
      border: 1px solid var(--chips-green-border);
    }

    a {
      color: var(--link-color);
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
</style>
