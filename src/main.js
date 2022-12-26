// this default for create app
import { createApp } from "vue";
// import file vue in module
// import App from "./App.vue";
// how to create app
import appV from "./appV.vue";
// import file css
import "./assets/style.css";
// create app from before
// createApp(App).mount("#app");
createApp(appV).mount("#appV");
