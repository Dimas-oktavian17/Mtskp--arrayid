// // this default for create app
import { createApp } from "vue";
// // import file vue in module
// // how to create app
import appV from "./appV.vue";
// // import file css
import "./assets/style.css";

// // create app local
createApp(appV).mount("#App");
// kinesis vue libray for animation
import VueKinesis from "vue-kinesis";
appV.use(VueKinesis);
// // how to create component in global app vue
// import componentA from "./components/componentA.vue";
// const appV = createApp(App);
// appV.component("componentA", componentA);
// App.mount("#app");
