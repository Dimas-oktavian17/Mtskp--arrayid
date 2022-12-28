<script>
import "./assets/style.css";
// local component registration
import bodyVue from "./components/body.vue";
import { KinesisContainer, KinesisElement } from "vue-kinesis";
export default {
  name: "App",
  // local component registration
  components: {
    bodyVue,
    KinesisContainer,
    KinesisElement,
  },
  // data() {
  //   return {
  //     nama: "Dimas",
  //     umur: 18,
  //     asal: "Surabaya",
  //   };
  // },
};
</script>

<template>
  <bodyVue></bodyVue>
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
