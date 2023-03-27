<script>
import { ref } from "vue";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// import image
import insighfull from "../assets/feature/insightfull.svg";
import openmind from "../assets/feature/openmind.svg";
import encorage from "../assets/feature/encorage.svg";
import envirotment from "../assets/feature/envirotment.svg";
// // Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

import "../assets/swipper.css";

// import required modules
import { Pagination } from "swiper";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      boxClass: true,
      modules: [Pagination],
      swipperBox: [
        {
          styleP: "order-1 text-base font-normal text-white",
          styleH1: "order-1 text-base font-semibold text-white font-header",
          styleIcon:
            "flex flex-row justify-center items-center p-[0.625rem] rounded-[0.313rem] bg-[#FFFFFF08]",
          style:
            "cursor-pointer max-w-xs flex flex-col items-start p-[1.094rem] lg:p-[2.188rem] gap-[1.1188rem] bg-homePrimary rounded-[0.625rem]",
          title: "Insightful",
          img: insighfull,
          deskripsi:
            "Terdengar narsis?, terserah persepsi kamu. Dengan pengetahuan " +
            "mungkin kami bisa berbagi & membantu'mu meskipun random.",
        },
        {
          styleP:
            "order-1 text-base font-normal text-homePrimary opacity-60 group-hover:text-white group-hover:transition-all group-hover:duration-1000",
          styleH1:
            "order-1 text-base font-semibold text-homePrimary group-hover:text-white font-header group-hover:transition-all group-hover:duration-1000",
          styleIcon:
            "group flex flex-row justify-center items-center p-[0.625rem] group-hover:bg-[#FFFFFF08] group-hover:transition-all group-hover:duration-1000 bg-[#ffe9d6] rounded-[0.313rem]",
          style:
            "cursor-pointer max-w-xs flex flex-col items-start p-[1.094rem] lg:p-[2.188rem] transition-all gap-[1.1188rem] bg-transparent group hover:bg-homePrimary rounded-[0.625rem]",
          title: "Open Minded",
          img: openmind,
          deskripsi:
            "Apa benar?, tentu. Kami siap menerima masukan & saran jika itu " +
            "bermanfaat & selalu sedia jika kamu ingin diskusi penting " +
            "atau random.",
        },
        {
          styleP:
            "order-1 text-base font-normal text-homePrimary opacity-60 group-hover:text-white group-hover:transition-all group-hover:duration-1000",
          styleH1:
            "order-1 text-base font-semibold text-homePrimary group-hover:text-white font-header group-hover:transition-all group-hover:duration-1000",
          styleIcon:
            "group flex flex-row justify-center items-center p-[0.625rem] group-hover:bg-[#FFFFFF08] group-hover:transition-all group-hover:duration-1000 bg-[#ffe9d6] rounded-[0.313rem]",
          style:
            "cursor-pointer max-w-xs flex flex-col items-start p-[1.094rem] lg:p-[2.188rem] transition-all gap-[1.1188rem] bg-transparent group hover:bg-homePrimary rounded-[0.625rem]",
          title: "Encourage",
          img: encorage,
          deskripsi:
            "Waktu selalu berputar, lalu?. Kami selalu berusaha mendorong diri " +
            "kamu, untuk berkembang & berubah kearah yang lebih baik.",
        },
        {
          styleP:
            "order-1 text-base font-normal text-homePrimary opacity-60 group-hover:text-white group-hover:transition-all group-hover:duration-1000",
          styleH1:
            "order-1 text-base font-semibold text-homePrimary group-hover:text-white font-header group-hover:transition-all group-hover:duration-1000",
          styleIcon:
            "group flex flex-row justify-center items-center p-[0.625rem] group-hover:bg-[#FFFFFF08] group-hover:transition-all group-hover:duration-1000 bg-[#ffe9d6] rounded-[0.313rem]",
          style:
            "cursor-pointer max-w-xs flex flex-col items-start p-[1.094rem] lg:p-[2.188rem] transition-all gap-[1.1188rem] bg-transparent group hover:bg-homePrimary rounded-[0.625rem]",
          title: "Environment",
          img: envirotment,
          deskripsi:
            "toxic relationship?, katakan tidak. Lingkungan relationship " +
            "merupakan suatu hal yang penting, kami selalu mendukung apapun " +
            "keputusan & tindakan jika itu positif.",
        },
      ],
      boxFeatureOne: [
        {
          styleP: "order-1 text-base font-normal text-white",
          styleH1: "order-1 text-base font-semibold text-white font-header",
          styleIcon:
            "flex flex-row justify-center items-center p-[0.625rem] rounded-[0.313rem] bg-[#FFFFFF08]",
          style:
            "cursor-pointer flex flex-col items-start p-[1.094rem] lg:p-[2.188rem] gap-[1.1188rem] bg-homePrimary rounded-[0.625rem]",
          title: "Insightful",
          img: insighfull,
          deskripsi:
            "Terdengar narsis?, terserah persepsi kamu. Dengan pengetahuan " +
            "mungkin kami bisa berbagi & membantu'mu meskipun random.",
        },
        {
          styleP:
            "order-1 text-base font-normal text-homePrimary opacity-60 group-hover:text-white group-hover:transition-all group-hover:duration-1000",
          styleH1:
            "order-1 text-base font-semibold text-homePrimary group-hover:text-white font-header group-hover:transition-all group-hover:duration-1000",
          styleIcon:
            "group flex flex-row justify-center items-center p-[0.625rem] group-hover:bg-[#FFFFFF08] group-hover:transition-all group-hover:duration-1000 bg-[#ffe9d6] rounded-[0.313rem]",
          style:
            "cursor-pointer flex flex-col items-start p-[1.094rem] lg:p-[2.188rem] transition-all gap-[1.1188rem] bg-transparent group hover:bg-homePrimary rounded-[0.625rem]",
          title: "Open Minded",
          img: openmind,
          deskripsi:
            "Apa benar?, tentu. Kami siap menerima masukan & saran jika itu " +
            "bermanfaat & selalu sedia jika kamu ingin diskusi penting atau " +
            "random.",
        },
      ],
      boxFeatureTwo: [
        {
          // style: "group-hover:stroke-whitegroup-hover:stroke-white",
          title: "Encourage",
          img: encorage,
          deskripsi:
            "Waktu selalu berputar, lalu?. Kami selalu berusaha mendorong diri " +
            "kamu, untuk berkembang & berubah kearah yang lebih baik.",
        },
        {
          title: "Environment",
          img: envirotment,
          deskripsi:
            "toxic relationship?, katakan tidak. Lingkungan relationship " +
            "merupakan suatu hal yang penting, kami selalu mendukung apapun " +
            "keputusan & tindakan jika itu positif.",
        },
      ],
    };
  },
  props: {
    headFeature: String,
    titleFeature: String,
    deskripsiFeature: String,
  },
};
</script>
<template>
  <!-- wrapper feature -->
  <div
    class="container flex flex-col lg:flex-row items-center py-[6.25rem] gap-[8.188rem] scroll-mt-[3rem]"
    id="features"
  >
    <!-- wrapper deskripsi -->
    <div class="flex flex-col items-start w-full lg:w-2/5 lg:pl-10 xl:pl-0">
      <!-- header -->
      <div
        class="flex flex-row pl-10 lg:pl-0 items-center gap-[0.625rem] pb-[0.625rem]"
      >
        <!-- svg -->
        <svg
          width="45"
          height="3"
          viewBox="0 0 45 3"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="45"
            height="2"
            transform="matrix(1 0 0 -1 0 2.5)"
            fill="#FC881D"
          />
        </svg>
        <!-- header text -->
        <h1
          class="text-base font-semibold font-header text-homeSecondary"
          :headFeature="headFeature"
        >
          {{ headFeature }}
        </h1>
      </div>
      <h2
        :titleFeature="titleFeature"
        class="order-2 pb-5 pl-10 text-4xl font-bold lg:pl-0 font-header text-homePrimary xl:w-[29rem]"
      >
        {{ titleFeature }}
      </h2>
      <!-- deskripsi -->
      <p
        :deskripsiFeature="deskripsiFeature"
        class="order-4 text-base font-normal pl-10 pr-8 lg:pl-0 font-header text-homePrimary opacity-60 pb-[3.125rem]"
      >
        {{ deskripsiFeature }}
      </p>
      <!-- button -->
      <a
        href="#features"
        class="text-base font-bold font-main text-secondary2 flex flex-row justify-between items-center ml-10 lg:ml-0 py-3 lg:py-5 px-5 lg:px-[1.875rem] bg-homePrimary rounded-full order-6 shadow-btnfeature group transition-all hover:pr-8 hover:opacity-95"
      >
        Pelajari Lebih Lanjut
        <svg
          class="ml-1 transition-all group-hover:ml-4"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 16.5L16 12.5L12 8.5"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8 12.5H16"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </a>
    </div>
    <!-- wrapper fitur -->
    <div class="flex-col items-start hidden w-full p-4 lg:flex lg:w-3/5 lg:p-0">
      <!-- top feature -->
      <div class="flex flex-row items-start gap-[1px]">
        <!-- box one -->
        <div
          v-for="boxfeatureFirst in boxFeatureOne"
          :key="boxfeatureFirst"
          :class="boxfeatureFirst.style"
        >
          <!-- header -->
          <div class="flex flex-row items-center gap-[1.313rem]">
            <!-- icon -->
            <div :class="boxfeatureFirst.styleIcon">
              <inline-svg :src="boxfeatureFirst.img"></inline-svg>
            </div>

            <h1 :class="boxfeatureFirst.styleH1">
              {{ boxfeatureFirst.title }}
            </h1>
          </div>
          <!-- deskripsi -->
          <p :class="boxfeatureFirst.styleP">
            {{ boxfeatureFirst.deskripsi }}
          </p>
        </div>
      </div>
      <!-- bottom feature -->
      <div class="flex flex-row items-start gap-[1px]">
        <!-- box three -->
        <div
          v-for="boxfeatureSecond in boxFeatureTwo"
          :key="boxfeatureSecond"
          class="cursor-pointer w-1/2 flex flex-col items-start p-[1.094rem] lg:p-[2.188rem] transition-all gap-[1.1188rem] bg-transparent group hover:bg-homePrimary rounded-[0.625rem]"
        >
          <!-- header -->
          <div class="flex flex-row items-center gap-[1.313rem]">
            <!-- icon -->
            <div
              class="group flex flex-row justify-center items-center p-[0.625rem] group-hover:bg-[#FFFFFF08] group-hover:transition-all group-hover:duration-1000 bg-[#ffe9d6] rounded-[0.313rem]"
            >
              <inline-svg :src="boxfeatureSecond.img"></inline-svg>
              <!-- <img :src="boxfeatureSecond.img" alt="" /> -->
            </div>
            <h1
              class="order-1 text-base font-semibold text-homePrimary group-hover:text-white font-header group-hover:transition-all group-hover:duration-1000"
            >
              {{ boxfeatureSecond.title }}
            </h1>
          </div>
          <!-- deskripsi -->
          <p
            class="order-1 text-base font-normal text-homePrimary opacity-60 group-hover:text-white group-hover:transition-all group-hover:duration-1000"
          >
            {{ boxfeatureSecond.deskripsi }}
          </p>
        </div>
        <!-- box four -->
      </div>
    </div>
    <!-- swipper mobile mode -->
    <swiper class="flex flex-col items-start lg:hidden">
      <swiper-slide v-for="swipperItems in swipperBox" :key="swipperItems">
        <div :class="swipperItems.style">
          <!-- header -->
          <div class="flex flex-row items-center gap-[1.313rem]">
            <!-- icon -->
            <div :class="swipperItems.styleIcon">
              <inline-svg :src="swipperItems.img"></inline-svg>
            </div>
            <h1 :class="swipperItems.styleH1">
              {{ swipperItems.title }}
            </h1>
          </div>
          <!-- deskripsi -->
          <p :class="swipperItems.styleP">
            {{ swipperItems.deskripsi }}
          </p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
  <!-- end wrapper feature-->
</template>
