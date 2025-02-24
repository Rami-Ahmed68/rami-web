<template>
  <div :class="`message-page-${this.$store.state.theme}`">
    <h1>Messages Page</h1>

    <div class="container">
      <MessageComponent :message_data="{}" />
      <MessageComponent :message_data="{}" />
      <MessageComponent :message_data="{}" />
      <MessageComponent :message_data="{}" />
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

// dark
.message-page-dark {
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
    color: $font-light;
    border: 1px solid;
    border-color: transparent transparent $font-light transparent;
  }

  .container {
    width: 100%;
    height: auto;
    padding: 5px;
  }
}
// dark

// light
.message-page-light {
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
    color: $font-dark;
    border: 1px solid;
    border-color: transparent transparent $font-dark transparent;
  }

  .container {
    width: 100%;
    height: auto;
    padding: 5px;
  }
}
// light
</style>
