<script>
import "./assets/style.css";
import "./components/componentA.vue";
import componentAVue from "./components/componentA.vue";
// call component this with name component
// import componentA from "./components/componentA.vue";
export default {
  // create component in configuration
  components: {
    componentA: componentA,
  },
  data() {
    return {
      nama: "Dimas",
      umur: 18,
      asal: "Surabaya",
    };
  },
};
</script>

<!-- this how to crete
   component registration in vue -->
<template>
  <!-- call name component in template -->
  <componentA></componentA>
</template>
