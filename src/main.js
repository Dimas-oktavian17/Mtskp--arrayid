// // this default for create app
import { createApp } from "vue";
// // import file vue in module
// // how to create app
import appV from "./appV.vue";
// // import file css
import "./assets/style.css";
// // create app from before
createApp(appV).mount("#appV");
// // how to create component in global app vue
import componentA from "./components/componentA.vue";
// const appV = createApp(appV);
// appV.component(
//   // registration component name
//   "componentA",
//   componentA
// );
appV.mount("#appV");
