<template>
  <div class="dash-skill" v-if="current_skill">
    <div class="icon-cont">
      <img
        :src="icon"
        alt="skill-icon"
        v-if="selected_icon_to_send.length == 0"
      />
      <img :src="selected_icon_to_show" alt="skill-icon" v-else />

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
    <input type="text" id="title" v-model="title" />

    <label for="description"
      >Description <span>{{ description.length }}</span></label
    >
    <textarea id="description" v-model="description"></textarea>

    <label for="created_at">Created At</label>
    <input type="text" id="created_at" v-model="created_at" />

    <button class="update" @click="UpdateSkill">Update</button>
    <button class="delete" @click="Delete">Delete</button>
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
  mounted() {
    this.GetSkill();
  },
  methods: {
    async GetSkill() {
      this.$store.state.loader_status = "open";

      await axios
        .get(this.$store.state.Apis.skills.get_one, {
          params: {
            skill_title: this.$route.params.title,
          },
        })
        .then((res) => {
          this.$store.state.loader_status = "close";
          this.current_skill = res.data.skill_data;
          this.title = res.data.skill_data.title;
          this.description = res.data.skill_data.description;
          this.created_at = res.data.skill_data.created_at;
          this.icon = res.data.skill_data.icon;
        })
        .catch((err) => {
          this.$store.state.loader_status = "close";

          this.$store.state.message.type = "error";
          this.$store.state.message.message = err.response.data.message.english;
          this.$store.commit("OpenTheMessgae");
          this.$store.state.loader_status = "close";
          this.$store.commit("CloseTheMessgaeAfter5s");
        });
    },

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

    async UpdateSkill() {
      this.$store.state.loader_status = "open";

      const headers = {
        Authorization: `Bearer ${this.$store.state.admin_data.token}`,
      };

      let data = {
        admin_id: this.$store.state.admin_data._id,
        skill_id: this.current_skill._id,
        title: this.title,
        description: this.description,
        created_at: this.created_at,
      };

      await axios
        .put(this.$store.state.Apis.skills.update, data, {
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

    async ChangeIcon() {
      this.$store.state.loader_status = "open";

      let formData = new FormData();

      const headers = {
        Authorization: `Bearer ${this.$store.state.admin_data.token}`,
      };

      formData.append("admin_id", this.$store.state.admin_data._id);

      formData.append("skill_id", this.current_skill._id);

      for (const file of this.selected_icon_to_send) {
        formData.append("files", file, file.name);
      }

      await axios
        .put(this.$store.state.Apis.skills.change_icon, formData, { headers })
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

    Delete() {
      this.$store.commit("OpenOrCloseConfirmDeleteSkill");
      this.$store.state.skill_id_for_delete = this.current_skill._id;
    },
  },
};
</script>

<style lang="scss">
@import "../../sass/varibels";

.dash-skill {
  width: 100%;
  height: 100%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;

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

  .update {
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

  .update:hover {
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

.dash-skill::-webkit-scrollbar {
  width: 0px;
}
</style>
