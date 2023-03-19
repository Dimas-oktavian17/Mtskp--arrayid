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
  setup() {
    return {
      modules: [Pagination],
      boxFeatureOne: [
        {
          title: "Insightful",
          picture: insighfull,
          deskripsi:
            "Terdengar narsis?, terserah persepsi kamu. Dengan pengetahuan " +
            "mungkin kami bisa berbagi & membantu'mu meskipun random.",
        },
        {
          title: "Open Minded",
          picture: openmind,
          deskripsi:
            "Apa benar?, tentu. Kami siap menerima masukan & saran jika itu " +
            "bermanfaat & selalu sedia jika kamu ingin diskusi penting atau " +
            +"random.",
        },
      ],
      boxFeatureTwo: [
        {
          title: "Encourage",
          picture: encorage,
          deskripsi:
            "Waktu selalu berputar, lalu?. Kami selalu berusaha mendorong diri " +
            "kamu, untuk berkembang & berubah kearah yang lebih baik.",
        },
        {
          title: "Environment",
          picture: envirotment,
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
          class="flex flex-col items-start p-[1.094rem] lg:p-[2.188rem] gap-[1.1188rem] bg-homePrimary rounded-[0.625rem]"
        >
          <!-- header -->
          <div class="flex flex-row items-center gap-[1.313rem]">
            <!-- icon -->
            <div
              class="flex flex-row justify-center items-center p-[0.625rem] rounded-[0.313rem] bg-[#FFFFFF08]"
            >
              <img
                :src="boxfeatureFirst.picture"
                :alt="boxfeatureFirst.title"
              />
            </div>
            <h1 class="order-1 text-base font-semibold text-white font-header">
              {{ boxfeatureFirst.title }}
            </h1>
          </div>
          <!-- deskripsi -->
          <p class="order-1 text-base font-normal text-white">
            {{ boxfeatureFirst.deskripsi }}
          </p>
        </div>
      </div>
      <!-- bottom feature -->
      <div class="flex flex-row items-start gap-[1px]">
        <!-- box three -->
        <div
          class="w-1/2 flex flex-col items-start p-[1.094rem] lg:p-[2.188rem] transition-all gap-[1.1188rem] bg-transparent group hover:bg-homePrimary rounded-[0.625rem]"
        >
          <!-- header -->
          <div class="flex flex-row items-center gap-[1.313rem]">
            <!-- icon -->
            <div
              class="group flex flex-row justify-center items-center p-[0.625rem] group-hover:bg-[#FFFFFF08] group-hover:transition-all group-hover:duration-1000 bg-[#ffe9d6] rounded-[0.313rem]"
            ></div>
            <h1
              class="order-1 text-base font-semibold text-homePrimary group-hover:text-white font-header group-hover:transition-all group-hover:duration-1000"
            >
              {{ boxMain.titleThree }}
            </h1>
          </div>
          <!-- deskripsi -->
          <p
            class="order-1 text-base font-normal text-homePrimary opacity-60 group-hover:text-white group-hover:transition-all group-hover:duration-1000"
          ></p>
        </div>
        <!-- box four -->
        <div
          class="w-1/2 flex flex-col items-start p-[1.094rem] lg:p-[2.188rem] transition-all gap-[1.1188rem] bg-transparent group hover:bg-homePrimary rounded-[0.625rem]"
        >
          <!-- header -->
          <div class="flex flex-row items-center gap-[1.313rem]">
            <!-- icon -->
            <div
              class="group flex flex-row justify-center items-center p-[0.625rem] group-hover:bg-[#FFFFFF08] group-hover:transition-all group-hover:duration-1000 bg-[#ffe9d6] rounded-[0.313rem]"
            ></div>
            <h1
              class="order-1 text-base font-semibold text-homePrimary group-hover:text-white font-header group-hover:transition-all group-hover:duration-1000"
            >
              {{ boxMain.titleFour }}
            </h1>
          </div>
          <!-- deskripsi -->
          <p
            class="order-1 text-base font-normal text-homePrimary opacity-60 group-hover:text-white group-hover:transition-all group-hover:duration-1000"
          ></p>
        </div>
      </div>
    </div>
    <!-- swipper mobile mode -->
    <swiper class="flex flex-col items-start lg:hidden">
      <swiper-slide>
        <div
          class="max-w-xs flex flex-col items-start p-[1.094rem] lg:p-[2.188rem] gap-[1.1188rem] bg-homePrimary rounded-[0.625rem]"
        >
          <!-- header -->
          <div class="flex flex-row items-center gap-[1.313rem]">
            <!-- icon -->
            <div
              class="flex flex-row justify-center items-center p-[0.625rem] rounded-[0.313rem] bg-[#FFFFFF08]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="white"
                class="bi bi-lightbulb"
                viewBox="0 0 16 16"
              >
                <path
                  d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z"
                />
              </svg>
            </div>
            <h1 class="order-1 text-base font-semibold text-white font-header">
              {{ boxMain.titleOne }}
            </h1>
          </div>
          <!-- deskripsi -->
          <p class="order-1 text-base font-normal text-white">
            Terdengar narsis?, terserah persepsi kamu. Dengan pengetahuan
            mungkin kami bisa berbagi & membantu'mu meskipun random.
          </p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div
          class="max-w-xs flex flex-col items-start p-[1.094rem] lg:p-[2.188rem] transition-all gap-[1.1188rem] bg-transparent group hover:bg-homePrimary rounded-[0.625rem]"
        >
          <!-- header -->
          <div class="flex flex-row items-center gap-[1.313rem]">
            <!-- icon -->
            <div
              class="group flex flex-row justify-center items-center p-[0.625rem] group-hover:bg-[#FFFFFF08] group-hover:transition-all group-hover:duration-1000 bg-[#ffe9d6] rounded-[0.313rem]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                fill="#FC881D"
                class="group-hover:fill-white"
                height="20px"
                width="20px"
                version="1.1"
                id="Capa_1"
                viewBox="0 0 612.001 612.001"
                xml:space="preserve"
              >
                <g>
                  <path
                    d="M542.346,235.523c-6.647-76.801-52.108-147.626-115.793-190.052c-34.9-23.249-75.336-37.519-116.84-42.917   C195.319-12.325,74.841,37.92,31.685,150.284c-37.099,96.597-0.52,192.495,65.913,265.632   c23.974,26.393,27.298,76.017,27.298,109.446v67.792c0,10.408,8.438,18.846,18.846,18.846h245.301   c9.929,0,18.135-7.704,18.806-17.61c0.903-13.335,2.386-25.062,2.386-25.062c5.129-21.996,23.884-39.634,63.768-33.231   c41.844,6.713,68.237-5.756,70.584-33.617c0.774-9.191,1.273-87.695,1.273-87.695c1.999-1.142,15.117-3.75,34.236-8.097   c14.867-3.38,20.103-21.838,9.263-32.561c-43.469-43.001-49.299-63.047-50.378-67.362   C533.598,285.327,544.296,258.049,542.346,235.523z M461.327,209.858c-6.039,7.651-12.918,9.146-16.556,9.346   c-1.198,0.066-2.033,1.206-1.706,2.36c1.868,6.582,3.768,24.711-28.687,31.77c-30.438,6.615-48.844,30.29-60.863,42.313   c-9.233,9.225-21.723,13.495-34.183,16.299c-12.729,2.864-25.341,5.37-35.384,14.415c-10.577,9.527-25.495,61.985-28.027,71.104   c-0.222,0.801-0.951,1.352-1.783,1.352h-15.621c-0.877,0-1.636-0.614-1.817-1.473l-7.569-35.803   c-0.318-1.504-73.698,4.534-79.347-28.22c-0.198-1.149-1.359-1.862-2.456-1.466c-7.056,2.546-29.692,8.81-41.91-10.122   c-8.663-13.423-6.362-25.955-5.155-30.282c0.25-0.896-0.2-1.828-1.055-2.196c-6.225-2.677-28.719-15.289-25.669-56.784   c2.461-33.448,25.085-48.273,21.922-53.417c-9.124-14.837-1.193-39.431,17.5-44.921c0.753-0.221,1.288-0.888,1.359-1.67   l0.789-8.719c2.596-30.743,42.991-50.226,70.455-37.445c1.059,0.493,2.318-0.032,2.67-1.145   c3.438-10.898,10.377-13.898,12.226-14.938c8.515-4.791,19.572-4.199,28.374-0.586c0.712,0.292,1.523,0.114,2.048-0.448   c2.501-2.679,12.756-11.182,29.739-11.182c17.42,0,26.275,8.465,29.371,10.835c0.569,0.435,1.334,0.513,1.972,0.188   c3.919-2.004,18.228-8.411,32.554-3.476c10.818,3.732,16.959,13.578,18.893,17.161c0.413,0.766,1.281,1.157,2.128,0.957   c5.137-1.217,22.902-4.629,37.827,2.111c15.772,7.13,20.693,17.433,21.948,20.887c0.255,0.703,0.914,1.174,1.662,1.204   c3.42,0.136,12.858,0.964,18.691,5.866c10.3,8.66,9.294,15.488,8.108,18.41c-0.361,0.89,0.038,1.91,0.901,2.333   c4.704,2.307,17.892,9.927,26.073,26.112C472.011,182.884,467.505,202.031,461.327,209.858z"
                  />
                </g>
              </svg>
            </div>
            <h1
              class="order-1 text-base font-semibold text-homePrimary group-hover:text-white font-header group-hover:transition-all group-hover:duration-1000"
            >
              {{ boxMain.titleTwo }}
            </h1>
          </div>
          <!-- deskripsi -->
          <p
            class="order-1 text-base font-normal text-homePrimary opacity-60 group-hover:text-white group-hover:transition-all group-hover:duration-1000"
          >
            Apa benar?, tentu. Kami siap menerima masukan & saran jika itu
            bermanfaat & selalu sedia jika kamu ingin diskusi penting atau
            random.
          </p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div
          class="max-w-xs flex flex-col items-start p-[1.094rem] lg:p-[2.188rem] transition-all gap-[1.1188rem] bg-transparent group hover:bg-homePrimary rounded-[0.625rem]"
        >
          <!-- header -->
          <div class="flex flex-row items-center gap-[1.313rem]">
            <!-- icon -->
            <div
              class="group flex flex-row justify-center items-center p-[0.625rem] group-hover:bg-[#FFFFFF08] group-hover:transition-all group-hover:duration-1000 bg-[#ffe9d6] rounded-[0.313rem]"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  class="group-hover:stroke-white"
                  d="M10.8333 1.66663L2.5 11.6666H10L9.16667 18.3333L17.5 8.33329H10L10.8333 1.66663Z"
                  stroke="#FC881D"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <h1
              class="order-1 text-base font-semibold text-homePrimary group-hover:text-white font-header group-hover:transition-all group-hover:duration-1000"
            >
              {{ boxMain.titleThree }}
            </h1>
          </div>
          <!-- deskripsi -->
          <p
            class="order-1 text-base font-normal text-homePrimary opacity-60 group-hover:text-white group-hover:transition-all group-hover:duration-1000"
          >
            Waktu selalu berputar, lalu?. Kami selalu berusaha mendorong diri
            kamu, untuk berkembang & berubah kearah yang lebih baik.
          </p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div
          class="max-w-xs flex flex-col items-start p-[1.094rem] lg:p-[2.188rem] transition-all gap-[1.1188rem] bg-transparent group hover:bg-homePrimary rounded-[0.625rem]"
        >
          <!-- header -->
          <div class="flex flex-row items-center gap-[1.313rem]">
            <!-- icon -->
            <div
              class="group flex flex-row justify-center items-center p-[0.625rem] group-hover:bg-[#FFFFFF08] group-hover:transition-all group-hover:duration-1000 bg-[#ffe9d6] rounded-[0.313rem]"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_4_366)">
                  <path
                    class="group-hover:stroke-white"
                    d="M10 18.3333C14.6024 18.3333 18.3334 14.6023 18.3334 9.99996C18.3334 5.39759 14.6024 1.66663 10 1.66663C5.39765 1.66663 1.66669 5.39759 1.66669 9.99996C1.66669 14.6023 5.39765 18.3333 10 18.3333Z"
                    stroke="#FC881D"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    class="group-hover:stroke-white"
                    d="M1.66669 10H18.3334"
                    stroke="#FC881D"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    class="group-hover:stroke-white"
                    d="M10 1.66663C12.0844 3.94859 13.269 6.90999 13.3334 9.99996C13.269 13.0899 12.0844 16.0513 10 18.3333C7.91562 16.0513 6.73106 13.0899 6.66669 9.99996C6.73106 6.90999 7.91562 3.94859 10 1.66663V1.66663Z"
                    stroke="#FC881D"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_4_366">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <h1
              class="order-1 text-base font-semibold text-homePrimary group-hover:text-white font-header group-hover:transition-all group-hover:duration-1000"
            >
              {{ boxMain.titleFour }}
            </h1>
          </div>
          <!-- deskripsi -->
          <p
            class="order-1 text-base font-normal text-homePrimary opacity-60 group-hover:text-white group-hover:transition-all group-hover:duration-1000"
          >
            toxic relationship?, katakan tidak. Lingkungan relationship
            merupakan suatu hal yang penting, kami selalu mendukung apapun
            keputusan & tindakan jika itu positif.
          </p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
  <!-- end wrapper feature-->
</template>
