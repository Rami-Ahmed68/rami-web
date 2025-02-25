<template>
  <div :class="`message-${this.$store.state.theme}`">
    <h3>
      Full name
      <span @click="this.$store.commit('ChangeconfirmDeleteMessageStatus')"
        >🗑️</span
      >
    </h3>

    <div class="contact-info">
      <a href="">📞Phone</a>
      <a href="">💬whatsapp</a>
      <a href="">📧email</a>
    </div>

    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque eveniet,
      nulla libero vitae odit similique nostrum molestiae. Natus nihil, nesciunt
      dolorum iure, recusandae dolores laudantium debitis minima laborum quasi
      labore!
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
};
</script>

<style lang="scss">
@import "../../sass/varibels";
// dark
.message-dark {
  width: 100%;
  height: auto;
  margin: 5px 0%;
  padding: 5px;
  border-radius: 5px;
  margin: 10px 0px;
  background-color: $message-dark;

  h3 {
    width: 100%;
    height: auto;
    padding: 3px 0px;
    border: 1px solid;
    color: $font-light;
    border-color: transparent transparent $font-light transparent;
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
      color: $font-dark;
      background-color: $blue-1-light;
      transition-duration: 0.5s;
      margin: 4px 4px 4px 0px;
    }
  }

  p {
    width: 100%;
    height: auto;
    color: $font-light;
    font-size: $small;
  }
}
// dark

// light
.message-light {
  width: 100%;
  height: auto;
  margin: 5px 0%;
  padding: 5px;
  border-radius: 5px;
  margin: 10px 0px;
  background-color: $message-light;

  h3 {
    width: 100%;
    height: auto;
    padding: 3px 0px;
    border: 1px solid;
    color: $font-dark;
    border-color: transparent transparent $font-dark transparent;
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
      color: $font-dark;
      background-color: $blue-1-dark;
      transition-duration: 0.5s;
      margin: 4px 4px 4px 0px;
    }
  }

  p {
    width: 100%;
    height: auto;
    color: $font-dark;
    font-size: $small;
  }
}
// light
</style>
