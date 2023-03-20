<script>
export default {
  name: "footerVue",
  components: {},
  props: {
    title: String,
  },
  data() {
    return {
      sitemap: [
        { title: "Beranda", link: "#beranda" },
        { title: "Features", link: "#features" },
        { title: "Reasons", link: "#reasons" },
        { title: "Alternatives", link: "#alternatives" },
      ],
    };
  },
};
</script>
<template>
  <!-- footer section -->
  <div
    class="container flex flex-col items-center mt-20 p-20 gap-[30px] bg-gradient-to-r from-slate-50 to-slate-100 rounded-tl-3xl rounded-tr-3xl"
  >
    <div class="flex flex-col items-start gap-[30px] lg:flex-row">
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
          Sebenernya banyak banget cowo yang lebih bagus dari okta, maka dari
          itu lebih baik pilih cowo lain aja.
        </p>
        <p
          class="order-2 text-sm font-semibold tracking-widest font-header text-homePrimary"
        >
          COPYRIGHT (C) 2021. DESIGN BY NAUVAL
        </p>
        <p
          class="order-2 text-sm font-semibold tracking-widest font-header text-homePrimary"
        >
          COPYRIGHT (C) 2023. CREATE BY OKTA
        </p>
      </div>
      <div class="flex flex-col items-start flex-grow order-1 gap-4 lg:gap-2">
        <h1 class="text-lg font-bold text-homePrimary font-header">Sitemap</h1>
        <div class="flex flex-col items-start gap-[10px] order-1">
          <ul class="flex flex-col gap-4">
            <li
              v-for="sitemaps in sitemap"
              :key="sitemaps"
              class="text-base font-normal font-header text-homePrimary"
            >
              <a :href="sitemaps.link">{{ sitemaps.title }}</a>
            </li>
          </ul>
        </div>
      </div>
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
          <div
            class="group flex flex-row justify-center items-center p-2 gap-[10px] w-10 h-10 bg-bg-icon rounded-md cursor-pointer transition-all duration-1000"
          >
            <a
              aria-label="Telegram Profile"
              href="https://t.me/DmsOkr"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                class="transition-all bi bi-telegram group-hover:fill-white"
                viewBox="0 0 16 16"
              >
                <path
                  d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"
                />
              </svg>
            </a>
          </div>
          <div
            class="group flex flex-row justify-center items-center p-2 gap-[10px] w-10 h-10 bg-bg-icon rounded-md transition-all duration-1000 cursor-pointer"
          >
            <a
              aria-label="Github Profile"
              href="https://github.com/Dimas-oktavian17"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                class="transition-all bi bi-github group-hover:fill-white"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- end footer -->
</template>
