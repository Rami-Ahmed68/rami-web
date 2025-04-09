import { createStore } from "vuex";

export default createStore({
  state: {
    theme: window.localStorage.getItem("rami_theme") || "dark",
    links: [
      { title: "Home", path: "/", condition: false },
      { title: "Works", path: "/works", condition: false },
      { title: "Skills", path: "/skills", condition: false },
      { title: "Contact", path: "/contact", condition: false },
      { title: "Cv", path: "/cv", condition: false },
      { title: "Install App", path: "/install", condition: false },
      { title: "Dash Board", path: "/dashboard", condition: true },
    ],
    dash_board_links: [
      { title: "Info", path: "/dashboard" },
      { title: "Works", path: "/dashboard/works" },
      { title: "Create Work", path: "/dashboard/create/work" },
      { title: "Skills", path: "/dashboard/skills" },
      { title: "Create Skill", path: "/dashboard/create/skill" },
      { title: "Cv", path: "/dashboard/cv" },
    ],
    messages: { title: "Messages", path: "/messages" },
    admin_data: window.localStorage.getItem("rami_admin")
      ? JSON.parse(window.localStorage.getItem("rami_admin"))
      : "",
    menu_status: "close",
    scroll_top_status: "close",
    loader_status: "close",
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
    current_work: "",
    geted_skills: [],
    current_skill: "",
    work_id: "",
    messages_array: [],
    message_id_for_delet: "",
    confirm_delete_work_status: "close",
    confirm_delete_skill_status: "close",
    skill_id_for_delete: "",
    work_id_for_delete: "",
    Apis: {
      auth: {
        log_in: `https://rami-web-seriver-v2.onrender.com/api/v1/rami_ahmed/admin/login`,
      },
      admin: {
        get_info: `https://rami-web-seriver-v2.onrender.com/api/v1/rami_ahmed/admin/get`,
        get_cv: `https://rami-web-seriver-v2.onrender.com/api/v1/rami_ahmed/admin/get/cv`,
        change_avatar: `https://rami-web-seriver-v2.onrender.com/api/v1/rami_ahmed/admin/change/avatar`,
        change_cv: `https://rami-web-seriver-v2.onrender.com/api/v1/rami_ahmed/admin/change/cv`,
        update: `https://rami-web-seriver-v2.onrender.com/api/v1/rami_ahmed/admin/update`,
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
          "https://rami-web-seriver-v2.onrender.com/api/v1/rami_ahmed/work/cover/change",
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
          "https://rami-web-seriver-v2.onrender.com/api/v1/rami_ahmed/skill/change/icon",
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

      document.documentElement.setAttribute("data-theme", state.theme);
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

    OpenOrCloseConfirmDeleteWork(state) {
      state.confirm_delete_work_status =
        state.confirm_delete_work_status === "open" ? "close" : "open";
    },

    OpenOrCloseConfirmDeleteSkill(state) {
      state.confirm_delete_skill_status =
        state.confirm_delete_skill_status === "open" ? "close" : "open";
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
