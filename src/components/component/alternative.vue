<script setup>
import { reactive } from "vue";
const data = reactive({
  title: "ALTERNATIVES",
  deskripsi: "Karena Kami Ini Cuma Fiktif, Maka Lebih Baik Cari Lain!",
});
</script>
<template>
  <!-- wrapper alternatives -->
  <div class="container scroll-mt-32 lg:scroll-mt-72" id="alternatives">
    <!-- header -->
    <div
      class="flex flex-col lg:flex-row items-center gap-[1.875rem] pt-28 pl-10 lg:p-0"
    >
      <!-- header wrapper -->
      <div class="flex flex-col items-start justify-center w-full lg:w-3/5">
        <div class="pb-[0.625rem] flex flex-row items-center gap-[0.625rem]">
          <!-- svg -->
          <svg
            width="45"
            height="2"
            viewBox="0 0 45 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="45"
              height="2"
              transform="matrix(1 0 0 -1 0 2)"
              fill="white"
            />
          </svg>
          <h1
            class="order-1 text-base font-semibold text-white lg:pl-4 xl:pl-0 font-header"
          >
            {{ data.title }}
          </h1>
        </div>
        <p
          class="order-2 text-4xl font-bold text-white lg:pl-4 xl:pl-0 font-header"
        >
          {{ data.deskripsi }}
        </p>
      </div>
      <!-- deskripsi -->
      <p
        class="order-1 w-full pr-8 text-base font-normal text-white font-header grow lg:w-2/5 lg:pr-0"
      >
        Seperti yang kamu tau, website ini merupakan sekedar slincing desain
        dari Figma yang dibuat oleh youtuber @arrayid . Berikut alternative yang
        sesuai dengan kebutuhan kamu.
      </p>
    </div>
    <!-- end header -->
  </div>
  <!-- end wrapper alternatives -->
</template>
