<script setup>
// import vue
import { defineProps, reactive } from "vue";
// import svg medsos
import github from "../assets/footer/github.svg";
import tele from "../assets/footer/tele.svg";
// props
defineProps({
  title: String,
});
const data = reactive({
  sitemap: [
    { title: "Beranda", link: "#beranda" },
    { title: "Features", link: "#features" },
    { title: "Reasons", link: "#reasons" },
    { title: "Alternatives", link: "#alternatives" },
  ],
  lisensi: [
    { title: "COPYRIGHT (C) 2021. DESIGN BY NAUVAL" },
    { title: "COPYRIGHT (C) 2023. CREATE BY OKTA" },
  ],
  constact: [
    {
      label: "Telegram Profile",
      link: "https://t.me/DmsOkr",
      img: tele,
    },
    {
      label: "Github Profile",
      link: "https://github.com/Dimas-oktavian17",
      img: github,
    },
  ],
});
</script>
<template>
  <!-- footer section -->
  <div
    class="container flex flex-col items-center mt-20 p-20 gap-[30px] bg-gradient-to-r from-slate-50 to-slate-100 rounded-tl-3xl rounded-tr-3xl"
  >
    <div class="flex flex-col items-start gap-[30px] lg:flex-row">
      <!-- Expression -->
      <div class="flex flex-col items-start gap-5 lg:w-[27rem] lg:gap-2">
        <div class="flex flex-row items-center gap-[10px] group cursor-pointer">
          <svg
            class="transition-all delay-1000 group-hover:animate-ping"
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="black"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="50"
              height="50"
              rx="25"
              fill="black"
              fill-opacity="0.08"
            />
            <path
              d="M15.76 29.106L19.792 25.038L15.76 20.988H18.658L22.69 25.038L18.658 29.106H15.76ZM24.9745 31.626C24.5545 31.626 24.2065 31.494 23.9305 31.23C23.6665 30.966 23.5345 30.648 23.5345 30.276C23.5345 29.892 23.6665 29.568 23.9305 29.304C24.2065 29.04 24.5545 28.908 24.9745 28.908C25.3945 28.908 25.7365 29.04 26.0005 29.304C26.2765 29.568 26.4145 29.892 26.4145 30.276C26.4145 30.648 26.2765 30.966 26.0005 31.23C25.7365 31.494 25.3945 31.626 24.9745 31.626ZM31.2684 29.106L27.2544 25.038L31.2684 20.988H34.1844L30.1344 25.038L34.1844 29.106H31.2684Z"
              fill="black"
            />
          </svg>
          <h1
            class="order-1 text-2xl font-bold text-left font-header text-homePrimary"
            :title="title"
          >
            {{ title }}
          </h1>
        </div>
        <p class="order-1 text-lg font-normal text-homePrimary font-header">
          MSTKP merupakan sebuah website hasil dari slincing desain Figma dari
          @arrayid & dibuat oleh okta menggunakan framework Vuejs.
        </p>
        <p
          v-for="lisense in data.lisensi"
          :key="lisense"
          class="order-2 text-sm font-semibold tracking-widest font-header text-homePrimary"
        >
          {{ lisense.title }}
        </p>
      </div>
      <!-- Sitemap -->
      <div class="flex flex-col items-start flex-grow order-1 gap-4 lg:gap-2">
        <h1 class="text-lg font-bold text-homePrimary font-header">Sitemap</h1>
        <div class="flex flex-col items-start gap-[10px] order-1">
          <ul class="flex flex-col gap-4">
            <li
              v-for="sitemaps in data.sitemap"
              :key="sitemaps"
              class="text-base font-normal font-header text-homePrimary"
            >
              <a :href="sitemaps.link">{{ sitemaps.title }}</a>
            </li>
          </ul>
        </div>
      </div>
      <!-- Contact -->
      <div class="flex flex-col items-start flex-grow order-2 gap-5 lg:gap-2">
        <h1 class="text-lg font-bold text-homePrimary font-header">
          Tetep Terhubung
        </h1>
        <p
          class="self-stretch order-1 text-base font-normal font-header text-homePrimary"
        >
          Lihat sosial media kami berikut:
        </p>
        <div
          class="flex flex-row justify-self-center items-center gap-[10px] order-2"
        >
          <!-- medsos box -->
          <div
            v-for="constacts in data.constact"
            :key="constacts"
            class="group flex flex-row justify-center items-center p-2 gap-[10px] w-10 h-10 bg-bg-icon rounded-md cursor-pointer transition-all duration-1000"
          >
            <a
              :aria-label="constacts.label"
              :href="constacts.link"
              target="_blank"
            >
              <inline-svg :src="constacts.img"></inline-svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- end footer -->
</template>
