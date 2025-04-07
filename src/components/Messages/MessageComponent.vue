<template>
  <div class="message">
    <h3>
      {{ this.message_data.full_name }}
      <span @click="ConfirmDelete">🗑️</span>
    </h3>

    <div class="contact-info">
      <a :href="`tel:${this.message_data.phone_number}`" target="_blank"
        >📞 Phone</a
      >
      <a
        :href="`https://wa.me/${this.message_data.whatsapp_number}`"
        target="_blank"
        >💬 Whatsapp</a
      >
      <a :href="`mailto:${this.message_data.whatsapp_number}`" target="_blank"
        >📧 Email</a
      >
    </div>

    <p>
      {{ this.message_data.custom_message }}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    message_data: Object,
  },
  methods: {
    ConfirmDelete() {
      // set the message's id into store
      this.$store.state.message_id_for_delet = this.message_data._id;

      // open the delet message confirm form
      this.$store.commit("ChangeconfirmDeleteMessageStatus");
    },
  },
};
</script>

<style lang="scss">
@import "../../sass/varibels";
.message {
  width: 100%;
  height: auto;
  margin: 5px 0%;
  padding: 5px;
  border-radius: 5px;
  margin: 10px 0px;
  background-color: var(--message-bg);

  h3 {
    width: 100%;
    height: auto;
    padding: 3px 0px;
    border: 1px solid;
    color: var(--theme-text);
    border-color: transparent transparent var(--theme-text) transparent;
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      padding: 5px;
      border-radius: 4px;
      user-select: none;
      background-color: $error-message-body;
      border: $error-message-border;
      cursor: pointer;
      font-size: $small;
    }
  }

  .contact-info {
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    align-items: center;

    a {
      padding: 5px 10px;
      border-radius: 5px;
      text-decoration: none;
      color: var(--button-color);
      background-color: var(--blue-1);
      transition-duration: 0.5s;
      margin: 4px 4px 4px 0px;
    }
  }

  p {
    width: 100%;
    height: auto;
    color: var(--theme-text);
    font-size: $small;
  }
}
</style>
