<template>
  <div
    :class="`laoding-${this.$store.state.theme}-${this.$store.state.loading_status}`"
  >
    <div class="elements-cont">
      <span class="element"></span>
      <span class="element"></span>
      <span class="element"></span>
    </div>
    <p class="message" v-if="this.$store.state.loading_rate">
      loading⏳ : {{ this.$store.state.loading_rate }}%
    </p>
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
.laoding-dark-open {
  overflow: hidden;
  width: 7%;
  max-height: 40px;
  padding: 6px;
  border-radius: 5px;
  position: fixed;
  top: 10%;
  left: 46.5%;
  z-index: 20;
  opacity: 1;
  transition-duration: 0.5s;
  background-color: $loading-dark;
  backdrop-filter: blur(20px);
  box-shadow: 0 0 10px $shadow-black;

  @media (max-width: $phone) {
    width: 20%;
    left: 40%;
  }

  .elements-cont {
    width: 100%;
    height: 60%;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: space-around;

    .element {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: $loading-points-light;
    }

    .element:nth-child(1) {
      animation: preloader 0.6s ease-in-out alternate infinite;
    }

    .element:nth-child(2) {
      animation: preloader 0.6s ease-in-out alternate 0.2s infinite;
    }

    .element:nth-child(3) {
      animation: preloader 0.6s ease-in-out alternate 0.4s infinite;
    }

    @keyframes preloader {
      100% {
        transform: scale(1.3);
      }
    }
  }

  .message {
    width: 100%;
    color: $font-light;
    font-size: $x-small;
    text-align: center;
    overflow: hidden;
    border: 1px solid;
    border-color: $border-color-dark transparent transparent transparent;
  }
}

.laoding-dark-close {
  @extend .laoding-dark-open;
  top: -20%;
  opacity: 0;
}
// dark

// light
.laoding-light-open {
  overflow: hidden;
  width: 7%;
  max-height: 40px;
  padding: 6px;
  border-radius: 5px;
  position: fixed;
  top: 10%;
  left: 46.5%;
  z-index: 20;
  transition-duration: 0.5s;
  background-color: $loading-light;
  backdrop-filter: blur(20px);
  box-shadow: 0 0 10px $shadow-light;

  @media (max-width: $phone) {
    width: 20%;
    left: 40%;
  }

  .elements-cont {
    width: 100%;
    height: 60%;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: space-around;

    .element {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: $loading-points-dark;
    }

    .element:nth-child(1) {
      animation: preloader 0.6s ease-in-out alternate infinite;
    }

    .element:nth-child(2) {
      animation: preloader 0.6s ease-in-out alternate 0.2s infinite;
    }

    .element:nth-child(3) {
      animation: preloader 0.6s ease-in-out alternate 0.4s infinite;
    }

    @keyframes preloader {
      100% {
        transform: scale(1.3);
      }
    }
  }

  .message {
    width: 100%;
    color: $font-dark;
    font-size: $x-small;
    text-align: center;
    overflow: hidden;
    border: 1px solid;
    border-color: $border-color-light transparent transparent transparent;
  }
}

.laoding-light-close {
  @extend .laoding-light-open;
  top: -20%;
  opacity: 0;
}
// light
</style>
