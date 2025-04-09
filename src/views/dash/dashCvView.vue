<template>
  <div class="dash-cv">
    <h1>Cv</h1>

    <div class="container">
      <label for="cv">
        <icon icon="plus" />
      </label>

      <input type="file" accept="image/*" id="cv" @change="handleFileChange" />

      <img :src="cv" alt="cv" v-if="cv && selected_cv_to_send.length == 0" />
      <img :src="selected_cv_to_show" alt="cv" v-else />
    </div>

    <button @click="ChangeCv">Change</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      cv: "",
      selected_cv_to_show: [],
      selected_cv_to_send: [],
    };
  },
  mounted() {
    this.GetCv();
  },
  methods: {
    async GetCv() {
      this.$store.state.loader_status = "open";

      await axios
        .get(this.$store.state.Apis.admin.get_cv)
        .then((res) => {
          this.$store.state.loader_status = "close";

          this.cv = res.data.admin_data.cv;
        })
        .catch((err) => {
          this.$store.state.message.type = "error";
          this.$store.state.message.message = err.response.data.message.english;
          this.$store.commit("OpenTheMessgae");
          this.$store.state.loader_status = "close";
          this.$store.commit("CloseTheMessgaeAfter5s");
        });
    },

    handleFileChange(event) {
      this.readerFiles(event.target.files[0]).then((result) => {
        this.selected_cv_to_show = result;
      });
      this.selected_cv_to_send = [event.target.files[0]];
    },

    async readerFiles(file) {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = (e) => resolve(e.target.result);
        reader.readAsDataURL(file);
      });
    },

    async ChangeCv() {
      this.$store.state.loader_status = "open";

      const headers = {
        Authorization: `Bearer ${this.$store.state.admin_data.token}`,
      };

      let formData = new FormData();

      formData.append("admin_id", this.$store.state.admin_data._id);

      for (const file of this.selected_cv_to_send) {
        formData.append("files", file, file.name);
      }

      await axios
        .put(this.$store.state.Apis.admin.change_cv, formData, {
          headers,
          onUploadProgress: (progressEvent) => {
            this.$store.state.loading_rate = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
          },
        })
        .then((res) => {
          this.$store.state.loading_rate = 0;
          this.$store.state.message.type = "success";
          this.$store.state.message.message = res.data.message.english;
          this.$store.commit("OpenTheMessgae");
          this.$store.state.loader_status = "close";
          this.$store.commit("CloseTheMessgaeAfter5s");
        })
        .catch((err) => {
          this.$store.state.loading_rate = 0;
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

.dash-cv {
  width: 100%;
  height: 100%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;

  h1 {
    width: 100%;
    height: auto;
    border-bottom: 1px solid var(--border-color);
    color: var(--theme-text);
  }

  .container {
    width: 100%;
    min-height: 500px;
    position: relative;
    margin: 5px 0px;

    label {
      width: auto;
      height: auto;
      position: absolute;
      right: 5px;
      top: 5px;
      cursor: pointer;

      svg {
        padding: 10px;
        border-radius: 3px;
        color: var(--theme-text);
        border: 1px solid var(--border-color);
        background-color: var(--card-bg);
      }
    }

    input {
      display: none;
    }

    img {
      width: 100%;
      height: auto;
      border-radius: 5px;
    }
  }

  button {
    padding: 10px 15px;
    border-radius: 5px;
    margin: 10px 0px;
    border: 1px solid var(--confirm-form-green-border);
    background-color: $confirm-form-green-body;
    color: var(--theme-text);
    cursor: pointer;
    transition-duration: 0.5s;
  }

  button:hover {
    background-color: $confirm-form-green-border;
  }
}

.dash-cv::-webkit-scrollbar {
  width: 0px;
}
</style>
