// // this default for create app
import { createApp } from "vue";
// // import file vue in module
// // how to create app
import appV from "./appV.vue";
// // import file css
import "./assets/style.css";

// // create app local
createApp(appV).mount("#App");
// kinesis vue libray for animation & flicking libray
import VueKinesis from "vue-kinesis";
// import Flicking from "@egjs/vue3-flicking";
// appV.use(VueKinesis);
// appV.component(
//   // the registered name
//   "Flicking",
//   Flicking
//   // the implementation
// );
