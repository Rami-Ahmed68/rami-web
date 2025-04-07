<template>
  <div class="cv">
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
      // start the loader
      this.$store.state.loader_status = "open";

      await axios
        .get(this.$store.state.Apis.admin.get_cv)
        .then((response) => {
          // stop the loader
          this.$store.state.loader_status = "close";

          // set the admin's cv in to store
          this.$store.state.admin_cv = response.data.admin_data.cv;
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
          this.$store.commit("CloseTheMessgaeAfter500ms");
        });
    },
  },
};
</script>

<style lang="scss">
@import "../sass/varibels";
.cv {
  width: 40%;
  min-height: 100vh;
  padding: 0px 0px 20px 0px;
  margin: auto;

  @media (max-width: $phone) {
    width: 90%;
    min-height: 100px;
    margin: 20px 5%;
  }

  h1 {
    width: 100%;
    height: auto;
    color: var(--theme-text);
    border: 1px solid;
    border-color: transparent transparent var(--theme-text) transparent;
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 5px;
    margin: 10px 0px;
  }
}
</style>
