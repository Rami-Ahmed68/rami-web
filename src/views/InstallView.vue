<template>
  <div class="install-page">
    <div class="container">
      <p>👋Hi, You can install the web as a mobile app</p>
      <button @click="install">Install App</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      deferredPrompt: null,
    };
  },
  mounted() {
    window.addEventListener("beforeinstallprompt", (event) => {
      event.preventDefault();
      this.deferredPrompt = event;
    });
  },
  methods: {
    async install() {
      console.log("cliked");
      // start the loader
      this.$store.state.loader_status = "open";

      if (this.deferredPrompt) {
        await this.deferredPrompt.prompt();

        if (this.deferredPrompt) {
          this.deferredPrompt = null;
          // stop the loader
          this.$store.state.loader_status = "open";
        }
      }
    },
  },
};
</script>

<style lang="scss">
@import "../sass/_varibels";
.install-page {
  width: 100%;
  height: auto;

  .container {
    width: 40%;
    height: auto;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    @media (max-width: $phone) {
      width: 96%;
      margin: 0px 2%;
    }

    button {
      border: none;
      outline: none;
      padding: 10px 20px;
      cursor: pointer;
      border-radius: 5px;
      background-color: var(--blue-1);
      color: var(--button-text);
      transition-duration: 0.5s;
    }

    button:hover {
      background-color: var(--blue);
    }

    p {
      width: 90%;
      height: auto;
      padding: 10px;
      border-radius: 5px;
      background-color: var(--message-bg);
      margin: 30px 5%;
      color: var(--theme-text);
      font-size: $medium;
      text-align: justify;
      position: relative;
      text-align: center;
    }
  }
}
</style>
