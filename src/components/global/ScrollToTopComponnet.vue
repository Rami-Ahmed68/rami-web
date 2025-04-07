<template>
  <div :class="`scroll-to-top-${this.$store.state.scroll_top_status}`">
    <icon icon="arrow-left" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "scroll-to-top-componnet",
    };
  },
};
</script>

<style lang="scss">
@import "../../sass/varibels";

.scroll-to-top-open {
  width: 30px;
  height: 30px;
  border-radius: 4px;
  border: 1px solid var(--border-color);
  background-color: var(--dark-scroll-top);
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--theme-text);
  cursor: pointer;
  opacity: 1;
  position: fixed;
  right: 10px;
  bottom: 10px;
  transition-duration: 0.5s;

  svg {
    transform: rotate(90deg);
    color: var(--theme-text);
  }
}

.scroll-to-top-close {
  @extend .scroll-to-top-open;
  bottom: -20%;
  opacity: 0;
}
</style>
