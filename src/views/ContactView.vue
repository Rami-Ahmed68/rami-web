<template>
  <div :class="`contact-page-${this.$store.state.theme}`">
    <h1>contact page</h1>

    <div action="">
      <label for="full_name">Full Name *</label>
      <input type="text" id="full_name" v-model="this.full_name" />

      <label for="email_address">Email Address *</label>
      <input type="email" id="email_address" v-model="this.email_address" />

      <label for="phone_number">Phone Number *</label>
      <input type="text" id="phone_number" v-model="this.phone_number" />

      <label for="whatsapp_number">Whatsapp Number *</label>
      <input type="text" id="whatsapp_number" v-model="this.whatsapp_number" />

      <label for="custom_message">Custom Message *</label>
      <textarea
        name="custom message"
        id="custom_message"
        v-model="this.custom_message"
      ></textarea>

      <button @click="SendMessage">Send</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      full_name: "",
      email_address: "",
      phone_number: "",
      whatsapp_number: "",
      custom_message: "",
    };
  },
  methods: {
    // send a message
    async SendMessage() {
      // start the loading
      this.$store.state.loading_status = "open";

      // create teh body_data
      const body_data = {
        full_name: this.full_name,
        email_address: this.email_address,
        phone_number: this.phone_number,
        whatsapp_number: this.whatsapp_number,
        custom_message: this.custom_message,
        created_at: await this.$store.dispatch("generateDate"),
      };

      await axios
        .post(this.$store.state.Apis.messages.create, body_data)
        .then((response) => {
          // emptying the inputs data
          this.full_name = "";
          this.email_address = "";
          this.phone_number = "";
          this.whatsapp_number = "";
          this.custom_message = "";

          // stop the loading
          this.$store.state.loading_status = "close";

          // set the messgae's type to success's object in store
          this.$store.state.message.type = "success";

          // set the success messgae to success in store
          this.$store.state.message.message = response.data.message.english;

          // to open the message
          this.$store.commit("OpenTheMessgae");

          // to close the message after 500ms
          this.$store.commit("CloseTheMessgaeAfter5s");
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
          this.$store.commit("CloseTheMessgaeAfter5s");
        });
    },
  },
};
</script>

<style lang="scss">
@import "../sass/varibels";
// dark
.contact-page-dark {
  width: 40%;
  height: auto;
  margin: auto;
  padding-bottom: 10px;

  @media (max-width: $phone) {
    width: 96%;
    margin: 5px 2%;
  }

  h1 {
    width: 100%;
    height: auto;
    color: $font-light;
    border: 1px solid;
    border-color: transparent transparent $font-light transparent;
  }

  div {
    width: 100%;
    height: auto;
    margin: 10px 0px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 10px 0px;

    label {
      width: 100%;
      height: auto;
      color: $font-light;
      border: 1px solid;
      border-color: transparent transparent $border-color-dark transparent;
    }

    input {
      width: 100%;
      height: 40px;
      border: none;
      border-radius: 5px;
      outline: none;
      margin: 5px 0px;
      padding: 0px 10px;
      background-color: $input-dark;
      color: $font-light;
    }

    textarea {
      @extend input;
      height: 300px;
      resize: none;
      padding: 10px;
    }

    button {
      padding: 10px 15px;
      border: none;
      margin: 10px 0px;
      outline: none;
      border-radius: 5px;
      cursor: pointer;
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
.contact-page-light {
  width: 40%;
  height: auto;
  margin: auto;
  padding-bottom: 10px;

  @media (max-width: $phone) {
    width: 96%;
    margin: 5px 2%;
  }

  h1 {
    width: 100%;
    height: auto;
    color: $font-dark;
    border: 1px solid;
    border-color: transparent transparent $font-dark transparent;
  }

  div {
    width: 100%;
    height: auto;
    margin: 10px 0px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 10px 0px;

    label {
      width: 100%;
      height: auto;
      color: $font-dark;
      border: 1px solid;
      border-color: transparent transparent $border-color-dark transparent;
    }

    input {
      width: 100%;
      height: 40px;
      border: none;
      border-radius: 5px;
      outline: none;
      margin: 5px 0px;
      padding: 0px 10px;
      background-color: $input-light;
      color: $font-dark;
    }

    textarea {
      @extend input;
      height: 300px;
      resize: none;
      padding: 10px;
    }

    button {
      padding: 10px 15px;
      border: none;
      margin: 10px 0px;
      outline: none;
      border-radius: 5px;
      cursor: pointer;
      background-color: $blue-1-light;
      transition-duration: 0.5s;
    }

    button:hover {
      background-color: $blue-1-light;
    }
  }
}
// light
</style>
