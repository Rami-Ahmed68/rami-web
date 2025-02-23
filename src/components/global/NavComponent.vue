<template>
  <nav :class="`nav-${this.$store.state.theme}`">
    <a href="/">
      <img
        v-if="this.$store.state.theme == 'dark'"
        src="../../assets/light_logopng.png"
        alt=""
      />
      <img
        v-if="this.$store.state.theme == 'light'"
        src="../../assets/black_logo.png"
      />
    </a>
    <ul>
      <router-link
        v-for="(link, index) in this.$store.state.links"
        :key="index"
        :to="link.path"
      >
        {{ link.title }}
      </router-link>

      <div class="theme-icon" @click="this.$store.commit('ChangeTheme')">
        <icon :icon="this.$store.state.theme == 'dark' ? 'sun' : 'moon'" />
      </div>

      <div class="bars-icon" @click="this.$store.commit('ChangeMenuStatus')">
        <icon icon="bars" />
      </div>
    </ul>

    <div :class="`menu-${this.$store.state.menu_status}`">
      <router-link
        @click="this.$store.commit('ChangeMenuStatus')"
        v-for="(link, index) in this.$store.state.links"
        :key="index"
        :to="link.path"
      >
        {{ link.title }}
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "nav-component",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss">
@import "../../sass/varibels";

// dark style
.nav-dark {
  width: 100%;
  height: 60px;
  backdrop-filter: blur(40px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 15%;
  position: fixed;
  z-index: 10;
  @media (max-width: $phone) {
    padding: 0px 5px;
  }

  a {
    width: auto;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 50px;
      height: 50px;
    }
  }

  ul {
    width: auto;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px 0px;

    a {
      padding: 10px;
      margin: 3px;
      cursor: pointer;
      text-decoration: none;
      color: $font-light;
      font-weight: 400;

      @media (max-width: $phone) {
        display: none;
      }
    }

    a:hover {
      text-decoration: underline;
    }

    .router-link-active {
      background-color: $blue;
      color: $font-dark;
    }

    .theme-icon {
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: $dark-icon-theme-color;
      color: $light-theme;
      border-radius: 5px;
      cursor: pointer;
      transition-duration: 0.5s;
      margin: 0px 5px;

      svg {
        font-size: medium;
      }
    }

    .bars-icon {
      width: 40px;
      height: 40px;
      border-radius: 5px;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px;
      color: $font-light;
      border: 1px solid $border-color-dark;
      margin: 0px 5px;

      @media (min-width: $phone) {
        display: none;
      }
    }
  }

  .menu-open {
    width: 200px;
    height: auto;
    overflow: hidden;
    background-color: $menu-dark;
    border-radius: 5px;
    position: absolute;
    top: 90%;
    right: 10px;
    opacity: 1;
    transition-duration: 0.5s;

    @media (min-width: $phone) {
      display: none;
    }

    a {
      width: 96%;
      height: 35px;
      margin: 5px 2%;
      cursor: pointer;
      display: flex;
      justify-content: start;
      padding: 0px 10px;
      text-decoration: none;
      border-radius: 5px;
      color: $font-light;
      font-weight: 400;
    }

    .router-link-active {
      background-color: $menu-item-dark;
    }

    a:hover {
      background-color: $menu-item-dark;
      text-decoration: underline;
    }
  }

  .menu-close {
    @extend .menu-open;
    width: 0px;
    height: 0px;
    overflow: hidden;
    opacity: 0;
    transition-duration: 0.5s;
  }
}

.nav-light {
  width: 100%;
  height: 60px;
  backdrop-filter: blur(40px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 15%;
  position: fixed;
  z-index: 10;

  @media (max-width: $phone) {
    padding: 0px 5px;
  }

  a {
    width: auto;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 50px;
      height: 50px;
    }
  }

  ul {
    width: auto;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px 0px;

    a {
      padding: 10px;
      margin: 3px;
      cursor: pointer;
      text-decoration: none;
      color: $font-dark;
      font-weight: 400;

      @media (max-width: $phone) {
        display: none;
      }
    }

    a:hover {
      text-decoration: underline;
    }

    .router-link-active {
      background-color: $blue;
      color: $font-light;
    }

    .theme-icon {
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: $light-icon-theme-color;
      color: $dark-theme;
      border-radius: 5px;
      cursor: pointer;
      transition-duration: 0.5s;
      margin: 0px 5px;

      svg {
        font-size: medium;
      }
    }

    .bars-icon {
      width: 40px;
      height: 40px;
      border-radius: 5px;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px;
      color: $font-dark;
      border: 1px solid $border-color-light;
      margin: 0px 5px;
      @media (min-width: $phone) {
        display: none;
      }
    }
  }

  .menu-open {
    width: 200px;
    height: auto;
    overflow: hidden;
    background-color: $menu-light;
    border-radius: 5px;
    position: absolute;
    top: 90%;
    right: 10px;
    opacity: 1;
    transition-duration: 0.5s;

    @media (min-width: $phone) {
      display: none;
    }

    a {
      width: 96%;
      height: 35px;
      margin: 5px 2%;
      cursor: pointer;
      display: flex;
      justify-content: start;
      padding: 0px 10px;
      text-decoration: none;
      border-radius: 5px;
      color: $font-dark;
      font-weight: 400;
    }

    .router-link-active {
      background-color: $menu-item-light;
    }

    a:hover {
      background-color: $menu-item-light;
      text-decoration: underline;
    }
  }

  .menu-close {
    @extend .menu-open;
    width: 0px;
    height: 0px;
    overflow: hidden;
    opacity: 0;
    transition-duration: 0.5s;
  }
}
// light style
</style>
