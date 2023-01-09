<script>
import "./assets/style.css";
export default {
  data() {
    return {
      props: {
        type: String,
        title: "expresion",
        // asal: "Surabaya",
      },
    };
  },
};
</script>

<template>
  <main class="bg-black w-screen h-screen">
    <h1 class="text-4xl text-white" v-bind="props">{{ props.title }}</h1>
  </main>
</template>
