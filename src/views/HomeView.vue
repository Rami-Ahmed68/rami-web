<template>
  <div :class="`home-${this.$store.state.theme}`">
    <div class="container">
      <h1>Hi, I'm a freelance (web/app) developer based in Syria!</h1>

      <div class="header">
        <div class="info">
          <h2>Rami Ahmed</h2>
          <h4>Digital Craftsman ( Artist / Developer / Designer )</h4>
        </div>
        <img :src="this.$store.state.admin_info.avatar" alt="" />
      </div>

      <div class="data">
        <h3>work</h3>

        <p>
          {{ this.$store.state.admin_info.work }}
        </p>

        <button @click="this.$router.push('/works')">
          My Works <icon icon="arrow-right" />
        </button>

        <h3>bio</h3>

        <div class="bio-cont">
          <p
            v-for="(line, index) in this.$store.state.admin_info.bio"
            :key="index"
          >
            {{ line }}
          </p>
        </div>

        <h3>I love</h3>

        <p>
          {{ this.$store.state.admin_info.love }}
        </p>
      </div>

      <div class="on-the-web">
        <h3>On The Web</h3>

        <ul class="links-cont">
          <li>
            <a
              target="_blank"
              :href="`tel:${this.$store.state.admin_info.phone_number}`"
            >
              Phone number
            </a>
          </li>

          <li>
            <a
              target="_blank"
              :href="`https://wa.me/${this.$store.state.admin_info.whatsapp_number}`"
            >
              Whatsapp number
            </a>
          </li>
          <li>
            <a target="_blank" :href="this.$store.state.admin_info.instagram">
              Instagram
            </a>
          </li>
          <li>
            <a target="_blank" :href="this.$store.state.admin_info.facebook">
              facebook
            </a>
          </li>
          <li>
            <a :href="this.$store.state.admin_info.github" target="_blank">
              gitHub
            </a>
          </li>
          <li>
            <a target="_blank" :href="this.$store.state.admin_info.linked_in">
              LinkedIn
            </a>
          </li>
          <li>
            <a target="_blank" :href="this.$store.state.admin_info.code_wars">
              Code wars
            </a>
          </li>
        </ul>
      </div>

      <div class="email-button">
        <a href="mailto:ramiahmet68@gmail.com">🚀Email : rami@gmail.com</a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {},
  mounted() {
    this.GetAdminInfo();
  },
  methods: {
    async GetAdminInfo() {
      console.log("sendec ...");
      // start the loading
      this.$store.state.loading_status = "open";

      await axios
        .get(this.$store.state.Apis.admin.get_info)
        .then((response) => {
          // stop the loading
          this.$store.state.loading_status = "close";

          // set the admin's info in to store
          this.$store.state.admin_info = response.data.admin_data;
          console.log(response);
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
.home-dark {
  width: 100%;
  min-height: 100vh;
  background-color: $dark-theme;
  padding: 10px 0px;

  .container {
    width: 40%;
    min-height: 100vh;
    margin: auto;

    @media (max-width: $phone) {
      width: 96%;
      margin: 0px 2%;
    }

    h1 {
      padding: 10px;
      border-radius: 10px;
      margin: 5px 0px;
      color: $font-light;
      background-color: $message-dark;
      font-size: $medium;
      text-align: center;
    }

    .header {
      width: 100%;
      height: auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      @media (max-width: $phone) {
        justify-content: center;
      }

      .info {
        width: 75%;
        height: 100%;
        color: $font-light;
        @media (max-width: $phone) {
          width: 100%;
        }

        h2 {
          width: 100%;
          height: auto;
          font-size: $x4-large;
        }

        h4 {
          width: 100%;
          height: auto;
          font-size: $small;
        }
      }

      img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        border: 3px solid $dark-icon-theme-color;
        @media (max-width: $phone) {
          margin: 10px;
        }
      }
    }

    .data {
      width: 100%;
      height: auto;
      margin: 20px 0px;

      h3 {
        width: auto;
        height: auto;
        text-decoration: underline;
        color: $font-light;
        font-size: $large;
      }

      p {
        width: 98%;
        height: auto;
        margin: 3px 1%;
        color: $font-light;
        font-size: $medium;
        text-align: justify;
        position: relative;
      }

      button {
        border: none;
        outline: none;
        width: 30%;
        height: 40px;
        text-decoration: none;
        border-radius: 5px;
        font-size: $small;
        margin: 10px 35%;
        cursor: pointer;
        background-color: $blue-1-dark;
        color: $font-dark;
        transition-duration: 0.5s;

        svg {
          margin: 0px 5px;
        }
      }

      button:hover {
        background-color: $blue-1-light;
      }

      .bio-cont {
        width: 100%;
        height: auto;

        p {
          width: 98%;
          height: auto;
          margin: 3px 1%;
          color: $font-light;
          font-size: $small;
        }
      }
    }

    .on-the-web {
      h3 {
        width: auto;
        height: auto;
        text-decoration: underline;
        color: $font-light;
        font-size: $large;
      }

      .links-cont {
        width: 100%;
        height: auto;
        padding: 10px 0px;
        list-style-type: none;

        li {
          margin: 10px 0px;
          a {
            width: auto;
            list-style-type: none;
            margin: 10px 0px;
            padding: 5px 10px;
            border-radius: 5px;
            color: $blue-1-light;
            text-decoration: none;
            margin: 10px 5px;
            cursor: pointer;
            transition-duration: 0.5s;
            text-decoration: none;
            color: $blue-1-dark;
          }

          a:hover {
            background-color: $blue-2-dark;
          }
        }
      }
    }

    .email-button {
      width: 100%;
      height: auto;
      margin: 10px 0px;
      display: flex;
      justify-content: center;
      align-items: center;

      a {
        text-decoration: none;
        color: $font-dark;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
        background-color: $blue-1-dark;
        transition-duration: 0.5s;
      }

      a:hover {
        background-color: $blue-1-light;
      }
    }
  }
}
// dark

// light
.home-light {
  width: 100%;
  min-height: 100vh;
  background-color: $light-theme;
  padding: 10px 0px;

  .container {
    width: 40%;
    min-height: 100vh;
    margin: auto;
    @media (max-width: $phone) {
      width: 96%;
      margin: 0px 2%;
    }

    h1 {
      padding: 10px;
      border-radius: 10px;
      margin: 5px 0px;
      color: $font-dark;
      background-color: $message-light;
      font-size: $medium;
      text-align: center;
    }

    .header {
      width: 100%;
      height: auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      @media (max-width: $phone) {
        justify-content: center;
      }

      .info {
        width: 75%;
        height: 100%;
        color: $font-dark;

        @media (max-width: $phone) {
          width: 100%;
        }

        h2 {
          width: 100%;
          height: auto;
          font-size: $x4-large;
        }

        h4 {
          width: 100%;
          height: auto;
          font-size: $small;
        }
      }

      img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        border: 3px solid $dark-icon-theme-color;
        @media (max-width: $phone) {
          margin: 10px;
        }
      }
    }

    .data {
      width: 100%;
      height: auto;
      margin: 20px 0px;

      h3 {
        width: auto;
        height: auto;
        text-decoration: underline;
        color: $font-dark;
        font-size: $large;
      }

      p {
        width: 98%;
        height: auto;
        margin: 3px 1%;
        color: $font-dark;
        font-size: $medium;
        text-align: justify;
        position: relative;
      }

      button {
        border: none;
        outline: none;
        width: 30%;
        height: 40px;
        text-decoration: none;
        border-radius: 5px;
        font-size: $small;
        margin: 10px 35%;
        cursor: pointer;
        background-color: $blue-1-dark;
        transition-duration: 0.5s;
        color: $font-light;

        svg {
          margin: 0px 5px;
        }
      }

      button:hover {
        background-color: $blue-1-light;
      }

      .bio-cont {
        width: 100%;
        height: auto;

        p {
          width: 98%;
          height: auto;
          margin: 3px 1%;
          color: $font-dark;
          font-size: $small;
        }
      }
    }

    .on-the-web {
      h3 {
        width: auto;
        height: auto;
        text-decoration: underline;
        color: $font-dark;
        font-size: $large;
      }

      .links-cont {
        width: 100%;
        height: auto;
        padding: 10px 0px;

        li {
          margin: 10px 0px;
          list-style-type: none;
          a {
            width: auto;
            list-style-type: none;
            margin: 10px 0px;
            padding: 5px 10px;
            border-radius: 5px;
            color: $blue-1-light;
            text-decoration: none;
            margin: 10px 5px;
            cursor: pointer;
            transition-duration: 0.5s;
            text-decoration: none;
          }

          a:hover {
            background-color: $blue-2-light;
          }
        }
      }
    }

    .email-button {
      width: 100%;
      height: auto;
      margin: 10px 0px;
      display: flex;
      justify-content: center;
      align-items: center;

      a {
        text-decoration: none;
        color: $font-light;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
        background-color: $blue-1-dark;
        transition-duration: 0.5s;
      }

      a:hover {
        background-color: $blue-1-light;
      }
    }
  }
}
// light
</style>
