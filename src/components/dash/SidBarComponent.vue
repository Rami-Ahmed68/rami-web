<template>
  <div :class="`sid-bar-${this.$store.state.theme}`">
    <div class="icons">
      <div class="theme-icon" @click="$store.commit('ChangeTheme')">
        <icon :icon="$store.state.theme == 'dark' ? 'sun' : 'moon'" />
      </div>
    </div>
    <ul class="center-list">
      <li
        v-for="(link, index) in this.$store.state.dash_board_links"
        :key="index"
      >
        <router-link :to="link.path">
          {{ link.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    openCloseMenu() {
      // change the sid bar status
      this.sid_bar_status = this.sid_bar_status === "open" ? "close" : "open";

      // change the icon type
      this.icon_type =
        this.icon_type === "arrow-left" ? "arrow-right" : "arrow-right";
    },
  },
};
</script>

<style lang="scss">
@import "../../sass/varibels";

// dark
.sid-bar-dark {
  width: 20%;
  height: 98vh;
  background-color: $dark-theme;
  border-radius: 5px;
  margin: 5px;
  transition-duration: 0.5s;
  position: relative;

  @media (max-width: $phone) {
    width: 40%;
    margin: 2px;
  }

  .icons {
    width: 100%;
    height: auto;
    margin: 10px 0px;
    display: flex;
    justify-content: space-between;

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

    .arrow-icon {
      position: absolute;
      right: 5px;
      top: 5px;
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
    }
  }

  ul {
    width: 98%;
    height: auto;
    margin: 10px 1%;
    overflow: hidden;

    li {
      list-style-type: none;
    }

    a {
      width: 96%;
      height: 35px;
      margin: 5px 2%;
      cursor: pointer;
      display: flex;
      justify-content: start;
      align-items: center;
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
}
// dark

// light
.sid-bar-light {
  width: 20%;
  height: 98vh;
  background-color: $light-theme;
  border-radius: 5px;
  margin: 5px;
  transition-duration: 0.5s;
  position: relative;

  @media (max-width: $phone) {
    width: 40%;
    margin: 2px;
  }

  .icons {
    width: 100%;
    height: auto;
    margin: 10px 0px;
    display: flex;
    justify-content: space-between;

    .theme-icon {
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: $light-icon-theme-color;
      color: $light-theme;
      border-radius: 5px;
      cursor: pointer;
      transition-duration: 0.5s;
      margin: 0px 5px;

      svg {
        font-size: medium;
      }
    }

    .arrow-icon {
      position: absolute;
      right: 5px;
      top: 5px;
      width: 40px;
      height: 40px;
      border-radius: 5px;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px;
      color: $font-light;
      border: 1px solid $border-color-light;
    }
  }

  ul {
    width: 98%;
    height: auto;
    margin: 10px 1%;
    overflow: hidden;

    li {
      list-style-type: none;
    }

    a {
      width: 96%;
      height: 35px;
      margin: 5px 2%;
      cursor: pointer;
      display: flex;
      justify-content: start;
      align-items: center;
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
}
// light
</style>
