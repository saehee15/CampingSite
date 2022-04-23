import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes/index.js";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle";
import store from "./store/index.js";

createApp(App).use(router).use(store).use(bootstrap).mount("#app");
