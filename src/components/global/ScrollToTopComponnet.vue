<template>
  <div
    :class="`scroll-to-top-${this.$store.state.theme}-${this.$store.state.scroll_top_status}`"
  >
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
// dark theme
.scroll-to-top-dark-open {
  width: 30px;
  height: 30px;
  border-radius: 4px;
  border: 1px solid $border-color-dark;
  background-color: $menu-dark;
  display: flex;
  justify-content: center;
  align-items: center;
  color: $font-light;
  cursor: pointer;
  opacity: 1;
  position: fixed;
  right: 10px;
  bottom: 10px;
  transition-duration: 0.5s;

  svg {
    transform: rotate(90deg);
    color: $font-light;
  }
}

.scroll-to-top-dark-close {
  @extend .scroll-to-top-dark-open;
  bottom: -20%;
  opacity: 0;
}
// dark theme

// light theme
.scroll-to-top-light-open {
  width: 30px;
  height: 30px;
  border-radius: 4px;
  border: 1px solid $border-color-light;
  background-color: $menu-light;
  display: flex;
  justify-content: center;
  align-items: center;
  color: $font-light;
  cursor: pointer;
  opacity: 1;
  position: fixed;
  right: 10px;
  bottom: 10px;
  transition-duration: 0.5s;

  svg {
    transform: rotate(90deg);
    color: $font-dark;
  }
}

.scroll-to-top-light-close {
  @extend .scroll-to-top-light-open;
  bottom: -20%;
  opacity: 0;
}
// light theme
</style>
