import { createStore } from "vuex";

export default createStore({
  state: {
    theme: window.localStorage.getItem("rami_theme") || "dark",
    links: [
      { title: "Home", path: "/" },
      { title: "Works", path: "/works" },
      { title: "Skills", path: "/skills" },
      { title: "Contact", path: "/contact" },
      { title: "Cv", path: "/cv" },
      { title: "Install App", path: "/install" },
    ],
    menu_status: "close",
    scroll_top_status: "close",
  },
  getters: {},
  mutations: {
    ChangeTheme(state) {
      state.theme = state.theme == "dark" ? "light" : "dark";

      // update it in local storage
      window.localStorage.setItem("rami_theme", state.theme);
    },

    ChangeMenuStatus(state) {
      state.menu_status = state.menu_status == "close" ? "open" : "close";
    },
  },
  actions: {},
  modules: {},
});
