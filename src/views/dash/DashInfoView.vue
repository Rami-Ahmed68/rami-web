<template>
  <div :class="`dash-info-page-${$store.state.theme}`">
    <h1>Info page</h1>

    <div class="avatar">
      <label for="avatar">
        <img
          :src="$store.state.admin_data.avatar"
          alt="avatar"
          v-if="!selected_avatar"
        />
        <img :src="selected_avatar" alt="avatar" v-else />
      </label>
      <button v-if="selected_avatar" @click="ChangeAvatar">
        Change avatar
      </button>
      <input type="file" accept="image/*" id="avatar" ref="avatar" />
    </div>

    <div class="form">
      <label for="Name"
        >Name <span>{{ name.length }}</span></label
      >
      <input
        type="text"
        placeholder="Type your name here ..."
        id="Name"
        v-model="name"
      />

      <label for="work"
        >Work <span>{{ work.length }}</span></label
      >
      <textarea
        name=""
        placeholder="Type your work here ..."
        id="work"
        v-model="work"
      ></textarea>

      <label for="bio"
        >Bio <span>{{ bio.length }}</span></label
      >
      <textarea
        name=""
        placeholder="Type your bio here ..."
        id="bio"
        v-model="bio"
      ></textarea>

      <label for="love"
        >Love <span>{{ love.length }}</span></label
      >
      <textarea
        name=""
        placeholder="Type your love here ..."
        id="love"
        v-model="love"
      ></textarea>

      <button @click="UpdateInfo">Update</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      selected_avatar: "",
      name: "",
      work: "",
      bio: "",
      love: "",
      code_wars: "",
      github: "",
      facebook: "",
      instagram: "",
      web: "",
      linked_in: "",
      phone_number: "",
      whatsapp_number: "",
    };
  },
  mounted() {
    this.GetAdminInfo();
    this.$refs.avatar.addEventListener("change", this.handleFileChange);
  },
  methods: {
    async GetAdminInfo() {
      this.$store.state.loading_status = "open";

      await axios
        .get(this.$store.state.Apis.admin.get_info)
        .then((response) => {
          this.$store.state.loading_status = "close";
          this.name = response.data.admin_data.name;
          this.work = response.data.admin_data.work;
          this.bio = response.data.admin_data.bio;
          this.love = response.data.admin_data.love;
          this.code_wars = response.data.admin_data.code_wars;
          this.github = response.data.admin_data.github;
          this.facebook = response.data.admin_data.facebook;
          this.instagram = response.data.admin_data.instagram;
          this.whatsapp_number = response.data.admin_data.whatsapp_number;
          this.phone_number = response.data.admin_data.phone_number;
          this.web = response.data.admin_data.web;
        })
        .catch((error) => {
          this.$store.state.message.type = "error";
          this.$store.state.message.message =
            error.response.data.message.english;
          this.$store.commit("OpenTheMessgae");
          this.$store.state.loading_status = "close";
          this.$store.commit("CloseTheMessgaeAfter5s");
        });
    },

    async ChangeAvatar() {
      this.$store.state.loading_status = "open";

      const headers = {
        Authorization: `Bearer ${this.$store.state.admin_data.token}`,
      };

      let formData = new FormData();
      formData.append("admin_id", this.$store.state.admin_data._id);
      formData.append(
        "files",
        this.$refs.avatar.files[0],
        this.$refs.avatar.files[0].name
      );

      await axios
        .put(this.$store.state.Apis.admin.change_avatar, formData, {
          headers,
        })
        .then((res) => {
          this.$store.state.admin_data.avatar = res.data.new_avatar_url;
          this.selected_avatar = "";
          this.$store.state.loading_status = "close";
        })
        .catch((err) => {
          // console.log(err);
          this.$store.state.message.type = "error";
          this.$store.state.message.message = err.response.data.message.english;
          this.$store.commit("OpenTheMessgae");
          this.$store.state.loading_status = "close";
          this.$store.commit("CloseTheMessgaeAfter5s");
        });
    },

    async UpdateInfo() {
      this.$store.state.loading_status = "open";

      const headers = {
        Authorization: `Bearer ${this.$store.state.admin_data.token}`,
      };

      let changedData = {
        admin_id: this.$store.state.admin_data._id,
      };

      const originalData = this.$store.state.admin_data;

      if (this.name !== originalData.name) changedData.name = this.name;
      if (this.work !== originalData.work) changedData.work = this.work;
      // if (this.bio !== originalData.bio) changedData.bio = this.bio.join(",");
      if (this.love !== originalData.love) changedData.love = this.love;
      if (this.code_wars !== originalData.code_wars)
        changedData.code_wars = this.code_wars;
      if (this.github !== originalData.github) changedData.github = this.github;
      if (this.facebook !== originalData.facebook)
        changedData.facebook = this.facebook;
      if (this.instagram !== originalData.instagram)
        changedData.instagram = this.instagram;
      if (this.web !== originalData.web) changedData.web = this.web;
      if (this.linked_in !== originalData.linked_in)
        changedData.linked_in = this.linked_in;
      if (this.phone_number !== originalData.phone_number)
        changedData.phone_number = this.phone_number;
      if (this.whatsapp_number !== originalData.whatsapp_number)
        changedData.whatsapp_number = this.whatsapp_number;

      await axios
        .put(this.$store.state.Apis.admin.update, changedData, { headers })
        .then((res) => {
          this.$store.state.message.type = "success";
          this.$store.state.message.message = res.response.data.message.english;
          this.$store.commit("OpenTheMessgae");
          this.$store.state.loading_status = "close";
          this.$store.commit("CloseTheMessgaeAfter5s");
        })
        .catch((err) => {
          this.$store.state.message.type = "error";
          this.$store.state.message.message = err.response.data.message.english;
          this.$store.commit("OpenTheMessgae");
          this.$store.state.loading_status = "close";
          this.$store.commit("CloseTheMessgaeAfter5s");
        });
    },

    handleFileChange(event) {
      if (event.target.files && event.target.files[0]) {
        this.readerFile(event.target.files[0]);
      }
    },

    readerFile(file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.selected_avatar = e.target.result;
      };
      reader.readAsDataURL(file);
    },
  },
};
</script>

