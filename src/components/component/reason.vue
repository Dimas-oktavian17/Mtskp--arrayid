<script>
import { ref } from "vue";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// image
import love from "../../assets/reason/love.png";
import sabar from "../../assets/reason/sabar.svg";
import ayam from "../../assets/reason/ayam.png";
// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

import "../../assets/swipper.css";

// import required modules
import { Pagination } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      modules: [Pagination],

      reasonBox: [
        {
          picture: love,
          title: "Kamu Jodoh Kami",
          deskripsi:
            "Sudah pasti orang yang tidak " +
            "punya kekasih & jodoh kami " +
            "mengunjungi website ini.",
        },
        {
          picture: sabar,
          title: "Kamu Sabar",
          deskripsi:
            "Sudah pasti orang yang tidak sabar, " +
            "tidak akan membaca website ini. " +
            "jadi orang yang sabar itu disayang tuhan & kami.",
        },
        {
          picture: ayam,
          title: "Kok Gambar Ayam? ",
          deskripsi:
            "Lah ngatur. " +
            "Nggak tau lagi alasan yang ketiga, biar bagus aja " +
            "desainnya. Kalo cuman dua jadinya nggak bagus hehe.",
        },
      ],
    };
  },
  props: {
    headReason: String,
    titleReason: String,
  },
  // methods: {
  //   getUrl(e) {
  //     const file = e.target.files[0];
  //     this.reasonBox.picture = URL.createObjectURL(file);
  //   },
  // },
};
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
        Ya nggak tau, salah kamu sendiri ngapain ke website ini. Tapi ada tiga
        kemungkinan kenapa kamu bisa ada di website ini. Ketiga kemungkinan itu
        akan kami jabarkan di bawah ini dengan ilustrasinya hehehe.
      </p>
    </div>
    <!-- end head wrapper -->
    <!-- wrapper deskripsi -->
    <div
      class="hidden lg:flex flex-col lg:flex-row items-center gap-[1.938rem] order-1"
    >
      <!-- box one -->
      <div
        v-for="reasonBoxs in reasonBox"
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
      <swiper-slide v-for="reasonBoxs in reasonBox" :key="reasonBoxs">
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
