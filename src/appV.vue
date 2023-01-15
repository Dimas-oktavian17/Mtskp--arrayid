<script>
import "./assets/style.css";
// local component registration
import home from "./components/home.vue";
import navVue from "./components/nav.vue";
import featureVue from "./components/feature.vue";
import footerVue from "./components/footer.vue";
import wrapperVue from "./components/wrapper.vue";
import bodyVue from "./components/body.vue";
import mainVue from "./components/main.vue";
import bgTwo from "./components/component/bgtwo.vue";
import { KinesisContainer, KinesisElement } from "vue-kinesis";

// import featureVue from "./components/feature.vue";
// import Wrapper from "./components/wrapper.vue";
export default {
  name: "App",
  // local component registration
  components: {
    bgTwo,
    home,
    navVue,
    featureVue,
    footerVue,
    wrapperVue,
    bodyVue,
    mainVue,
    KinesisContainer,
    KinesisElement,
  },
};
</script>

<template>
  <!-- new code refactor -->
  <div class="relative">
    <!-- main section -->
    <!-- footer section & bg -->
    <bgTwo></bgTwo>
    <!-- <navVue></navVue>
    <home></home> -->
  </div>

  <!-- code lama -->
  <!-- <div>
    <bodyVue> </bodyVue>
    <navVue title="Expresion"></navVue>
    <mainVue></mainVue>
  </div> -->
  <!-- <bodyVue> </bodyVue> -->
  <!-- <div class="">
    <h1 >{{ title }}</h1>
  </div> -->
  <!-- <div class="bg-primary">
      <kinesis-container class="text-center">
        Here, you can put
        <kinesis-element
          :duration="100000"
          :strength="100"
          :originX="100"
          :originY="150"
        >
          whatever
        </kinesis-element>
        <kinesis-element
          :duration="100000"
          :strength="100"
          :originX="100"
          :originY="150"
        >
          content!
        </kinesis-element>
      </kinesis-container>
    </div> -->
</template>
