<template>
  <div
    :class="`laoding-${this.$store.state.theme}-${this.$store.state.loading_status}`"
  >
    <p>
      loading⏳
      <span v-if="this.$store.state.loading_rate > 0">
        {{ this.$store.state.loading_rate }}%
      </span>
    </p>

    <div class="loader-line"></div>
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
  width: 40%;
  height: auto;
  padding: 6px;
  border-radius: 5px;
  position: fixed;
  top: 10%;
  left: 30%;
  z-index: 10;
  opacity: 1;
  transition-duration: 0.5s;
  background-color: $loading-dark;
  backdrop-filter: blur(20px);
  box-shadow: 0 0 10px $shadow-black;

  @media (max-width: $phone) {
    width: 90%;
    left: 5%;
  }

  P {
    width: 100%;
    color: $font-light;
    font-size: $small;
    text-align: start;
    overflow: hidden;
    margin: 5px 0px;
    display: flex;
    justify-content: space-between;

    @media (max-width: $phone) {
      font-size: $x-small;
    }
  }

  .loader-line {
    width: 100%;
    height: 5px;
    position: relative;
    overflow: hidden;
    background-color: $loading-lin-bg-dark;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
  }

  .loader-line:before {
    content: "";
    position: absolute;
    left: -50%;
    height: 5px;
    width: 40%;
    background-color: $loading-lin;
    -webkit-animation: lineAnim 1s linear infinite;
    -moz-animation: lineAnim 1s linear infinite;
    animation: lineAnim 1s linear infinite;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
  }

  @keyframes lineAnim {
    0% {
      left: -40%;
    }
    50% {
      left: 20%;
      width: 80%;
    }
    100% {
      left: 100%;
      width: 100%;
    }
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
  width: 40%;
  height: auto;
  padding: 6px;
  border-radius: 5px;
  position: fixed;
  top: 10%;
  left: 30%;
  z-index: 10;
  opacity: 1;
  transition-duration: 0.5s;
  background-color: $loading-light;
  backdrop-filter: blur(20px);
  box-shadow: 0 0 10px $shadow-black;

  @media (max-width: $phone) {
    width: 90%;
    left: 5%;
  }

  P {
    width: 100%;
    color: $font-dark;
    font-size: $small;
    text-align: start;
    overflow: hidden;
    margin: 5px 0px;
    display: flex;
    justify-content: space-between;

    @media (max-width: $phone) {
      font-size: $x-small;
    }
  }

  .loader-line {
    width: 100%;
    height: 5px;
    position: relative;
    overflow: hidden;
    background-color: $loading-lin-bg-light;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
  }

  .loader-line:before {
    content: "";
    position: absolute;
    left: -50%;
    height: 5px;
    width: 40%;
    background-color: $loading-lin;
    -webkit-animation: lineAnim 1s linear infinite;
    -moz-animation: lineAnim 1s linear infinite;
    animation: lineAnim 1s linear infinite;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
  }

  @keyframes lineAnim {
    0% {
      left: -40%;
    }
    50% {
      left: 20%;
      width: 80%;
    }
    100% {
      left: 100%;
      width: 100%;
    }
  }
}

.laoding-light-close {
  @extend .laoding-light-open;
  top: -20%;
  opacity: 0;
}
// light
</style>
