<script setup>
import navVue from "./nav.vue";
import footerVue from "./footer.vue";
import mainVue from "./main.vue";
import featureVue from "./feature.vue";
import bgsecondary from "./component/bgsecondary.vue";
</script>
<template>
  <!-- wrapper -->
  <div class="relative">
    <!-- main section -->
    <div
      class="absolute w-full h-[2330px] left-0 top-[1067px] bg-mainPrimary pt-[30rem]"
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
