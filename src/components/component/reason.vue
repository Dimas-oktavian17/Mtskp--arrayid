<script setup>
import { ref, reactive } from "vue";
// Import Swiper & css Vue.js components
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "../../assets/swipper.css";
// image
import secure from "../../assets/reason/secure.svg";
import chart from "../../assets/reason/chart.svg";
import waktu from "../../assets/reason/jam.svg";
// props
// in <script setup>
defineProps({
  headReason: String,
  titleReason: String,
});
// data with script setup
const data = reactive({
  modules: [Pagination],
  reasonBox: [
    {
      picture: secure,
      title: "Terpercaya",
      deskripsi:
        "Sudah terpacaya ribuan tahun " +
        "dan telah melayani berbagai macam kebutuhan " +
        "diseluruh dunia.",
    },
    {
      picture: chart,
      title: "Terbukti",
      deskripsi:
        "Sudah terbukti menaikan produktivitas, " +
        "dan menaikan telah pendapatan perusahaan diseluruh dunia.",
    },
    {
      picture: waktu,
      title: "Selalu siap",
      deskripsi:
        "Selalu siap menanggani berbagai keluhan dan komplain dari client, " +
        "bersama-sama kita tumbuh.",
    },
  ],
});
</script>
<template>
  <!-- wrapper reasons -->
  <div
    class="container flex flex-col items-center py-[6.25rem] gap-16 scroll-mt-14"
    id="reasons"
  >
    <!-- head wrapper -->
    <div class="flex flex-col items-start pl-10 lg:items-center">
      <h1
        :headReason="headReason"
        class="lg:text-center text-left text-base font-semibold font-header text-homeSecondary pb-[0.625rem]"
      >
        {{ headReason }}
      </h1>
      <h2
        :titleReason="titleReason"
        class="order-2 pb-5 text-4xl font-bold lg:text-center font-header text-homePrimary lg:px-52"
      >
        {{ titleReason }}
      </h2>
      <p
        class="order-3 text-base text-left lg:text-center font-header text-homePrimary opacity-60 lg:px-56"
      >
        Terdapat tiga kemungkinan yang membuat kamu harus memilih kami. Ketiga
        kemungkinan itu akan kami jabarkan di bawah ini dengan ilustrasinya
        hehehe.
      </p>
    </div>
    <!-- end head wrapper -->
    <!-- wrapper deskripsi -->
    <div
      class="hidden lg:flex flex-col lg:flex-row items-center gap-[1.938rem] order-1"
    >
      <!-- box one -->
      <div
        v-for="reasonBoxs in data.reasonBox"
        :key="reasonBoxs"
        class="flex flex-col items-center gap-3"
      >
        <!-- svg -->
        <div
          class="w-[18.25rem] h-[12.50rem] rounded-[0.625rem] bg-[#f4ebe4] flex flex-col items-center justify-center"
        >
          <img
            class="w-[94px] h-[94px]"
            :src="reasonBoxs.picture"
            :alt="reasonBoxs.title"
          />
        </div>
        <!-- deskripsi -->
        <h1
          class="font-header font-semibold text-[1.375rem] leading-[1.875rem] order-1"
        >
          {{ reasonBoxs.title }}
        </h1>
        <p
          class="order-2 px-10 text-center font-header text-secondary opacity-60"
        >
          {{ reasonBoxs.deskripsi }}
        </p>
      </div>
    </div>
    <!-- swipper active if in mobile web -->
    <swiper class="flex flex-col items-start lg:hidden">
      <swiper-slide v-for="reasonBoxs in data.reasonBox" :key="reasonBoxs">
        <!-- box one -->
        <div class="flex flex-col items-center gap-3 lg:items-start">
          <!-- svg -->
          <div
            class="w-[18.25rem] h-[12.50rem] rounded-[0.625rem] bg-[#f4ebe4] flex flex-col items-center justify-center"
          >
            <img
              class="w-[94px] h-[94px]"
              :src="reasonBoxs.picture"
              :alt="reasonBoxs.title"
            />
          </div>
          <!-- deskripsi -->
          <h1
            class="font-header font-semibold text-[1.375rem] leading-[1.875rem] order-1"
          >
            {{ reasonBoxs.title }}
          </h1>
          <p
            class="order-2 text-center sm:px-20 font-header text-secondary opacity-60"
          >
            {{ reasonBoxs.deskripsi }}
          </p>
        </div>
      </swiper-slide>
    </swiper>
    <!-- end wrapper deskripsi -->
  </div>
  <!-- end wrapper reasons -->
</template>
