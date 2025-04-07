<template>
  <div class="dash-info-page">
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

      <div class="bio_lines">
        <span
          v-for="(line, index) in this.bio_list"
          :key="index"
          @dblclick="moveToUpdateMode(line)"
        >
          <icon icon="xmark" @click="removeLine(line)" />
          {{ line }}</span
        >
        <icon icon="plus" @click="addNewLine" id="plus" />
      </div>

      <label for="love"
        >Love <span>{{ love.length }}</span></label
      >
      <textarea
        name=""
        placeholder="Type your love here ..."
        id="love"
        v-model="love"
      ></textarea>

      <label for="facebook"
        >Facebook <span>{{ facebook.length }}</span></label
      >
      <input
        type="text"
        placeholder="Type your facebook here ..."
        id="facebook"
        v-model="facebook"
      />

      <label for="instagram"
        >Instagram <span>{{ instagram.length }}</span></label
      >
      <input
        type="text"
        placeholder="Type your instagram here ..."
        id="instagram"
        v-model="instagram"
      />

      <label for="linked_in"
        >Linked In <span>{{ linked_in.length }}</span></label
      >
      <input
        type="text"
        placeholder="Type your linked_in here ..."
        id="linked_in"
        v-model="linked_in"
      />

      <label for="github"
        >Github <span>{{ github.length }}</span></label
      >
      <input
        type="text"
        placeholder="Type your github here ..."
        id="github"
        v-model="github"
      />

      <label for="code_wars"
        >Codewars <span>{{ code_wars.length }}</span></label
      >
      <input
        type="text"
        placeholder="Type your code_wars here ..."
        id="code_wars"
        v-model="code_wars"
      />

      <label for="whatsapp_number"
        >Whatsapp Number <span>{{ whatsapp_number.length }}</span></label
      >
      <input
        type="text"
        placeholder="Type your whatsapp_number here ..."
        id="whatsapp_number"
        v-model="whatsapp_number"
      />

      <label for="phone_number"
        >Phone Number <span>{{ phone_number.length }}</span></label
      >
      <input
        type="text"
        placeholder="Type your Phone Number here ..."
        id="phone_number"
        v-model="phone_number"
      />

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
      selected_avatar_to_send: [],
      name: "",
      work: "",
      bio: "",
      love: "",
      code_wars: "",
      github: "",
      facebook: "",
      instagram: "",
      linked_in: "",
      phone_number: "",
      whatsapp_number: "",
      bio_list: [],
    };
  },
  mounted() {
    this.GetAdminInfo();
    this.$refs.avatar.addEventListener("change", this.handleFileChange);
  },
  methods: {
    async GetAdminInfo() {
      this.$store.state.loader_status = "open";

      await axios
        .get(this.$store.state.Apis.admin.get_info)
        .then((response) => {
          this.$store.state.loader_status = "close";
          this.name = response.data.admin_data.name;
          this.work = response.data.admin_data.work;
          this.bio_list = response.data.admin_data.bio;
          this.love = response.data.admin_data.love;
          this.code_wars = response.data.admin_data.code_wars;
          this.github = response.data.admin_data.github;
          this.facebook = response.data.admin_data.facebook;
          this.instagram = response.data.admin_data.instagram;
          this.whatsapp_number = response.data.admin_data.whatsapp_number;
          this.phone_number = response.data.admin_data.phone_number;
          this.linked_in = response.data.admin_data.linked_in;
        })
        .catch((error) => {
          this.$store.state.message.type = "error";
          this.$store.state.message.message =
            error.response.data.message.english;
          this.$store.commit("OpenTheMessgae");
          this.$store.state.loader_status = "close";
          this.$store.commit("CloseTheMessgaeAfter5s");
        });
    },

    async ChangeAvatar() {
      this.$store.state.loader_status = "open";

      const headers = {
        Authorization: `Bearer ${this.$store.state.admin_data.token}`,
      };

      let formData = new FormData();

      formData.append("admin_id", this.$store.state.admin_data._id);
      for (const file of this.selected_avatar_to_send) {
        formData.append("files", file, file.name);
      }

      await axios
        .put(this.$store.state.Apis.admin.change_avatar, formData, {
          headers,
          onUploadProgress: (progressEvent) => {
            this.$store.state.loading_rate = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
          },
        })
        .then((res) => {
          let originalData = JSON.parse(
            window.localStorage.getItem("rami_admin")
          );
          originalData.avatar = res.data.new_avatar;
          window.localStorage.setItem(
            "rami_admin",
            JSON.stringify(originalData)
          );
          this.$store.state.admin_data = JSON.parse(
            window.localStorage.getItem("rami_admin")
          );
          this.selected_avatar = "";
          this.$store.state.loader_status = "close";
          this.$store.state.loading_rate = 0;
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

    async UpdateInfo() {
      this.$store.state.loader_status = "open";

      const headers = {
        Authorization: `Bearer ${this.$store.state.admin_data.token}`,
      };

      let changedData = {
        admin_id: this.$store.state.admin_data._id,
      };

      const originalData = this.$store.state.admin_data;

      if (this.name !== originalData.name) changedData.name = this.name;
      if (this.work !== originalData.work) changedData.work = this.work;
      if (this.bio !== originalData.bio)
        changedData.bio = this.bio_list.join("split_here");
      if (this.love !== originalData.love) changedData.love = this.love;
      if (this.code_wars !== originalData.code_wars)
        changedData.code_wars = this.code_wars;
      if (this.github !== originalData.github) changedData.github = this.github;
      if (this.facebook !== originalData.facebook)
        changedData.facebook = this.facebook;
      if (this.instagram !== originalData.instagram)
        changedData.instagram = this.instagram;
      if (this.linked_in !== originalData.linked_in)
        changedData.linked_in = this.linked_in;
      if (this.linked_in !== originalData.linked_in)
        changedData.linked_in = this.linked_in;
      if (this.phone_number !== originalData.phone_number)
        changedData.phone_number = this.phone_number;
      if (this.whatsapp_number !== originalData.whatsapp_number)
        changedData.whatsapp_number = this.whatsapp_number;

      await axios
        .put(this.$store.state.Apis.admin.update, changedData, {
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

    handleFileChange(event) {
      if (event.target.files && event.target.files[0]) {
        this.selected_avatar_to_send.push(event.target.files[0]);
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

    addNewLine() {
      this.bio_list.push(this.bio);
      this.bio = "";
    },

    moveToUpdateMode(line) {
      this.bio = line;
    },

    removeLine(line) {
      this.bio_list = this.bio_list.filter((ele) => ele !== line);
    },
  },
};
</script>

<style lang="scss">
@import "../../sass/_varibels.scss";

.dash-info-page {
  width: 100%;
  height: 100%;

  h1 {
    width: 100%;
    height: auto;
    border-bottom: 1px solid var(--border-color);
    color: var(--theme-text);
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
      border: 1px solid var(--confirm-form-green-border);
      background-color: var(--confirm-form-green-body);
      color: var(--theme-text);
      cursor: pointer;
      margin: 10px;
      border-radius: 5px;
      transition-duration: 0.5s;
    }

    button:hover {
      background-color: var(--confirm-form-green-border);
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
      border-bottom: 1px solid var(--border-color);
      color: var(--theme-text);
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
      background-color: var(--input-bg);
      color: var(--theme-text);
    }

    textarea {
      width: 100%;
      height: 300px;
      border-radius: none;
      outline: none;
      resize: none;
      border-radius: 5px;
      padding: 10px;
      background-color: var(--input-bg);
      color: var(--theme-text);
      border: none;
    }

    .bio_lines {
      width: 100%;
      min-height: 100px;
      border-radius: 5px;
      background-color: var(--input-bg);
      display: flex;
      flex-wrap: wrap;
      justify-content: start;
      align-items: start;
      padding: 5px;
      margin-top: 10px;
      position: relative;

      span {
        padding: 3px;
        border-radius: 3px;
        margin: 3px;
        color: var(--theme-text);
        background-color: var(--message-bg);
        cursor: pointer;

        svg {
          padding: 5px;
          border-radius: 3px;
          background-color: var(--dark-icon-theme-color);
        }
      }

      #plus {
        padding: 10px;
        border-radius: 3px;
        color: var(--theme-text);
        border: 1px solid var(--border-color);
        cursor: pointer;
        position: absolute;
        right: 3px;
        bottom: 3px;
      }
    }

    button {
      padding: 10px 15px;
      border-radius: 5px;
      cursor: pointer;
      margin: 10px 0px;
      background-color: var(--confirm-form-green-body);
      border: 1px solid var(--confirm-form-green-border);
      color: var(--theme-text);
      transition-duration: 0.5s;
    }

    button:hover {
      background-color: var(--confirm-form-green-border);
    }
  }
}
</style>
