<template>
  <div
    :class="`message-${this.$store.state.message.type}-${this.$store.state.message_status}`"
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

// error
.message-error-open {
  max-width: 70%;
  min-width: 40%;
  height: 60px;
  border-radius: 5px;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 5px;
  background-color: var(--error-message-body);
  border: 1px solid var(--error-message-border);
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
    color: var(--theme-text);
    font-size: $small;
  }

  svg {
    padding: 10px;
    color: var(--theme-text);
    cursor: pointer;
    position: absolute;
    right: 5px;
    top: 5px;
  }
}

.message-error-close {
  @extend .message-error-open;
  left: -50%;
  opacity: 0;
}
// error

// success
.message-success-open {
  max-width: 70%;
  min-width: 40%;
  height: 60px;
  border-radius: 5px;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 10px;
  background-color: var(--success-message-body);
  border: 1px solid var(--success-message-border);
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
    color: var(--theme-text);
    font-size: $small;
  }

  svg {
    padding: 10px;
    color: var(--theme-text);
    cursor: pointer;
    position: absolute;
    right: 5px;
    top: 5px;
  }
}

.message-success-close {
  @extend .message-success-open;
  left: -50%;
  opacity: 0;
}
// success
</style>
