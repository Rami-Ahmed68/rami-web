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
      { title: "Messages", path: "/messages" },
      { title: "Install App", path: "/install" },
    ],
    // admin_data: window.localStorage.getItem("rami_admin")
    //   ? JSON.parse(window.localStorage.getItem("rami_admin"))
    //   : "",
    menu_status: "close",
    scroll_top_status: "close",
    loading_status: "close",
    loading_rate: 0,
    message_status: "close",
    message: {
      type: "success",
      message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
      voluptatum modi `,
    },
    confirm_delete_message_status: "close",
    admin_info: "",
    admin_cv: "",
    geted_works: [],
    current_work: "",
    geted_skills: [],
    current_skill: "",
    work_id: "",
    messages_array: [],
    message_id_for_delet: "",
    Apis: {
      auth: {
        log_in: `https://rami-web-seriver-v2.onrender.com/api/v1/rami_ahmed/admin/login`,
      },
      admin: {
        get_info: `https://rami-web-seriver-v2.onrender.com/api/v1/rami_ahmed/admin/get`,
        get_cv: `https://rami-web-seriver-v2.onrender.com/api/v1/rami_ahmed/admin/get/cv`,
      },
      works: {
        create:
          "https://rami-web-seriver-v2.onrender.com/api/v1/rami_ahmed/work/create",
        delete:
          "https://rami-web-seriver-v2.onrender.com/api/v1/rami_ahmed/work/delete",
        update:
          "https://rami-web-seriver-v2.onrender.com/api/v1/rami_ahmed/work/update",
        get_all:
          "https://rami-web-seriver-v2.onrender.com/api/v1/rami_ahmed/work/get/all",
        get_one:
          "https://rami-web-seriver-v2.onrender.com/api/v1/rami_ahmed/work/get/one",
        get_count:
          "https://rami-web-seriver-v2.onrender.com/api/v1/rami_ahmed/work/get/count",
        change_cover:
          "https://rami-web-seriver-v2.onrender.com/api/v1/rami_ahmed/cover/change",
        change_video:
          "https://rami-web-seriver-v2.onrender.com/api/v1/rami_ahmed/work/video/change",
      },
      skills: {
        create:
          "https://rami-web-seriver-v2.onrender.com/api/v1/rami_ahmed/skill/create",
        delete:
          "https://rami-web-seriver-v2.onrender.com/api/v1/rami_ahmed/skill/delete",
        update:
          "https://rami-web-seriver-v2.onrender.com/api/v1/rami_ahmed/skill/update",
        get_all:
          "https://rami-web-seriver-v2.onrender.com/api/v1/rami_ahmed/skill/get/all",
        get_one:
          "https://rami-web-seriver-v2.onrender.com/api/v1/rami_ahmed/skill/get/one",
        get_count:
          "https://rami-web-seriver-v2.onrender.com/api/v1/rami_ahmed/skill/get/count",
        change_icon:
          "https://rami-web-seriver-v2.onrender.com/api/v1/rami_ahmed/change/icon",
      },
      messages: {
        create:
          "https://rami-web-seriver-v2.onrender.com/api/v1/rami_ahmed/message/create",
        delete:
          "https://rami-web-seriver-v2.onrender.com/api/v1/rami_ahmed/message/delete",
        get_all:
          "https://rami-web-seriver-v2.onrender.com/api/v1/rami_ahmed/message/get/all",
        get_count:
          "https://rami-web-seriver-v2.onrender.com/api/v1/rami_ahmed/message/get/count",
      },
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
      state.message_status = state.message_status == "close" ? "open" : "close";
    },

    ChangeconfirmDeleteMessageStatus(state) {
      state.confirm_delete_message_status =
        state.confirm_delete_message_status == "close" ? "open" : "close";
    },

    OpenTheMessgae(state) {
      state.message_status = state.message_status == "close" ? "open" : "close";
    },

    CloseTheMessgaeAfter5s(state) {
      setTimeout(() => {
        state.message_status = "close";
      }, 5000);
    },
  },
  actions: {
    // generate a date like this format (dd-mm-yyy) method
    generateDate() {
      const today = new Date();
      const day = String(today.getDate()).padStart(2, "0");
      const month = String(today.getMonth() + 1).padStart(2, "0"); // الأشهر تبدأ من 0
      const year = today.getFullYear();

      return `${day}-${month}-${year}`;
    },
  },
  modules: {},
});
