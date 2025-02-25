<template>
  <div :class="`cv-${this.$store.state.theme}`">
    <h1>My Cv</h1>
    <img
      v-if="this.$store.state.admin_cv"
      :src="this.$store.state.admin_cv"
      alt="rami ahmed's Cv"
    />
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {};
  },
  mounted() {
    this.GetCv();
  },
  methods: {
    async GetCv() {
      // start the loading
      this.$store.state.loading_status = "open";

      await axios
        .get(this.$store.state.Apis.admin.get_cv)
        .then((response) => {
          // stop the loading
          this.$store.state.loading_status = "close";

          // set the admin's cv in to store
          this.$store.state.admin_cv = response.data.admin_data.cv;
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
  },
};
</script>

<style lang="scss">
@import "../sass/varibels";
// dark
.cv-dark {
  width: 40%;
  min-height: 100vh;
  margin: auto;

  @media (max-width: $phone) {
    width: 90%;
    min-height: 100px;
    margin: 20px 5%;
  }

  h1 {
    width: 100%;
    height: auto;
    color: $font-light;
    border: 1px solid;
    border-color: transparent transparent $font-light transparent;
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 5px;
    margin: 10px 0px;
  }
}
// dark

// light
.cv-light {
  width: 40%;
  min-height: 100vh;
  margin: auto;

  @media (max-width: $phone) {
    width: 90%;
    min-height: 100px;
    margin: 20px 5%;
  }

  h1 {
    width: 100%;
    height: auto;
    color: $font-dark;
    border: 1px solid;
    border-color: transparent transparent $font-dark transparent;
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 5px;
    margin: 10px 0px;
  }
}
// light
</style>
