<template>
  <div :class="`log-in-page-${this.$store.state.theme}`">
    <div class="form">
      <a href="/">
        <img
          v-if="this.$store.state.theme == 'dark'"
          src="../assets/light_logopng.png"
          alt=""
        />
        <img
          v-if="this.$store.state.theme == 'light'"
          src="../assets/black_logo.png"
        />
      </a>

      <label for="email">Email Address</label>
      <input
        type="email"
        v-model="this.email_address"
        placeholder="Type Email Here 📧"
        id="email"
      />

      <label for="password">Passowrd Address</label>
      <div class="input-cont">
        <icon icon="eye" @click="this.show_hidde_password" />
        <input
          :type="this.password_input_type"
          v-model="this.password"
          placeholder="Type Passowrd Here 🔑"
        />
      </div>

      <button @click="LogIn">log In</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      email_address: "",
      password: "",
      password_input_type: "password",
    };
  },
  methods: {
    // show text
    show_hidde_password() {
      this.password_input_type =
        this.password_input_type == "text" ? "password" : "text";
    },

    // login method
    async LogIn() {
      // start the loading
      this.$store.state.loading_status = "open";

      await axios
        .post(this.$store.state.Apis.auth.log_in, {
          email_address: this.email_address,
          password: this.password,
        })
        .then((response) => {
          // save the admin's data in localStorage
          window.localStorage.setItem(
            "rami_admin",
            JSON.stringify({
              _id: response.data.admin_data._id,
              email_address: response.data.admin_data.email_address,
              avatar: response.data.admin_data.avatar,
              token: response.data.token,
            })
          );

          // set the messgae's type to success's object in store
          this.$store.state.message.type = "success";

          // set the success messgae to success in store
          this.$store.state.message.message = response.data.message.english;

          // to open the message
          this.$store.commit("OpenTheMessgae");

          // stop the loading
          this.$store.state.loading_status = "close";

          // send teh admin to dash board
          this.$router.push("/dashboard");

          // to close the message after 500ms
          this.$store.commit("CloseTheMessgaeAfter5s");
        })
        .catch((error) => {
          // set the messgae's type to error's object in store
          this.$store.state.message.type = "error";

          // set the error messgae to error in store
          this.$store.state.message.message =
            error.response.data.message.english;

          // to open the message
          this.$store.commit("OpenTheMessgae");

          // stop the loading
          this.$store.state.loading_status = "close";

          // to close the message after 500ms
          this.$store.commit("CloseTheMessgaeAfter5s");
        });
    },
  },
};
</script>

<style lang="scss">
@import "../sass/varibels";
// dark
.log-in-page-dark {
  width: 40%;
  height: auto;
  margin: auto;
  padding: 30px 0px;

  @media (max-width: $phone) {
    width: 96%;
    height: auto;
    margin: 10px 2%;
  }

  .form {
    width: 90%;
    height: auto;
    margin: 0px 5%;
    background-color: $log-in-dark;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 0 10px $shadow-black;

    img {
      width: 100px;
      height: 100px;
    }

    label {
      width: 100%;
      height: auto;
      border: 1px solid;
      border-color: transparent transparent $font-light transparent;
      color: $font-light;
      margin: 10px 0px;
    }

    input {
      width: 100%;
      height: 40px;
      border: none;
      padding: 0px 10px;
      border-radius: 5px;
      outline: none;
      color: $font-light;
      background-color: $input-dark;
    }

    div {
      width: 100%;
      max-height: 40px;
      border-radius: 5px;
      background-color: $input-dark;
      position: relative;

      input {
        width: 89%;
        height: 40px;
        margin-left: 11%;
        padding: 0px 10px;
        border: none;
        outline: none;
        color: $font-light;
        background-color: $input-dark;
      }

      svg {
        position: absolute;
        left: 2px;
        top: 2px;
        padding: 10px;
        border-radius: 5px;
        color: $font-dark;
        background-color: $blue-1-dark;
        cursor: pointer;
        transition-duration: 0.5s;
      }

      svg:hover {
        background-color: $blue-1-light;
      }
    }

    button {
      padding: 10px 15px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      margin: 10px 0px;
      color: $font-dark;
      background-color: $blue-1-dark;
      transition-duration: 0.5s;
    }

    button:hover {
      background-color: $blue-1-light;
    }
  }
}
// dark

// light
.log-in-page-light {
  width: 40%;
  height: auto;
  margin: auto;
  padding: 30px 0px;

  @media (max-width: $phone) {
    width: 96%;
    height: auto;
    margin: 10px 2%;
  }

  .form {
    width: 90%;
    height: auto;
    margin: 0px 5%;
    background-color: $log-in-light;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 0 10px $shadow-black;

    img {
      width: 100px;
      height: 100px;
    }

    label {
      width: 100%;
      height: auto;
      border: 1px solid;
      border-color: transparent transparent $font-dark transparent;
      color: $font-dark;
      margin: 10px 0px;
    }

    input {
      width: 100%;
      height: 40px;
      border: none;
      padding: 0px 10px;
      border-radius: 5px;
      outline: none;
      color: $font-dark;
      background-color: $input-light;
    }

    div {
      width: 100%;
      max-height: 40px;
      border-radius: 5px;
      background-color: $input-light;
      position: relative;

      input {
        width: 89%;
        height: 40px;
        margin-left: 11%;
        padding: 0px 10px;
        border: none;
        outline: none;
        color: $font-dark;
        background-color: $input-light;
      }

      svg {
        position: absolute;
        left: 2px;
        top: 2px;
        padding: 10px;
        border-radius: 5px;
        color: $font-dark;
        background-color: $blue-1-light;
        cursor: pointer;
        transition-duration: 0.5s;
      }

      svg:hover {
        background-color: $blue-1-dark;
      }
    }

    button {
      padding: 10px 15px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      margin: 10px 0px;
      color: $font-dark;
      background-color: $blue-1-light;
      transition-duration: 0.5s;
    }

    button:hover {
      background-color: $blue-1-dark;
    }
  }
}
// light
</style>
