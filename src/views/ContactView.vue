<template>
  <div class="contact-page">
    <h1>contact page</h1>

    <div action="">
      <label for="full_name">Full Name *</label>
      <input
        type="text"
        id="full_name"
        v-model="this.full_name"
        placeholder="Type you'r name here 🙎🏻‍♂️/🙎🏻‍♀️"
      />

      <label for="email_address">Email Address *</label>
      <input
        type="email"
        id="email_address"
        v-model="this.email_address"
        placeholder="Type you'r email address here 📧"
      />

      <label for="phone_number">Phone Number *</label>
      <input
        type="text"
        id="phone_number"
        v-model="this.phone_number"
        placeholder="type you'r phone number here 📞"
      />

      <label for="whatsapp_number">Whatsapp Number *</label>
      <input
        type="text"
        id="whatsapp_number"
        v-model="this.whatsapp_number"
        placeholder="Type you'r whatsapp number here 💬"
      />

      <label for="custom_message">Message *</label>
      <textarea
        name="custom message"
        id="custom_message"
        v-model="this.custom_message"
        placeholder="type you'r message here 📝"
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
      // start the loader
      this.$store.state.loader_status = "open";

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

          // set the messgae's type to success's object in store
          this.$store.state.message.type = "success";

          // set the success messgae to success in store
          this.$store.state.message.message = response.data.message.english;

          // to open the message
          this.$store.commit("OpenTheMessgae");

          // stop the loader
          this.$store.state.loader_status = "close";

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

          // stop the loader
          this.$store.state.loader_status = "close";

          // to close the message after 500ms
          this.$store.commit("CloseTheMessgaeAfter5s");
        });
    },
  },
};
</script>

<style lang="scss">
@import "../sass/varibels";
.contact-page {
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
    color: var(--theme-text);
    border: 1px solid;
    border-color: transparent transparent var(--theme-text) transparent;
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
      color: var(--theme-text);
      border: 1px solid;
      border-color: transparent transparent var(--border-color) transparent;
    }

    input {
      width: 100%;
      height: 40px;
      border: none;
      border-radius: 5px;
      outline: none;
      margin: 5px 0px;
      padding: 0px 10px;
      background-color: var(--input-bg);
      color: var(--theme-text);
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
      background-color: var(--blue-1);
      transition-duration: 0.5s;
    }

    button:hover {
      background-color: var(--blue-2);
    }
  }
}
</style>