<style lang="scss">
@import "../../sass/_varibels.scss";

.dash-info-page-dark {
  width: 100%;
  height: 100%;

  h1 {
    width: 100%;
    height: auto;
    border-bottom: 1px solid $border-color-dark;
    color: $font-light;
  }

  .avatar {
    max-width: 30%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 10px auto;

    @media (max-width: $phone) {
      width: 100%;
    }

    label {
      width: auto;
      height: auto;
      margin: auto;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 200px;
        height: 200px;
        border-radius: 10px;

        @media (max-width: $phone) {
          width: 150px;
          height: 150px;
        }
      }
    }

    button {
      padding: 10px 15px;
      border: 1px solid $confirm-form-green-border;
      background-color: $confirm-form-green-body;
      color: $font-light;
      cursor: pointer;
      margin: 10px;
      border-radius: 5px;
      transition-duration: 0.5s;
    }

    button:hover {
      background-color: $confirm-form-green-border;
    }

    input {
      display: none;
    }
  }

  .form {
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    label {
      width: 100%;
      height: auto;
      border-bottom: 1px solid $border-color-dark;
      color: $font-light;
      margin: 5px 0px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    input {
      width: 100%;
      height: 40px;
      border: none;
      outline: none;
      border-radius: 5px;
      padding: 0px 10px;
      background-color: $input-dark;
      color: $font-light;
    }

    textarea {
      width: 100%;
      height: 300px;
      border-radius: none;
      outline: none;
      resize: none;
      border-radius: 5px;
      padding: 10px;
      background-color: $input-dark;
      color: $font-light;
    }

    button {
      padding: 10px 15px;
      border-radius: 5px;
      cursor: pointer;
      margin: 10px 0px;
      background-color: $confirm-form-green-body;
      border: 1px solid $confirm-form-green-border;
      color: $font-light;
      transition-duration: 0.5s;
    }

    button:hover {
      background-color: $confirm-form-green-border;
    }
  }
}

.dash-info-page-light {
  width: 100%;
  height: 100%;

  h1 {
    width: 100%;
    height: auto;
    border-bottom: 1px solid $border-color-light;
    color: $font-dark;
  }

  .avatar {
    max-width: 30%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 10px auto;

    @media (max-width: $phone) {
      width: 100%;
    }

    label {
      width: auto;
      height: auto;
      margin: auto;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 200px;
        height: 200px;
        border-radius: 10px;

        @media (max-width: $phone) {
          width: 150px;
          height: 150px;
        }
      }
    }

    button {
      padding: 10px 15px;
      border: 1px solid $confirm-form-green-border;
      background-color: $confirm-form-green-body;
      color: $font-dark;
      cursor: pointer;
      margin: 10px;
      border-radius: 5px;
      transition-duration: 0.5s;
    }

    button:hover {
      background-color: $confirm-form-green-border;
    }

    input {
      display: none;
    }
  }

  .form {
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    label {
      width: 100%;
      height: auto;
      border-bottom: 1px solid $border-color-light;
      color: $font-dark;
      margin: 5px 0px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    input {
      width: 100%;
      height: 40px;
      border: none;
      outline: none;
      border-radius: 5px;
      padding: 0px 10px;
      background-color: $input-light;
      color: $font-dark;
    }

    textarea {
      width: 100%;
      height: 300px;
      border-radius: none;
      outline: none;
      resize: none;
      border-radius: 5px;
      padding: 10px;
      background-color: $input-light;
      color: $font-dark;
    }

    button {
      padding: 10px 15px;
      border-radius: 5px;
      cursor: pointer;
      margin: 10px 0px;
      background-color: $confirm-form-green-body;
      border: 1px solid $confirm-form-green-border;
      color: $font-dark;
      transition-duration: 0.5s;
    }

    button:hover {
      background-color: $confirm-form-green-border;
    }
  }
}
</style>
