<template>
  <nav class="nav">
    <a href="/">
      <img
        src="../../assets/light_logopng.png"
        alt="Website Logo"
        v-if="$store.state.theme === 'dark'"
      />
      <img src="../../assets/black_logo.png" alt="Website Logo" v-else />
    </a>

    <ul class="center-list">
      <li v-for="(link, index) in $store.state.links" :key="index">
        <router-link
          :to="link.path"
          v-if="(link.condition && $store.state.admin_data) || !link.condition"
        >
          {{ link.title }}
        </router-link>
      </li>

      <div class="theme-icon" @click="$store.commit('ChangeTheme')">
        <icon :icon="$store.state.theme === 'dark' ? 'sun' : 'moon'" />
      </div>

      <div class="bars-icon" @click="$store.commit('ChangeMenuStatus')">
        <icon icon="bars" />
      </div>
    </ul>

    <div :class="`menu-${$store.state.menu_status}`">
      <ul>
        <li
          v-for="(link, index) in $store.state.links"
          :key="index"
          @click="$store.commit('ChangeMenuStatus')"
        >
          <router-link
            :to="link.path"
            v-if="
              (link.condition && $store.state.admin_data) || !link.condition
            "
          >
            {{ link.title }}
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import axios from "axios";
export default {
  name: "NavComponent",
  data() {
    return {
      page: 1,
      limit: 10,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.HandelScroll);
    this.GetMesages();
  },
  methods: {
    async GetMesages() {
      if (this.$store.state.messages_array.length === 0) {
        this.$store.state.loading_status = "open";
      }

      try {
        const response = await axios.get(
          this.$store.state.Apis.messages.get_all,
          {
            params: { page: this.page, limit: this.limit },
          }
        );

        this.$store.state.messages_array =
          this.$store.state.messages_array.length === 0
            ? response.data.messages
            : [...this.$store.state.messages_array, ...response.data.messages];

        this.$store.state.loading_status = "close";
      } catch (error) {
        this.$store.state.message = {
          type: "error",
          message:
            error.response?.data?.message?.english || "An error occurred",
        };
        this.$store.commit("OpenTheMessgae");
        this.$store.state.loading_status = "close";
        this.$store.commit("CloseTheMessgaeAfter5s");
      }
    },

    async HandelScroll() {
      if (
        window.scrollY + window.innerHeight >=
        document.body.scrollHeight - 600
      ) {
        this.page += 1;
        await this.GetMesages();
      }
    },
  },
};
</script>

<style lang="scss">
@import "../../sass/varibels";

.nav {
  width: 100%;
  height: 60px;
  backdrop-filter: blur(20px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 15%;
  position: fixed;
  z-index: 20;
  background-color: var(--nav-bg);

  @media (max-width: $phone) {
    padding: 0px 5px;
  }

  a {
    display: flex;
    align-items: center;
    height: 100%;

    img {
      width: 50px;
      height: 50px;
    }
  }

  .center-list {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 10px 0px;

    li {
      list-style-type: none;
      @media (max-width: $phone) {
        display: none;
      }

      a {
        padding: 10px;
        margin: 3px;
        cursor: pointer;
        text-decoration: none;
        color: var(--theme-text);
        font-weight: 400;

        @media (max-width: $phone) {
          display: none;
        }

        &:hover {
          text-decoration: underline;
        }

        &.router-link-active {
          background-color: var(--blue);
          color: var(--button-text);
        }
      }
    }

    .theme-icon {
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--icon-theme-color);
      color: var(--theme-inverse);
      border-radius: 5px;
      cursor: pointer;
      transition: all 0.5s;
      margin: 0px 5px;

      svg {
        font-size: var(--medium);
        color: var(--theme-text);
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
      color: var(--theme-text);
      border: 1px solid var(--border-color);
      margin: 0px 5px;
      position: relative;

      @media (min-width: $phone) {
        display: none;
      }
    }
  }

  .menu-open,
  .menu-close {
    width: 200px;
    min-height: 250px;
    overflow: hidden;
    background-color: var(--menu-bg);
    border-radius: 5px;
    position: absolute;
    top: 90%;
    right: 10px;
    transition: all 0.5s;

    @media (min-width: $phone) {
      display: none;
    }

    li {
      list-style-type: none;
    }

    a {
      width: 96%;
      height: 35px;
      margin: 5px 2%;
      display: flex;
      align-items: center;
      padding: 0px 10px;
      text-decoration: none;
      border-radius: 5px;
      color: var(--theme-text);
      font-weight: 400;

      &:hover {
        background-color: var(--menu-item-bg);
        text-decoration: underline;
      }

      &.router-link-active {
        background-color: var(--menu-item-bg);
      }
    }
  }

  .menu-close {
    width: 0;
    height: 0;
    opacity: 0;
  }
}
</style>
