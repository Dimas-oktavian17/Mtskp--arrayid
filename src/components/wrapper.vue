<script setup>
import navVue from "./nav.vue";
import footerVue from "./footer.vue";
import mainVue from "./main.vue";
import featureVue from "./feature.vue";
import bgsecondary from "./component/bgsecondary.vue";
import Bgtwo from "./component/bgtwo.vue";
</script>
<template>
  <!-- wrapper -->
  <div class="relative">
    <!-- main section -->
    <!-- footer bg -->
    <Bgtwo></Bgtwo>
    <div
      class="pt-32 absolute w-full h-[719px] top-[3155px] bg-cover bg-[url('https://dimas-oktavian17.github.io/assets/iconFigma/Rectanglefour.svg')]"
    >
      <!-- wrapper alternatives -->
      <div class="container">
        <!-- header -->
        <div class="flex flex-row items-center gap-[1.875rem]">
          <!-- header wrapper -->
          <div class="flex flex-col items-start justify-center">
            <div
              class="pb-[0.625rem] flex flex-row items-center gap-[0.625rem]"
            >
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
              <p class="order-1 text-base font-semibold text-white font-header">
                ALTERNATIVES
              </p>
            </div>
            <h1 class="order-2 text-4xl font-bold text-white font-header">
              Karena Tool Kita Ini Nggak Ada Apa-Apanya, Inilah Alternatifnya!
            </h1>
          </div>
          <!-- deskripsi -->
          <p class="order-1 text-base font-normal text-white font-header grow">
            Seperti yang lo tau sendiri ya, tool ini tuh nggak ada apa-apanya.
            Barangkali lo udah serius gitu butuh tool untuk sosial media, maka
            dari itu kita kasih 2 alternatif yang bisa lo pake untuk sosial
            media lo.
          </p>
        </div>
        <!-- end header -->
      </div>
      <!-- end wrapper alternatives -->
      <!-- expresion wrapper -->
      <div
        class="container flex flex-row items-start justify-center p-[4.063rem] gap-[1.875rem] bg-white shadow-expresion rounded-[1.25rem]"
      >
        <!-- wrapper tolak -->
        <div
          class="flex flex-col items-start gap-[1.563rem] lg:w-1/2 h-[31.375rem]"
        >
          <!-- wrapper svg -->
          <div class="flex flex-row self-center justify-self-center">
            <!-- svg -->
            <svg
              width="308"
              height="332"
              viewBox="0 0 508 332"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_302_4)">
                <path
                  d="M433.618 9.07462C392.077 -5.61638 342.423 -1.79838 304.215 15.77L262.638 85.158L344.995 139.938L258.799 228.914L290.344 146.052L184.808 91.632L215.882 21.7736C176.586 -0.691715 121.102 -7.13805 75.2154 9.07462C6.36713 33.4766 -26.554 95.8096 27.8437 169.375C66.4871 221.693 134.973 261.146 254.417 331.834C373.896 261.146 442.346 221.721 481.025 169.375C535.423 95.8096 502.466 33.4766 433.618 9.07462V9.07462Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_302_4">
                  <rect
                    width="507"
                    height="332"
                    fill="white"
                    transform="translate(0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <!-- deskripsi -->
          <p
            class="order-2 font-header font-normal text-[1.375rem] leading-[1.875rem] text-homePrimary"
          >
            Buffer.com – Buffer is the most intuitive, affordable, and authentic
            way to reach more people on social media.
          </p>
          <!-- wrapper btn -->
          <div class="order-3 flex flex-row items-center gap-[0.625rem]">
            <p class="text-base font-semibold font-header text-homePrimary">
              Learn More
            </p>
            <!-- svg -->
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.5 12H19.5"
                stroke="#0D0E25"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.5 5L19.5 12L12.5 19"
                stroke="#0D0E25"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <!-- wrapper terima -->
        <div
          class="flex flex-col items-start gap-[1.563rem] lg:w-1/2 h-[31.375rem]"
        >
          <!-- wrapper svg -->
          <div class="flex flex-row self-center justify-self-center">
            <!-- svg -->
            <svg
              width="308"
              height="332"
              viewBox="0 0 508 332"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_302_6)">
                <path
                  d="M0.5 123.787V120.026C0.5 74.7001 50.0381 36.0403 117.579 28.5962C161.411 23.6746 207.791 33.3103 239.758 54.4818L251.524 62.2501L262.409 54.4818C295.258 33.3103 340.756 23.6746 385.469 28.5962C453.03 36.0403 502.549 74.7001 502.549 120.026V123.787C502.549 150.697 485.683 176.44 455.874 194.791L278.686 304.182C271.332 308.721 261.624 311.25 251.524 311.25C241.425 311.25 231.717 308.721 224.363 304.182L47.165 194.791C17.3951 176.44 0.500294 150.697 0.500294 123.787H0.5Z"
                  fill="#4A72FF"
                />
              </g>
              <defs>
                <clipPath id="clip0_302_6">
                  <rect
                    width="507"
                    height="332"
                    fill="white"
                    transform="translate(0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <!-- deskripsi -->
          <p
            class="order-2 font-header font-normal text-[1.375rem] leading-[1.875rem] text-homePrimary"
          >
            Buffer.com – Buffer is the most intuitive, affordable, and authentic
            way to reach more people on social media.
          </p>
          <!-- wrapper btn -->
          <div class="order-3 flex flex-row items-center gap-[0.625rem]">
            <p class="text-base font-semibold font-header text-homePrimary">
              Learn More
            </p>
            <!-- svg -->
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.5 12H19.5"
                stroke="#0D0E25"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.5 5L19.5 12L12.5 19"
                stroke="#0D0E25"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      <!-- end expresion -->
      <!-- footer section -->
      <div
        class="container flex flex-col items-center mt-20 p-20 gap-[30px] bg-white rounded-tl-3xl rounded-tr-3xl"
      >
        <div class="flex flex-col items-start gap-[30px] lg:flex-row">
          <div class="flex flex-col items-start gap-5 lg:w-[27rem] lg:gap-2">
            <div class="flex flex-row items-center gap-[10px]">
              <svg
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
                class="text-3xl order-1 text-left font-bold font-header text-homePrimary"
              >
                Expression
              </h1>
            </div>
            <p class="order-1 text-lg text-homePrimary font-normal font-header">
              Sebenernya banyak banget aplikasi chatting yang lebih bagus dari
              ini, maka dari itu lebih baik pake yang lain aja deh ya daripada
              pake aplikasi yang ini.
            </p>
            <p
              class="order-2 text-sm font-semibold tracking-widest font-header text-homePrimary"
            >
              COPYRIGHT (C) 2021. DESIGN BY NAUVAL
            </p>
            <p
              class="order-2 text-sm font-semibold tracking-widest font-header text-homePrimary"
            >
              COPYRIGHT (C) 2022. CREATE BY OKTA
            </p>
          </div>
          <div
            class="flex flex-col items-start flex-grow order-1 gap-4 lg:gap-2"
          >
            <h1 class="text-lg font-bold text-homePrimary font-header">
              Sitemap
            </h1>
            <div class="flex flex-col items-start gap-[10px] order-1">
              <ul class="flex flex-col gap-4">
                <li class="text-base font-normal font-header text-homePrimary">
                  <a href="#beranda">Beranda</a>
                </li>
                <li class="text-base font-normal font-header text-homePrimary">
                  <a href="#fitur">Fitur-fitur</a>
                </li>
                <li class="text-base font-normal font-header text-homePrimary">
                  <a href="#teknologi">Teknologi</a>
                </li>
                <li class="text-base font-normal font-header text-homePrimary">
                  <a href="#about">About</a>
                </li>
                <li class="text-base font-normal font-header text-homePrimary">
                  <a href="#faq">FAQ</a>
                </li>
              </ul>
            </div>
          </div>
          <div
            class="flex flex-col items-start flex-grow order-2 gap-5 lg:gap-2"
          >
            <h1 class="text-lg font-bold text-homePrimary font-header">
              Tetep Terhubung
            </h1>
            <p
              class="self-stretch order-1 text-base font-normal font-header text-homePrimary"
            >
              Lihat kami pansos di sosial media berikut:
            </p>
            <div
              class="flex flex-row justify-center items-center gap-[10px] order-2"
            >
              <div
                class="group flex flex-row justify-center items-center p-2 gap-[10px] w-10 h-10 bg-bg-icon rounded-md cursor-pointer transition-all duration-1000"
              >
                <a
                  href="https://www.instagram.com/dimas_okr/?hl=id"
                  target="_blank"
                >
                  <svg
                    class="group-hover:fill-white"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z"
                      stroke="#0C1B4D"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16 11.3698C16.1234 12.2021 15.9813 13.052 15.5938 13.7988C15.2063 14.5456 14.5932 15.1512 13.8416 15.5295C13.0901 15.9077 12.2385 16.0394 11.4078 15.9057C10.5771 15.7721 9.80977 15.3799 9.21485 14.785C8.61993 14.1901 8.22774 13.4227 8.09408 12.592C7.96042 11.7614 8.09208 10.9097 8.47034 10.1582C8.8486 9.40667 9.4542 8.79355 10.201 8.40605C10.9478 8.01856 11.7978 7.8764 12.63 7.99981C13.4789 8.1257 14.2649 8.52128 14.8717 9.12812C15.4785 9.73496 15.8741 10.5209 16 11.3698Z"
                      stroke="#0C1B4D"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17.5 6.5H17.51"
                      stroke="#0C1B4D"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
              </div>
              <div
                class="group flex flex-row justify-center items-center p-2 gap-[10px] w-10 h-10 bg-bg-icon rounded-md transition-all duration-1000 cursor-pointer"
              >
                <a
                  href="https://www.facebook.com/dimas.oktavian.5055"
                  target="_blank"
                >
                  <svg
                    class="group-hover:fill-white"
                    width="24"
                    height="24"
                    viewBox="0 0 24 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_d_27_427)">
                      <path
                        d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
                        stroke="#0C1B4D"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_27_427"
                        x="-4"
                        y="0"
                        width="32"
                        height="32"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_27_427"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_27_427"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                </a>
              </div>
              <div
                class="group flex flex-row justify-center items-center p-2 gap-[10px] w-10 h-10 bg-bg-icon rounded-md transition-all duration-1000 cursor-pointer"
              >
                <a href="https://github.com/Dimas-oktavian17" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    class="bi bi-github group-hover:fill-white"
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
    </div>
    <!-- feature  -->
    <!-- 2380px -->
    <div
      class="absolute w-full h-[2080px] left-0 top-[1067px] bg-mainPrimary pt-[30rem]"
    >
      <!-- wrapper feature -->
      <div
        class="container flex flex-row items-center py-[6.25rem] gap-[8.188rem]"
      >
        <!-- wrapper deskripsi -->
        <div class="flex flex-col items-start">
          <!-- header -->
          <div class="flex flex-row items-center gap-[0.625rem] pb-[0.625rem]">
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
            <h1 class="text-base font-semibold font-header text-homeSecondary">
              KENAPA SIH?
            </h1>
          </div>
          <h2
            class="order-2 pb-5 text-4xl font-bold font-header text-homePrimary"
          >
            Kenapa Kami Tidak Memberikan Insight Apapun?
          </h2>
          <!-- deskripsi -->
          <p
            class="order-4 text-base font-normal font-header text-homePrimary opacity-60 pb-[3.125rem]"
          >
            Di sini kita akan klarifikasi mengapa kita tidak memberikan insight
            apapun di tool ini kepada kamu. Pada dasarnya hal ini kami lakukan
            semata-mata ingin menyelamatkan planet bumi.
          </p>
          <!-- button -->
          <div
            class="flex flex-row justify-center items-center py-5 px-[1.875rem] bg-homePrimary rounded-full order-6 shadow-btnfeature"
          >
            <h1 class="text-base font-bold font-main text-secondary2">
              Pelajari Lebih Lanjut
            </h1>
            <svg
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
          </div>
        </div>
        <!-- wrapper fitur -->
        <div class="order-1">
          <!-- top feature -->
          <div class="flex flex-row items-start gap-[1px]">
            <!-- box one -->
            <div
              class="flex flex-col items-start p-[2.188rem] gap-[1.1188rem] bg-homePrimary"
            >
              <!-- header -->
              <div class="flex flex-row items-center gap-[1.313rem]">
                <!-- icon -->
                <div
                  class="flex flex-row justify-center items-center p-[0.625rem] rounded-[0.313rem]"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 6.66663C14.1421 6.66663 17.5 5.54734 17.5 4.16663C17.5 2.78591 14.1421 1.66663 10 1.66663C5.85786 1.66663 2.5 2.78591 2.5 4.16663C2.5 5.54734 5.85786 6.66663 10 6.66663Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17.5 10C17.5 11.3833 14.1667 12.5 10 12.5C5.83333 12.5 2.5 11.3833 2.5 10"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2.5 4.16663V15.8333C2.5 17.2166 5.83333 18.3333 10 18.3333C14.1667 18.3333 17.5 17.2166 17.5 15.8333V4.16663"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <h1
                  class="order-1 text-base font-semibold text-white font-header"
                >
                  Database
                </h1>
              </div>
              <!-- deskripsi -->
              <p class="order-1 text-base font-normal text-white">
                Data insight yang banyak kan bakal disimpen di database, ya kalo
                datanya banyak kan jadi gede juga size database-nya.
              </p>
            </div>
            <!-- box two -->
            <div
              class="flex flex-col items-start p-[2.188rem] gap-[1.1188rem] bg-homePrimary"
            >
              <!-- header -->
              <div class="flex flex-row items-center gap-[1.313rem]">
                <!-- icon -->
                <div
                  class="flex flex-row justify-center items-center p-[0.625rem] rounded-[0.313rem]"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 6.66663C14.1421 6.66663 17.5 5.54734 17.5 4.16663C17.5 2.78591 14.1421 1.66663 10 1.66663C5.85786 1.66663 2.5 2.78591 2.5 4.16663C2.5 5.54734 5.85786 6.66663 10 6.66663Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17.5 10C17.5 11.3833 14.1667 12.5 10 12.5C5.83333 12.5 2.5 11.3833 2.5 10"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2.5 4.16663V15.8333C2.5 17.2166 5.83333 18.3333 10 18.3333C14.1667 18.3333 17.5 17.2166 17.5 15.8333V4.16663"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <h1
                  class="order-1 text-base font-semibold text-white font-header"
                >
                  Database
                </h1>
              </div>
              <!-- deskripsi -->
              <p class="order-1 text-base font-normal text-white">
                Data insight yang banyak kan bakal disimpen di database, ya kalo
                datanya banyak kan jadi gede juga size database-nya.
              </p>
            </div>
          </div>
          <!-- bottom feature -->
          <div class="flex flex-row items-start gap-[1px]">
            <!-- box three -->
            <div
              class="flex flex-col items-start p-[2.188rem] gap-[1.1188rem] bg-homePrimary"
            >
              <!-- header -->
              <div class="flex flex-row items-center gap-[1.313rem]">
                <!-- icon -->
                <div
                  class="flex flex-row justify-center items-center p-[0.625rem] rounded-[0.313rem]"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 6.66663C14.1421 6.66663 17.5 5.54734 17.5 4.16663C17.5 2.78591 14.1421 1.66663 10 1.66663C5.85786 1.66663 2.5 2.78591 2.5 4.16663C2.5 5.54734 5.85786 6.66663 10 6.66663Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17.5 10C17.5 11.3833 14.1667 12.5 10 12.5C5.83333 12.5 2.5 11.3833 2.5 10"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2.5 4.16663V15.8333C2.5 17.2166 5.83333 18.3333 10 18.3333C14.1667 18.3333 17.5 17.2166 17.5 15.8333V4.16663"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <h1
                  class="order-1 text-base font-semibold text-white font-header"
                >
                  Database
                </h1>
              </div>
              <!-- deskripsi -->
              <p class="order-1 text-base font-normal text-white">
                Data insight yang banyak kan bakal disimpen di database, ya kalo
                datanya banyak kan jadi gede juga size database-nya.
              </p>
            </div>
            <!-- box four -->
            <div
              class="flex flex-col items-start p-[2.188rem] gap-[1.1188rem] bg-homePrimary"
            >
              <!-- header -->
              <div class="flex flex-row items-center gap-[1.313rem]">
                <!-- icon -->
                <div
                  class="flex flex-row justify-center items-center p-[0.625rem] rounded-[0.313rem]"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 6.66663C14.1421 6.66663 17.5 5.54734 17.5 4.16663C17.5 2.78591 14.1421 1.66663 10 1.66663C5.85786 1.66663 2.5 2.78591 2.5 4.16663C2.5 5.54734 5.85786 6.66663 10 6.66663Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17.5 10C17.5 11.3833 14.1667 12.5 10 12.5C5.83333 12.5 2.5 11.3833 2.5 10"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2.5 4.16663V15.8333C2.5 17.2166 5.83333 18.3333 10 18.3333C14.1667 18.3333 17.5 17.2166 17.5 15.8333V4.16663"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <h1
                  class="order-1 text-base font-semibold text-white font-header"
                >
                  Database
                </h1>
              </div>
              <!-- deskripsi -->
              <p class="order-1 text-base font-normal text-white">
                Data insight yang banyak kan bakal disimpen di database, ya kalo
                datanya banyak kan jadi gede juga size database-nya.
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- end wrapper feature-->
      <!-- wrapper reasons -->
      <div class="container flex flex-col items-center py-[6.25rem] gap-16">
        <!-- head wrapper -->
        <div class="flex flex-col items-center">
          <h1
            class="text-base font-semibold font-header text-homeSecondary pb-[0.625rem]"
          >
            TERUS GIMANA?
          </h1>
          <h2
            class="order-2 pb-5 text-4xl font-bold text-center font-header text-homePrimary"
          >
            Terus Ngapain Dong Kalo Nggak Ada Insight Apapun?
          </h2>
          <p
            class="text-base text-center font-header text-homePrimary opacity-60"
          >
            Ya nggak tau, salah sendiri lu ngapain ke website ini. Tapi ada tiga
            kemungkinan kenapa lo bisa ada di website ini. Ketiga kemungkinan
            itu akan gwej jabarkan di bawah ini dengan ilustrasinya hehehe.
          </p>
        </div>
        <!-- end head wrapper -->
        <!-- wrapper deskripsi -->
        <div class="flex flex-row items-start gap-[1.938rem] order-1">
          <!-- box one -->
          <div class="flex flex-col items-start gap-3">
            <!-- svg -->
            <div
              class="w-[23.25rem] h-[12.5rem] rounded-[0.625rem] bg-homePrimary opacity-5 flex flex-col items-center justify-center"
            >
              <svg
                width="94"
                height="94"
                viewBox="0 0 94 94"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <rect width="94" height="94" fill="url(#pattern0)" />
                <defs>
                  <pattern
                    id="pattern0"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlink:href="#image0_7_14"
                      transform="scale(0.00833333)"
                    />
                  </pattern>
                  <image
                    id="image0_7_14"
                    width="120"
                    height="120"
                    xlink:href="data:image/png;base64,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"
                  />
                </defs>
              </svg>
            </div>
            <!-- deskripsi -->
            <h1
              class="font-header font-semibold text-[1.375rem] leading-[1.875rem] order-1"
            >
              Kamu Tidak Punya Kekasih
            </h1>
            <p class="order-2 font-header text-secondary opacity-60">
              Sudah pasti orang yang tidak punya kekasih akan memiliki waktu
              luang yang banyak, jadi ya lo iseng aja gitu datang ke website
              ini.
            </p>
          </div>
          <!-- box two -->
          <div class="flex flex-col items-start gap-3">
            <!-- svg -->
            <div
              class="w-[23.25rem] h-[12.5rem] rounded-[0.625rem] bg-homePrimary opacity-5 flex flex-col items-center justify-center"
            >
              <svg
                width="94"
                height="94"
                viewBox="0 0 94 94"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <rect width="94" height="94" fill="url(#pattern0)" />
                <defs>
                  <pattern
                    id="pattern0"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlink:href="#image0_7_14"
                      transform="scale(0.00833333)"
                    />
                  </pattern>
                  <image
                    id="image0_7_14"
                    width="120"
                    height="120"
                    xlink:href="data:image/png;base64,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"
                  />
                </defs>
              </svg>
            </div>
            <!-- deskripsi -->
            <h1
              class="font-header font-semibold text-[1.375rem] leading-[1.875rem] order-1"
            >
              Kamu Tidak Punya Kekasih
            </h1>
            <p class="order-2 font-header text-secondary opacity-60">
              Sudah pasti orang yang tidak punya kekasih akan memiliki waktu
              luang yang banyak, jadi ya lo iseng aja gitu datang ke website
              ini.
            </p>
          </div>
          <!-- box three -->
          <div class="flex flex-col items-start gap-3">
            <!-- svg -->
            <div
              class="w-[23.25rem] h-[12.5rem] rounded-[0.625rem] bg-homePrimary opacity-5 flex flex-col items-center justify-center"
            >
              <svg
                width="94"
                height="94"
                viewBox="0 0 94 94"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <rect width="94" height="94" fill="url(#pattern0)" />
                <defs>
                  <pattern
                    id="pattern0"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlink:href="#image0_7_14"
                      transform="scale(0.00833333)"
                    />
                  </pattern>
                  <image
                    id="image0_7_14"
                    width="120"
                    height="120"
                    xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAKNklEQVR4Ae2dbawcVRnHb0HUJlYT0xQ1KCDYyzxn9ibSqKnaYCRCxERTY9MUE0xIIcUPQEJqNAE+iP1SE4yhktRgGvec2Vu3FrkRSFQI5YPxpSiGwgeSEqzoFRMUi7UvXi5/8zyzc/fu7e6dl93ZnZdnk83szst5+f/Oc+bMmXOeMzWlH1VAFVAFVAFVQBVQBVQBVUAVUAVUgXErAExdgMc/8W60GlfB+dfBmp2w5h40zfdgzX75OvNDOPMDBLQHTbodTf/LCBqb0PIvxlOfedu40xwXH6dJ0sZp5LRymjntnAfOS5SvMI/3wJlbJO+sAWuBqQvi4ij0cREgaHwYztwIax6Epd/A0jycOQNn3oIlxHwX4OhfcPQ8LP0EztwJZz6GNr1rUhnnuCUNnBZJEz0vabS0EJMXSJ4576yBaGEeFG1YowIW4IEao23eC+dvhTNNOHoZSTIfDzsUqEn/hKUnYP07YM2V47ACqX04LomTngCnIVkBjSvAfJwL8cuhVv5W1m6gsJM+gObMBjh/F6z3a7HSJNCyn7MIZ16Cpe/CNRp5gBawHLbEIXEtxlpp9vxwAT4TaufvYi0nzXMpfqm2AvoqnPntyKw1jVDO/AXOfAeBd+lSoob8wWFJmBx2mrSM5twF0ZI1neDtSCSE9a6GpUNjsNjVqzuuMp35E6zZgQOXvTMrX75WwuCwRlcNr572QYUivF8fYo2z5ifzdR0hdnbusdkyMChjw+0/JQ26wzOXpM0cDs9c0mkMnpqA1Q7WUNoxZucwBTeVFmhtXA9H34c1pwslRFQwxJrpaW7tJs1Y2DKWa5K07gfDiNIw8q05LZq3Nq5PmqdM52H2qsvgzMOwlG+DYxQCBfQiAu+GuIzC0efB544iznzD4Iblw8wgLk+ZjuOgfwUc/aoEQnQtzNFfEdA2YGrNykzzPjnG5+QLppueUcTDDA76V6zMz1D/0Zy5vHRwu2LOI6AvrRSA93U6HUYLoBtvfuEy5ObM5SvzlOl/+HxLj5SqlK8UmRsqrcY1kQD8u4ANxHQFwtEjQz8vo715LZy3b+KPDCuBZfnv/D8g8D4iX/6dJYwiXSONSW8fM4oKbuqt9EyFz2PpSleRhFieFmfmwN/l+8r8m9k4f1dqsHwBAvo4LJ2ojBgMMuwQKeijUOzLl0FGdoJZpYKMuel1CPyfVQpumS01Lu3Mam56XWLIcP7NsHROAWe2qkHWltf+c8wsEWDMTn8Alp5RuKWBGxWaZ5hdLOTOi/Wq3aciEaq7DdsXd64KOByCYo6q9ZbOesOCG5ijzHAgZBlC4sz/FHBJATM7Z27sCxhteru8241rsenxolfzh5jleZDRNgRn/qbWW1LrjQyPGbYNnQ9YhnUmGu1Y9BJc7/SFja1begDLALPA/Fitt+TWG1kxs1w+7jocpWGeVcAVAezMs8x0yYoxSx+Fo9cUcFUA02vMtAs4HKiuj0dRFVf2rTwu+VuXAZapGPVunJQd6sr0O9Pt1YKjvVo9V6R6jkA72tu1YGseUsAVA2zNQwJYZgE6c1ABVwwwM+VZi9i/6SIE5qcKuGKAmen+TReFgHl+UVR367Yqjc1DIWCefc9zeRVsVcCG+WCmUW8WAvOAAq5cFf1AtxXd9O5WwBUD3PTu7gK23k2VGNyut5moen4L1rtpGWDaAmf+o1ZcESsOWW7pAm7Thzo+L6rV0KivRR/HrP/BZYA3rw2911SkBNcXbGiggfnleXOWOu4L1IKrUDict2/JeqMfcObreg+uSA3Wb0IaLG2BpTcUcukhn0SLPh0Z7tIWbXpfx22gVtPlrqaP9R38jva2C+HIqgWX3IKZYXvbhUuWu/wHArpVOzxKDLjfkNkewAc9H878Xa24tJDn0SKznGnPb/Fg58yjCrikgJldnCtHeVxiUy93Q6N+DUVmFvi39Vhsvz+wM9OV881Rj8J6gtn1Y9qzL2xNmwNqwSWrpp05MLD13EOYPexY7wtw5r8KuSSQmVUCv5xLnNHe9B5YOqKAywLYe4qZLQFM8qPzTPymQi44ZGfe5BVdkjDtOUe87fAstXo0UMrc6v5jIu86PXQ7f+DoLu3ZKrAFS88V3dWPXaJ94JEelo6pFRcW8jFmlAjmoJPEb1YZPLzX71ayyGs5DeKWeD8Oe++Hpd+rFRfMip35Hb/iTQxytRPhzNdg6axCLgzks8xkNWapjsliivoSojgtbWd+zkxSQYw7GY6ulXX76nevKw5Y1p59qTTNZ+N4pT4u84itd79W05Oupr37E/c5p6Ucrr7CS8hNOpM1jZ+X3BvVaiuD4HccluqLiHEXcn6hMMjR6CBYWfZ31i1Unx7jBsx+VOJGa2QB2u+acGkaek6r6jHdKhw9x5r3Y5HbPjjzFVg6qZBzh3yStc4N5KCAxXlLuDq2jt/Kq7oOXybsFV8bg0DkuV+WACjbgpV5wcgjXJ4luJqL/jzhRmGHa+/KGvfF6hDIQ/BxhunMS2nWQI545LIFrzev9+NRFvCTrGkusLIEKvfjwHwblha00TV0o2sBrCV7qSvSRwbqOQoU8JCAWcO0A+jGVRAQeJfC0dMKOTPkI6zhuHhligfWuxqWXlDIqSG/0OOlPZP6Y7oIzr8Oll5RyIkhvwLrf25MeEYTDazZoetAJAAsa2WYHaNRfYyhhEv1+Lep349VIb8hq6xHTkPHyGckUXUGCezWeU59IMvcL2934R6H0pKXNRGduVcH7fVA5kFz9/ZdYzCtwEU4n72uwZn7FLJAZrj3neeJrgighkmDQA57u+o8/Pas9FK1N68dRsvCXtuFbE7X7xHKnK403KjUhY5e6FuwdKo2kNm9r6Nv4vEr3xHpUOmtNLyadDssvV4DyK+D88oroNTp0/EFwlNiXq0w5Fdl2s8gz3NVBw5MrYE1X4Sl4xWEfFzyhqk1VecYmz848ykE5mhlIHNeZv1Pxma8TieIfy6eVFXuuciLkDwk8FdVJ7hRXtGc2SBrODlzpnTWzGnm9aeaMxui/Oi2jwLyrGz9O+DoH6WBzGnllnJVOzD6cBpqV/gmylyPMnj54TQG5vqlZeSGynnNLpYpMtbMwtK5AlrzOXDaxj2lpGplAHPT6zrunIrjx5p9arOLqbnpdVXTeyL5kSq71bim415xcYLWzHEfAaelrC/pJ0IwYaRhK5v2TGQoEA+tCWiPtpITwsp6WtjFSdcioCfHNNB+QeJiHyV17XLMCmuY69DauB7W4+FAf86typawvd0c1zBp1WszKiB92S1/Bk36ERz9e2SgOSwOk8PWvuSMdEZ4Gb9nlWdR6z+GYXrB5Fr/MQmrLu9uR8gh96DCRyp/e3jPTNHdKd2M9CScv10ffXLHNHwE4UQ4fzus94uYkSOn5BwGW9QJX8PLUd0QxKID7wZYcrA0L76vwyWD5mUfH9POivIXAJm/7BoNOO8b4bfRqN0QmvJj1ByoAqqAKqAKqAKqgCqgCqgCqoAqMAoF/g8dbImwzgbYWAAAAABJRU5ErkJggg=="
                  />
                </defs>
              </svg>
            </div>
            <!-- deskripsi -->
            <h1
              class="font-header font-semibold text-[1.375rem] leading-[1.875rem] order-1"
            >
              Kamu Tidak Punya Kekasih
            </h1>
            <p class="order-2 font-header text-secondary opacity-60">
              Sudah pasti orang yang tidak punya kekasih akan memiliki waktu
              luang yang banyak, jadi ya lo iseng aja gitu datang ke website
              ini.
            </p>
          </div>
        </div>
        <!-- end wrapper deskripsi -->
      </div>
      <!-- end wrapper reasons -->
    </div>
    <!-- secondary home bg -->
    <bgsecondary></bgsecondary>
    <!-- primary home bg -->
    <div
      class="absolute w-full h-[1240px] bg-cover bg-[url('https://dimas-oktavian17.github.io/assets/iconFigma/Rectangleone.svg')]"
    >
      <section class="container box-border pt-32">
        <mainVue></mainVue>
        <featureVue></featureVue>
      </section>
    </div>
    <!-- navbar -->
    <navVue></navVue>
  </div>
</template>
