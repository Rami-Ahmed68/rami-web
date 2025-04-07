<template>
  <div
    :class="`confirm-delete-message-${this.$store.state.confirm_delete_message_status}`"
  >
    <h4>Delete the message</h4>
    <button class="delete" @click="DeleteMessage">Delete</button>
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
      // start the loader
      this.$store.state.loader_status = "open";
      // create headers
      const headers = {
        Authorization: `Bearer ${this.$store.state.admin_data.token}`,
      };

      // create teh body data
      const data = {
        admin_id: this.$store.state.admin_data._id,
        message_id: this.$store.state.message_id_for_delet,
      };

      await axios
        .delete(this.$store.state.Apis.messages.delete, { headers, data })
        .then((response) => {
          // filter the message
          this.$store.state.messages_array =
            this.$store.state.messages_array.filter(
              (message) => message._id != this.$store.state.message_id_for_delet
            );

          // set the messgae's type to success's object in store
          this.$store.state.message.type = "success";

          // set the success messgae to success in store
          this.$store.state.message.message = response.data.message.english;

          // to close the confirm delete form
          this.$store.commit("ChangeconfirmDeleteMessageStatus");

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

          // to close the confirm delete form
          this.$store.commit("ChangeconfirmDeleteMessageStatus");

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
@import "../../../../sass/varibels";

.confirm-delete-message-open {
  width: 40%;
  height: auto;
  background-color: var(--confirm-form-dark);
  backdrop-filter: blur(20px);
  position: fixed;
  padding: 5px;
  bottom: 10px;
  left: 30%;
  border-radius: 5px;
  opacity: 1;
  transition-duration: 0.5s;
  box-shadow: 0 0 10px var(--shadow-color);

  @media (max-width: $phone) {
    width: 90%;
    left: 5%;
  }

  h4 {
    width: 100%;
    height: auto;
    color: var(--theme-text);
    border: 1px solid var(--theme-text);
    border-color: transparent transparent var(--theme-text) transparent;
  }

  button {
    width: 100%;
    height: 40px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: var(--theme-text);
    margin-top: 5px;
    transition-duration: 0.5s;
  }

  .delete {
    background-color: var(--confirm-form-red-body);
    border: 1px solid var(--confirm-form-red-border);
  }

  .delete:hover {
    background-color: var(--confirm-form-red-border);
  }

  .cancel {
    background-color: var(--confirm-form-green-body);
    border: 1px solid var(--confirm-form-green-border);
  }

  .cancel:hover {
    background-color: var(--confirm-form-green-border);
  }
}

.confirm-delete-message-close {
  @extend .confirm-delete-message-open;
  bottom: -30%;
  opacity: 0;
}
</style>
