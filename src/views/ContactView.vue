<template>
  <div :class="`contact-page-${this.$store.state.theme}`">
    <h1>contact page</h1>

    <form action="">
      <label for="full_name">Full Name</label>
      <input type="text" id="full_name" />

      <label for="email_address">Email Address</label>
      <input type="email" id="email_address" />

      <label for="phone_number">Phone Number</label>
      <input type="text" id="phone_number" />

      <label for="whatsapp_number">Whatsapp Number</label>
      <input type="text" id="whatsapp_number" />

      <label for="custom_message">Custom Message</label>
      <textarea name="custom message" id="custom_message"></textarea>

      <button @click="sendMessage">Send</button>
    </form>
  </div>
</template>

<script>
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
    sendMessage() {
      console.log("sended");
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

  form {
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

  form {
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
