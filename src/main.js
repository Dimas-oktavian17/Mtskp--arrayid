// // this default for create app
import { createApp } from "vue";
// // how to create app
import App from "./appV.vue";
// // import file css
import "./assets/style.css";
// Register global component
// side componennt
import bgsecondary from "../src/components/component/bgsecondary.vue";
import kinesisHomeVue from "../src/components/component/kinesisHome.vue";
import kinesisHomeVueTwo from "../src/components/component/kinesisHomeTwo.vue";
import kinesisCenter from "../src/components/component/kinesesiCenter.vue";
import kinesisCenterTwo from "../src/components/component/kinesisCenterTwo.vue";
import kinesisEnd from "../src/components/component/kinesisEnd.vue";
import kinesisEndTwo from "../src/components/component/kinesisEndTwo.vue";
import ContactForm from "../src/components/component/ContactForm.vue";
// main component
import home from "./components/home.vue";
import navVue from "./components/nav.vue";
import footerVue from "./components/footer.vue";
import mainVue from "../src/components/main.vue";
import bgTwo from "./components/component/bgtwo.vue";
import alternative from "./components/component/alternative.vue";
import expresion from "./components/component/expresion.vue";
import reason from "./components/component/reason.vue";
import loginVue from "./components/component/login.vue";
import featureVue from "./components/feature.vue";
// libray component
import InlineSvg from "vue-inline-svg";
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
  .component("featureVue", featureVue)
  // libray component
  .component("inline-svg", InlineSvg)
  // side component
  .component("bgsecondary", bgsecondary)
  .component("kinesisHomeVue", kinesisHomeVue)
  .component("kinesisHomeVueTwo", kinesisHomeVueTwo)
  .component("kinesisCenter", kinesisCenter)
  .component("kinesisCenterTwo", kinesisCenterTwo)
  .component("kinesisEnd", kinesisEnd)
  .component("kinesisEndTwo", kinesisEndTwo)
  .component("ContactForm", ContactForm);

// Mounted to dom
app.mount("#app");
