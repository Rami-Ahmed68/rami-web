<template>
  <div
    :class="`message-${this.$store.state.theme}-${this.$store.state.message.type}-${this.$store.state.message_status}`"
  >
    <p>
      {{ this.$store.state.message.type == "error" ? "🚨" : "✅" }} :
      {{ this.$store.state.message.message }}
    </p>
    <icon icon="xmark" @click="this.$store.commit('ChangeMessageStatus')" />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@import "../../sass/varibels";

// dark
// error
.message-dark-error-open {
  width: 70%;
  height: 60px;
  border-radius: 5px;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 5px;
  background-color: $error-message-body;
  border: 1px solid $error-message-border;
  position: fixed;
  bottom: 20px;
  left: 10px;
  opacity: 1;
  backdrop-filter: blur(20px);
  transition-duration: 0.5s;
  overflow: hidden;

  @media (max-width: $phone) {
    width: 90%;
  }

  p {
    width: 90%;
    height: 100%;
    color: $font-light;
    font-size: $small;
  }

  svg {
    padding: 10px;
    color: $font-light;
    cursor: pointer;
    position: absolute;
    right: 5px;
    top: 5px;
  }
}

.message-dark-error-close {
  @extend .message-dark-error-open;
  left: -50%;
  opacity: 0;
}
// error

// success
.message-dark-success-open {
  width: 70%;
  height: 60px;
  border-radius: 5px;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 10px;
  background-color: $success-message-body;
  border: 1px solid $success-message-border;
  position: fixed;
  bottom: 20px;
  left: 10px;
  opacity: 1;
  backdrop-filter: blur(20px);
  transition-duration: 0.5s;
  overflow: hidden;

  @media (max-width: $phone) {
    width: 90%;
  }

  p {
    width: 90%;
    height: 100%;
    color: $font-light;
    font-size: $small;
  }

  svg {
    padding: 10px;
    color: $font-light;
    cursor: pointer;
    position: absolute;
    right: 5px;
    top: 5px;
  }
}

.message-dark-success-close {
  @extend .message-dark-success-open;
  left: -50%;
  opacity: 0;
}
// success
// dark

// light
// error
.message-light-error-open {
  width: 70%;
  height: 60px;
  border-radius: 5px;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 10px;
  background-color: $error-message-body;
  border: 1px solid $error-message-border;
  position: fixed;
  bottom: 20px;
  left: 10px;
  opacity: 1;
  backdrop-filter: blur(20px);
  transition-duration: 0.5s;

  @media (max-width: $phone) {
    width: 90%;
  }

  p {
    width: 90%;
    height: 100%;
    color: $font-dark;
    font-size: $small;
  }

  svg {
    padding: 10px;
    color: $font-dark;
    cursor: pointer;
    position: absolute;
    right: 5px;
    top: 5px;
  }
}

.message-light-error-close {
  @extend .message-light-error-open;
  left: -50%;
  opacity: 0;
}
// error

// success
.message-light-success-open {
  width: 70%;
  height: 60px;
  border-radius: 5px;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 10px;
  background-color: $success-message-body;
  border: 1px solid $success-message-border;
  position: fixed;
  bottom: 20px;
  left: 10px;
  opacity: 1;
  backdrop-filter: blur(20px);
  transition-duration: 0.5s;

  @media (max-width: $phone) {
    width: 90%;
  }

  p {
    width: 90%;
    height: 100%;
    color: $font-dark;
    font-size: $small;
  }

  svg {
    padding: 10px;
    color: $font-dark;
    cursor: pointer;
    position: absolute;
    right: 5px;
    top: 5px;
  }
}

.message-light-success-close {
  @extend .message-light-success-open;
  left: -50%;
  opacity: 0;
}
// success
// light
</style>
