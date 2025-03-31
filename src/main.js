import { createApp } from "vue";
import vue3dLoader from "vue-3d-loader";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./sass/main.scss";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

createApp(App)
  .use(store)
  .use(router)
  .use(vue3dLoader)
  .component("icon", FontAwesomeIcon)
  .mount("#app");
