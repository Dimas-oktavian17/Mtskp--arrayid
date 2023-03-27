// // this default for create app
import { createApp } from "vue";
// // how to create app
import App from "./appV.vue";
// // import file css
import "./assets/style.css";
// Register global component
import home from "./components/home.vue";
import navVue from "./components/nav.vue";
import footerVue from "./components/footer.vue";
import mainVue from "./components/main.vue";
import bgTwo from "./components/component/bgtwo.vue";
import alternative from "./components/component/alternative.vue";
import expresion from "./components/component/expresion.vue";
import reason from "./components/component/reason.vue";
import loginVue from "./components/component/login.vue";
import featureVue from "./components/feature.vue";

// Your app
const app = createApp(App);
// inject to app
app
  .component("home", home)
  .component("navVue", navVue)
  .component("footerVue", footerVue)
  .component("mainVue", mainVue)
  .component("bgTwo", bgTwo)
  .component("alternative", alternative)
  .component("expresion", expresion)
  .component("reason", reason)
  .component("loginVue", loginVue)
  .component("featureVue", featureVue);

// Mounted to dom
app.mount("#app");
