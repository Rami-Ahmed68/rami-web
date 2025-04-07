<template>
  <div class="message-page">
    <h1>Messages Page</h1>

    <div class="container">
      <MessageComponent
        v-for="(message, index) in this.$store.state.messages_array"
        :key="index"
        :message_data="message"
      />
    </div>
  </div>
</template>

<script>
import MessageComponent from "@/components/Messages/MessageComponent.vue";
export default {
  data() {
    return {};
  },
  components: {
    MessageComponent,
  },
};
</script>

<style lang="scss">
@import "../sass/varibels";
.message-page {
  width: 40%;
  height: auto;
  margin: auto;

  @media (max-width: $phone) {
    width: 96%;
    margin: 5px 2%;
  }

  h1 {
    width: 100%;
    height: auto;
    color: var(--theme-text);
    border: 1px solid;
    border-color: transparent transparent var(--border-color) transparent;
  }

  .container {
    width: 100%;
    height: auto;
    padding: 5px;
  }
}
</style>
