<template>
  <div class="dash-work-page" v-if="this.current_work">
    <div class="video-cont">
      <video
        v-if="current_work && current_work.video && !selected_video_to_show"
        class="video"
        type="video/mp4"
        :poster="
          selected_cover_to_show ? selected_cover_to_show : current_work.cover
        "
        @loadedmetadata="onVideoLoaded"
        controls
      >
        <source play :src="current_work.video" type="video/mp4" />
        <source play :src="current_work.video" type="video/ogg" />
      </video>

      <video
        v-if="selected_video_to_show"
        class="video"
        type="video/mp4"
        :poster="selected_cover_to_show ? selected_cover_to_show : null"
        @loadedmetadata="onVideoLoaded"
        controls
      >
        <source :src="selected_video_to_show" type="video/mp4" />
        <source :src="selected_video_to_show" type="video/ogg" />
      </video>

      <img
        :src="current_work.cover"
        v-if="
          current_work &&
          current_work.cover &&
          !current_work.video &&
          !selected_cover_to_show
        "
      />

      <img
        :src="selected_cover_to_show"
        v-if="current_work && !current_work.video && selected_cover_to_show"
      />

      <div class="buttons-cont">
        <label for="video">
          <span id="add">➕🎬</span>
        </label>
        <input
          id="video"
          type="file"
          accept="video/*"
          ref="select_video"
          @change="handleVideoChange"
        />

        <span id="delete" @click="deleteVideo">🗑️🎬</span>

        <label for="cover">
          <span id="add">➕🖼️</span>
        </label>

        <input
          id="cover"
          type="file"
          accept="image/*"
          ref="cover"
          @change="handleFileChange"
        />

        <span id="delete" @click="deleteCover">🗑️🖼️</span>
      </div>
    </div>

    <button
      class="change_cover"
      v-if="this.selected_cover_to_show !== ''"
      @click="ChangeCover"
    >
      Change Cover
    </button>
    <button
      class="change_video"
      v-if="this.selected_video_to_show !== ''"
      @click="ChangeVideo"
    >
      Change Video
    </button>

    <label for="title"
      >Title <span>{{ this.title.length }}</span></label
    >
    <input id="title" type="text" v-model="this.title" />

    <label for="description"
      >Description <span>{{ this.description.length }}</span></label
    >
    <textarea
      id="description"
      type="text"
      v-model="this.description"
    ></textarea>

    <label for="front_end"
      >Front End <span>{{ front_end.length }}</span></label
    >
    <input type="text" id="front_end" v-model="this.current_front_end" />
    <div class="front_end_cont">
      <icon
        id="add_icon"
        icon="plus"
        @click="
          {
            {
              this.front_end.push(this.current_front_end);
              this.current_front_end = '';
            }
          }
        "
      />
      <span
        v-for="(ele, index) in this.front_end"
        :key="index"
        @dblclick="updateFrontEndElement(ele)"
        ><icon icon="xmark" @click="deleteFrontEndTag(ele)" /> {{ ele }}</span
      >
    </div>

    <label for="back_end"
      >Back End <span>{{ back_end.length }}</span></label
    >
    <input type="text" id="back_end" v-model="this.current_back_end" />
    <div class="back_end_cont">
      <icon
        id="add_icon"
        icon="plus"
        @click="
          {
            {
              this.back_end.push(this.current_back_end);
              this.current_back_end = '';
            }
          }
        "
      />
      <span
        v-for="(ele, index) in this.back_end"
        :key="index"
        @dblclick="updateBackEndElement(ele)"
        ><icon icon="xmark" @click="deleteBackEndTag(ele)" /> {{ ele }}</span
      >
    </div>

    <label for="web_site_link"
      >Web <span>{{ web_site_link.length }}</span></label
    >
    <input type="text" id="web_site_link" v-model="this.web_site_link" />

    <label for="android_link"
      >Android <span>{{ android_link.length }}</span></label
    >
    <input type="text" id="android_link" v-model="this.android_link" />

    <label for="ios_link"
      >Ios <span>{{ ios_link.length }}</span></label
    >
    <input type="text" id="ios_link" v-model="this.ios_link" />

    <label for="type"
      >Type <span>{{ this.type === "Work" ? "👨🏻‍💻" : "🤝" }}</span></label
    >
    <select name="" id="type" v-model="this.type">
      <option value="Work">Work 👨🏻‍💻</option>
      <option value="Collaborations">Collaborations 🤝</option>
    </select>

    <label for="created_at">Created At</label>
    <input type="text" id="created_at" v-model="this.created_at" />

    <label
      >Images🖼️
      <span>{{
        this.selected_images_to_send.length + this.current_work.images.length
      }}</span></label
    >

    <div class="images-cont">
      <label for="images">
        <icon icon="plus" />
      </label>

      <input
        type="file"
        accept="image/*"
        id="images"
        multiple
        @change="handleImagesFileChange"
      />

      <img
        v-for="(image, index) in this.selected_images_to_show"
        :key="index"
        :src="image"
        @click="RemoveSelectedImage(index)"
      />

      <img
        v-for="(image, index) in this.current_work.images"
        :key="index"
        :src="image"
        @click="RemoveImagePath(image)"
      />
    </div>

    <button @click="UpdateData">Update</button>
    <button @click="DeleteWork" class="delete_work">Delete</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "work-page",
  data() {
    return {
      current_work: "",
      title: "",
      created_at: "",
      description: "",
      front_end: [],
      back_end: [],
      current_front_end: "",
      current_back_end: "",
      type: "",
      web: "",
      android_link: "",
      ios_link: "",
      images: [],
      cover: "",
      video: "",
      selected_images_to_send: [],
      selected_images_to_show: [],
      selected_cover_to_send: [],
      selected_cover_to_show: "",
      selected_video_to_send: [],
      selected_video_to_show: "",
      images_for_delete: [],
    };
  },
  mounted() {
    // call to GetWork method
    this.GetWork();

    // this.$refs.cover.addEventListener("change", this.handleFileChange);
    // this.$refs.select_video.addEventListener("change", this.handleVideoChange);
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
          // set the work's data in to store
          this.current_work = response.data.work_data;

          this.title = response.data.work_data.title;
          this.created_at = response.data.work_data.created_at;
          this.description = response.data.work_data.description;
          this.front_end = response.data.work_data.front_end;
          this.back_end = response.data.work_data.back_end;
          this.type = response.data.work_data.type;
          this.web_site_link = response.data.work_data.web_site_link;
          this.android_link = response.data.work_data.android_link;
          this.ios_link = response.data.work_data.ios_link;
          this.video = response.data.work_data.video;
          this.cover = response.data.work_data.cover;
          this.images = response.data.work_data.images;

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

    deleteVideo() {
      this.selected_video_to_show = "";
      this.selected_video_to_send = "";
    },

    deleteCover() {
      this.selected_cover_to_show = "";
      this.selected_cover_to_send = "";
    },

    updateFrontEndElement(ele) {
      this.current_front_end = ele;

      this.front_end = this.front_end.filter((element) => element != ele);
    },

    updateBackEndElement(ele) {
      this.current_back_end = ele;

      this.back_end = this.back_end.filter((element) => element != ele);
    },

    deleteBackEndTag(tag) {
      this.back_end = this.back_end.filter((ele) => ele != tag);
    },

    deleteFrontEndTag(tag) {
      this.front_end = this.front_end.filter((ele) => ele != tag);
    },

    handleFileChange(event) {
      if (event.target.id === "cover") {
        this.readerFiles(event.target.files[0]).then((result) => {
          this.selected_cover_to_show = result;
        });
        this.selected_cover_to_send = [event.target.files[0]];
      }
    },

    handleImagesFileChange(event) {
      this.selected_images_to_send = event.target.files;

      for (let i = 0; i < this.selected_images_to_send.length; i++) {
        this.readerFiles(this.selected_images_to_send[i]).then((result) => {
          this.selected_images_to_show.push(result);
        });
      }
    },

    handleVideoChange(event) {
      if (event.target.id === "video") {
        this.readerFiles(event.target.files[0]).then((result) => {
          this.selected_video_to_show = result;
        });
        this.selected_video_to_send = [event.target.files[0]];
      }
    },

    async readerFiles(file) {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = (e) => resolve(e.target.result);
        reader.readAsDataURL(file);
      });
    },

    RemoveSelectedImage(index) {
      this.selected_images_to_show.splice(index, 1);
      const filesArray = Array.from(this.selected_images_to_send);
      filesArray.splice(index, 1);
      this.selected_images_to_send = filesArray;
    },

    RemoveImagePath(path) {
      this.current_work.images = this.current_work.images.filter((ele) => {
        this.images_for_delete.push(path);
        return ele != path;
      });
    },

    async UpdateData() {
      this.$store.state.loader_status = "open";

      let formData = new FormData();

      const headers = {
        Authorization: `Bearer ${this.$store.state.admin_data.token}`,
      };

      formData.append("admin_id", this.$store.state.admin_data._id);
      formData.append("work_id", this.current_work._id);

      if (this.title !== this.current_work.title)
        formData.append("title", this.title);

      if (this.description !== this.current_work.description)
        formData.append("description", this.description);

      formData.append("front_end", this.front_end.join("split_here"));

      formData.append("back_end", this.back_end.join("split_here"));

      if (this.type !== this.current_work.type)
        formData.append("type", this.type);

      if (this.web_site_link !== this.current_work.web_site_link)
        formData.append("web_site_link", this.web_site_link);

      if (this.android_link !== this.current_work.android_link)
        formData.append("android_link", this.android_link);

      if (this.ios_link !== this.current_work.ios_link)
        formData.append("ios_link", this.ios_link);

      if (this.created_at !== this.current_work.created_at)
        formData.append("created_at", this.created_at);

      if (this.images_for_delete.length > 0) {
        formData.append(
          "images_for_delete",
          this.images_for_delete.join("split_here")
        );
      }

      for (const file of this.selected_images_to_send) {
        formData.append("files", file, file.name);
      }

      await axios
        .put(this.$store.state.Apis.works.update, formData, {
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

    async ChangeCover() {
      this.$store.state.loader_status = "open";

      let formData = new FormData();

      const headers = {
        Authorization: `Bearer ${this.$store.state.admin_data.token}`,
      };

      formData.append("admin_id", this.$store.state.admin_data._id);
      formData.append("work_id", this.current_work._id);

      for (const file of this.selected_cover_to_send) {
        formData.append("files", file, file.name);
      }

      await axios
        .put(this.$store.state.Apis.works.change_cover, formData, {
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

    async ChangeVideo() {
      this.$store.state.loader_status = "open";

      let formData = new FormData();

      const headers = {
        Authorization: `Bearer ${this.$store.state.admin_data.token}`,
      };

      formData.append("admin_id", this.$store.state.admin_data._id);
      formData.append("work_id", this.current_work._id);

      for (const file of this.selected_video_to_send) {
        formData.append("files", file, file.name);
      }

      await axios
        .put(this.$store.state.Apis.works.change_video, formData, {
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

    async DeleteWork() {
      this.$store.commit("OpenOrCloseConfirmDeleteWork");

      this.$store.state.work_id_for_delete = this.current_work._id;
    },
  },
};
</script>

<style lang="scss">
@import "../../sass/varibels";
.dash-work-page {
  width: 100%;
  height: 100%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;

  @media (max-width: $phone) {
    width: 96%;
    margin: 0px 2%;
  }

  .video-cont {
    width: 100%;
    min-height: 300px;
    max-height: 500px;
    position: relative;

    .buttons-cont {
      max-width: 100px;
      min-width: 40px;
      max-height: 100%;
      position: absolute;
      right: 5px;
      top: 5px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: end;

      label {
        width: auto;
        border: none;
      }

      input {
        display: none;
      }

      #add,
      #delete {
        padding: 5px;
        border-radius: 4px;
        cursor: pointer;
        color: var(--theme-text);
        background-color: var(--confirm-form-green-body);
        border: 1px solid var(--confirm-form-green-border);
        transition-duration: 0.5s;
        margin: 5px 0px;
      }

      #delete {
        background-color: var(--confirm-form-red-body);
        border: 1px solid var(--confirm-form-red-border);
      }

      #delete:hover {
        background-color: var(--confirm-form-red-border);
      }

      #add:hover {
        background-color: var(--confirm-form-green-border);
      }
    }

    .video {
      width: 100%;
      height: auto;
      border-radius: 5px;
    }
  }

  .change_cover,
  .change_video {
    width: 100%;
    height: 40px;
    margin: 3px 0px;
    border-radius: 5px;
    border: none;
    outline: none;
    color: var(--theme-text);
    background-color: var(--confirm-form-green-body);
    border: 1px solid var(--confirm-form-green-border);
  }

  .change_cover:hover {
    background-color: var(--confirm-form-green-border);
  }

  .change_video:hover {
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

  input,
  select {
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

  .front_end_cont,
  .back_end_cont {
    width: 100%;
    min-height: 200px;
    border-radius: 5px;
    margin: 5px 0px;
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    align-items: start;
    background-color: var(--input-bg);
    padding: 5px;
    position: relative;

    #add_icon {
      padding: 5px;
      border-radius: 3px;
      color: var(--theme-text);
      cursor: pointer;
      position: absolute;
      right: 5px;
      bottom: 5px;
      border: 1px solid var(--border-color);
      background-color: var(--icon-theme-color);
    }

    span {
      padding: 3px;
      border-radius: 3px;
      color: var(--theme-text);
      margin: 3px;
      background-color: var(--message-bg);
      cursor: pointer;
    }
  }

  .images-cont {
    width: 100%;
    min-height: 100px;
    margin: 5px 0px;
    border-radius: 5px;
    background-color: var(--input-bg);
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    align-items: center;
    padding: 5px;
    position: relative;

    label {
      width: auto;
      height: auto;
      border: 1px solid var(--border-color);
      position: absolute;
      right: 3px;
      top: 3px;
      border-radius: 3px;

      svg {
        padding: 10px;
        color: var(--theme-text);
        cursor: pointer;
      }
    }

    input {
      display: none;
    }

    img {
      max-width: 200px;
      height: auto;
      margin: 5px;
      cursor: pointer;
      border-radius: 5px;
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

  .delete_work {
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

  .delete_work:hover {
    background-color: var(--confirm-form-red-border);
  }
}

.dash-work-page::-webkit-scrollbar {
  width: 0px;
}
</style>
