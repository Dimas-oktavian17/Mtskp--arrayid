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
import alternative from "./components/component/alternative.vue";
import expresion from "./components/component/expresion.vue";
import reason from "./components/component/reason.vue";
import { KinesisContainer, KinesisElement } from "vue-kinesis";

// import featureVue from "./components/feature.vue";
// import Wrapper from "./components/wrapper.vue";
export default {
  name: "App",
  // local component registration
  components: {
    bgTwo,
    alternative,
    expresion,
    home,
    navVue,
    featureVue,
    footerVue,
    wrapperVue,
    bodyVue,
    mainVue,
    KinesisContainer,
    KinesisElement,
    reason,
  },
};
</script>

<template>
  <!-- new code refactor -->
  <div class="relative">
    <!-- main section -->
    <!-- footer section & bg -->
    <bgTwo></bgTwo>
    <div
      class="pt-32 absolute w-full h-[719px] top-[3155px] bg-cover bg-[url('https://dimas-oktavian17.github.io/assets/iconFigma/Rectanglefour.svg')]"
    >
      <!-- wrapper alternatives -->
      <alternative></alternative>
      <!-- end wrapper alternatives -->
      <!-- expresion wrapper -->
      <expresion></expresion>
      <!-- end expresion -->
      <!-- footer -->
      <footerVue></footerVue>
      <!-- end footer -->
    </div>
    <!-- feature  -->
    <!-- 2380px -->
    <div
      class="absolute w-full h-[2080px] left-0 top-[1067px] bg-mainPrimary pt-[30rem]"
    >
      <!-- wrapper feature -->
      <featureVue></featureVue>
      <!-- end wrapper feature-->
      <!-- wrapper reasons -->
      <reason></reason>
      <!-- end wrapper reasons -->
    </div>

    <home></home>
    <navVue></navVue>
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
