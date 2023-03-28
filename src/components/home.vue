<script setup>
import { reactive } from "vue";
const data = reactive({
  title: "MSTSKP",
});
</script>
<template>
  <section class="box-border">
    <!-- secondary home bg -->
    <bgsecondary></bgsecondary>
    <!-- primary home bg -->
    <div
      class="absolute w-full h-[1240px] bg-cover bg-[url('https://dimas-oktavian17.github.io/assets/iconFigma/Rectangleone.svg')] top-3"
    >
      <section class="box-border pt-32">
        <mainVue :Title="data.title"></mainVue>
        <img src="./icons/iconFigma/Group-13-_1_.webp" alt="logo dekstop" />
      </section>
    </div>
  </section>
</template>
