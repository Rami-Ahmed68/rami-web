<template>
  <div class="dash-create-skill">
    <div class="icon-cont">
      <img
        :src="selected_icon_to_show"
        alt="skill-icon"
        v-if="selected_icon_to_show.length > 0"
      />

      <label for="icon">+🖼️</label>

      <input
        type="file"
        accept="image/*"
        id="icon"
        @change="handleFileChange"
      />
    </div>

    <button @click="ChangeIcon" v-if="this.selected_icon_to_send.length > 0">
      Change Icon
    </button>

    <label for="title"
      >Title <span>{{ title.length }}</span></label
    >
    <input
      type="text"
      id="title"
      v-model="title"
      placeholder="Type the Title here 📝 ..."
    />

    <label for="description"
      >Description <span>{{ description.length }}</span></label
    >
    <textarea
      id="description"
      v-model="description"
      placeholder="Type the description here 🧾 ..."
    ></textarea>

    <label for="created_at">Created At</label>
    <input
      type="text"
      id="created_at"
      v-model="created_at"
      placeholder="Type the date of creating the project here 📅..."
    />

    <button class="create" @click="CreateSkill">Create</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      current_skill: "",
      title: "",
      description: "",
      selected_icon_to_show: [],
      selected_icon_to_send: [],
    };
  },
  mounted() {},
  methods: {
    handleFileChange(event) {
      this.readerFiles(event.target.files[0]).then((result) => {
        this.selected_icon_to_show = result;
      });
      this.selected_icon_to_send = [event.target.files[0]];
    },

    async readerFiles(file) {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = (e) => resolve(e.target.result);
        reader.readAsDataURL(file);
      });
    },

    async CreateSkill() {
      this.$store.state.loader_status = "open";

      let formData = new FormData();

      const headers = {
        Authorization: `Bearer ${this.$store.state.admin_data.token}`,
      };

      formData.append("admin_id", this.$store.state.admin_data._id);
      formData.append("title", this.title);
      formData.append("description", this.description);
      formData.append("created_at", this.created_at);

      for (const file of this.selected_icon_to_send) {
        formData.append("files", file, file.name);
      }

      await axios
        .post(this.$store.state.Apis.skills.create, formData, {
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

          this.title = "";
          this.description = "";
          this.created_at = "";
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

.dash-create-skill {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  .icon-cont {
    width: 100%;
    min-height: 200px;
    position: relative;

    label {
      width: 50px;
      height: 40px;
      border-radius: 4px;
      padding: 5px;
      position: absolute;
      right: 5px;
      top: 5px;
      cursor: pointer;
      color: var(--theme-text);
      background-color: var(--confirm-form-green-body);
      border: 1px solid var(--confirm-form-green-border);
      transition-duration: 0.5s;
      margin: 5px 0px;
    }

    input {
      display: none;
    }

    img {
      max-width: 100%;
      max-height: 200px;
    }
  }

  button {
    width: 100%;
    height: 40px;
    border-radius: 5px;
    margin: 3px 0px;
    border: none;
    outline: none;
    color: var(--theme-text);
    cursor: pointer;
    background-color: var(--confirm-form-green-body);
    border: 1px solid var(--confirm-form-green-border);
    transition-duration: 0.5s;
  }

  button:hover {
    background-color: var(--confirm-form-green-border);
  }

  label {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--theme-text);
    border-bottom: 1px solid var(--border-color);
  }

  input {
    width: 100%;
    height: 40px;
    border: none;
    border-radius: 5px;
    outline: none;
    color: var(--theme-text);
    margin: 5px 0px;
    padding: 5px 10px;
    background-color: var(--input-bg);
  }

  textarea {
    width: 100%;
    height: 300px;
    border: none;
    border-radius: 5px;
    outline: none;
    padding: 5px 10px;
    margin: 5px 0px;
    resize: none;
    color: var(--theme-text);
    background-color: var(--input-bg);
  }

  .create {
    width: 100%;
    height: 40px;
    border-radius: 5px;
    margin: 3px 0px;
    border: none;
    outline: none;
    color: var(--theme-text);
    cursor: pointer;
    background-color: var(--confirm-form-green-body);
    border: 1px solid var(--confirm-form-green-border);
    transition-duration: 0.5s;
  }

  .create:hover {
    background-color: var(--confirm-form-green-border);
  }

  .delete {
    width: 100%;
    height: 40px;
    border-radius: 5px;
    margin: 3px 0px;
    border: none;
    outline: none;
    color: var(--theme-text);
    cursor: pointer;
    background-color: var(--confirm-form-red-body);
    border: 1px solid var(--confirm-form-red-border);
    transition-duration: 0.5s;
  }

  .delete:hover {
    background-color: var(--confirm-form-red-border);
  }
}

.dash-create-skill::-webkit-scrollbar {
  width: 0px;
}
</style>
