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
    lloading_status: "close",
    loading_rate: 0,
    message_statsu: "close",
    message: {
      type: "success",
      message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
      voluptatum modi `,
      status_code: "400",
    },
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

    ChangeMessageStatus(state) {
      state.message_statsu = state.message_statsu == "close" ? "open" : "close";
    },
  },
  actions: {},
  modules: {},
});
