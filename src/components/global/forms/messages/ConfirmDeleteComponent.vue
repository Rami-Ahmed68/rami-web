<template>
  <div
    :class="`confirm-delete-message-${this.$store.state.confirm_delete_message_status}-${this.$store.state.theme}`"
  >
    <h4>Delete the message</h4>
    <button class="delete">Delete</button>
    <button
      class="cancel"
      @click="this.$store.commit('ChangeconfirmDeleteMessageStatus')"
    >
      Cancel
    </button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {};
  },
  methods: {
    async DeleteMessage() {
      // start the loading
      this.$store.state.loading_status = "open";

      await axios
        .delete(this.$store.state.Apis.messages.delete)
        .then((response) => {
          console.log(response);
          // set the messgae's type to success's object in store
          this.$store.state.message.type = "success";

          // set the success messgae to success in store
          this.$store.state.message.message = response.data.message.english;

          // to open the message
          this.$store.commit("OpenTheMessgae");

          // stop the loading
          this.$store.state.loading_status = "close";

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
@import "../../../../sass/varibels";

// dark
.confirm-delete-message-open-dark {
  width: 40%;
  height: auto;
  background-color: $confirm-form-dark;
  backdrop-filter: blur(20px);
  position: fixed;
  padding: 5px;
  bottom: 10px;
  left: 30%;
  border-radius: 5px;
  opacity: 1;
  transition-duration: 0.5s;
  box-shadow: 0 0 10px $shadow-black;

  @media (max-width: $phone) {
    width: 90%;
    left: 5%;
  }

  h4 {
    width: 100%;
    height: auto;
    color: $font-light;
    border: 1px solid $font-light;
    border-color: transparent transparent $font-light transparent;
  }

  button {
    width: 100%;
    height: 40px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: $font-light;
    margin-top: 5px;
    transition-duration: 0.5s;
  }

  .delete {
    background-color: $confirm-form-red-body;
    border: 1px solid $confirm-form-red-border;
  }

  .delete:hover {
    background-color: $confirm-form-red-border;
  }

  .cancel {
    background-color: $confirm-form-green-body;
    border: 1px solid $confirm-form-green-border;
  }

  .cancel:hover {
    background-color: $confirm-form-green-border;
  }
}

.confirm-delete-message-close-dark {
  @extend .confirm-delete-message-open-dark;
  bottom: -30%;
  opacity: 0;
}
// dark

// light
.confirm-delete-message-open-light {
  width: 40%;
  height: auto;
  background-color: $confirm-form-light;
  backdrop-filter: blur(20px);
  position: fixed;
  padding: 5px;
  bottom: 10px;
  left: 30%;
  border-radius: 5px;
  opacity: 1;
  transition-duration: 0.5s;
  box-shadow: 0 0 10px $shadow-light;

  @media (max-width: $phone) {
    width: 90%;
    left: 5%;
  }

  h4 {
    width: 100%;
    height: auto;
    color: $font-dark;
    border: 1px solid $font-dark;
    border-color: transparent transparent $font-dark transparent;
  }

  button {
    width: 100%;
    height: 40px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: $font-dark;
    margin-top: 5px;
    transition-duration: 0.5s;
  }

  .delete {
    background-color: $confirm-form-red-body;
    border: 1px solid $confirm-form-red-border;
  }

  .delete:hover {
    background-color: $confirm-form-red-border;
  }

  .cancel {
    background-color: $confirm-form-green-body;
    border: 1px solid $confirm-form-green-border;
  }

  .cancel:hover {
    background-color: $confirm-form-green-border;
  }
}

.confirm-delete-message-close-light {
  @extend .confirm-delete-message-open-light;
  bottom: -30%;
  opacity: 0;
}
// light
</style>
