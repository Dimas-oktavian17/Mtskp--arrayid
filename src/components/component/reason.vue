<script>
import { ref } from "vue";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// // Import Swiper styles
// import "swiper/css";

// import "swiper/css/pagination";

// import "../../assets/swipper.css";

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
    };
  },
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
        class="lg:text-center text-left text-base font-semibold font-header text-homeSecondary pb-[0.625rem]"
      >
        TERUS GIMANA?
      </h1>
      <h2
        class="order-2 pb-5 text-4xl font-bold lg:text-center font-header text-homePrimary lg:px-52"
      >
        Terus Ngapain Dong Kalo Nggak Wajib Milih?
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
      <div class="flex flex-col items-center gap-3">
        <!-- svg -->
        <div
          class="w-[18.25rem] h-[12.50rem] rounded-[0.625rem] bg-[#f4ebe4] flex flex-col items-center justify-center"
        >
          <img src="../../assets/reason/love.png" alt="love" />
        </div>
        <!-- deskripsi -->
        <h1
          class="font-header font-semibold text-[1.375rem] leading-[1.875rem] order-1"
        >
          Kamu Jodoh Kami
        </h1>
        <p
          class="order-2 px-10 text-center font-header text-secondary opacity-60"
        >
          Sudah pasti orang yang tidak punya kekasih & jodoh kami akan
          mengunjungi website ini.
        </p>
      </div>
      <!-- box two -->
      <div class="flex flex-col items-center gap-3">
        <!-- svg -->
        <div
          class="w-[18.25rem] h-[12.50rem] rounded-[0.625rem] bg-[#f4ebe4] flex flex-col items-center justify-center"
        >
          <svg
            width="94"
            height="94"
            viewBox="0 0 63 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M29.5445 59.6998C45.6406 59.6998 58.689 46.6513 58.689 30.5552C58.689 14.4591 45.6406 1.41064 29.5445 1.41064C13.4484 1.41064 0.399902 14.4591 0.399902 30.5552C0.399902 46.6513 13.4484 59.6998 29.5445 59.6998Z"
              fill="url(#paint0_radial_1044_16076)"
            />
            <path
              opacity="0.5"
              d="M29.5445 59.6998C45.6406 59.6998 58.689 46.6513 58.689 30.5552C58.689 14.4591 45.6406 1.41064 29.5445 1.41064C13.4484 1.41064 0.399902 14.4591 0.399902 30.5552C0.399902 46.6513 13.4484 59.6998 29.5445 59.6998Z"
              fill="url(#paint1_radial_1044_16076)"
            />
            <path
              opacity="0.24"
              d="M29.5445 59.6998C45.6406 59.6998 58.689 46.6513 58.689 30.5552C58.689 14.4591 45.6406 1.41064 29.5445 1.41064C13.4484 1.41064 0.399902 14.4591 0.399902 30.5552C0.399902 46.6513 13.4484 59.6998 29.5445 59.6998Z"
              fill="url(#paint2_radial_1044_16076)"
            />
            <path
              opacity="0.24"
              d="M29.5445 59.6998C45.6406 59.6998 58.689 46.6513 58.689 30.5552C58.689 14.4591 45.6406 1.41064 29.5445 1.41064C13.4484 1.41064 0.399902 14.4591 0.399902 30.5552C0.399902 46.6513 13.4484 59.6998 29.5445 59.6998Z"
              fill="url(#paint3_radial_1044_16076)"
            />
            <path
              d="M37.3406 17.5857C37.3588 16.4199 38.6339 15.7095 40.8015 15.746C42.6412 15.7824 46.685 16.8571 49.4173 20.4819C49.9274 21.1559 49.1259 21.502 48.6341 21.0648C46.94 19.5894 42.368 17.6404 38.7796 17.9682C37.3406 18.0957 37.3406 17.5857 37.3406 17.5857Z"
              fill="url(#paint4_linear_1044_16076)"
            />
            <path
              d="M17.3946 31.5752C17.3946 31.5752 12.5311 31.2655 11.0557 27.6407C10.9646 27.4039 10.91 27.1671 10.91 26.9303C10.8918 26.4385 11.3289 25.9102 12.2033 26.3474C17.6314 29.0797 20.637 27.6043 22.8957 26.566C23.77 26.1652 24.5897 27.0396 24.3529 27.8411C24.28 28.0779 24.2436 28.3147 24.1161 28.5332C22.2581 31.9031 17.3946 31.5752 17.3946 31.5752Z"
              fill="url(#paint5_radial_1044_16076)"
            />
            <path
              opacity="0.16"
              d="M34.4084 18.4968H30.0003L35.0095 11.2835C35.2827 10.901 35.3192 10.3909 35.1006 9.97197C34.882 9.55302 34.4448 9.27979 33.9712 9.27979H27.8327C27.1223 9.27979 26.7397 9.84446 26.7397 10.5549C26.7397 11.2653 27.1223 11.8299 27.8327 11.8299H31.5304L26.5211 19.0432C26.2479 19.4257 26.2115 19.9358 26.4301 20.3547C26.6487 20.7737 27.0858 21.0469 27.5594 21.0469H34.3902C35.1006 21.0469 35.4831 20.4822 35.4831 19.7718C35.4831 19.0614 35.1188 18.4968 34.4084 18.4968Z"
              fill="#612D5B"
            />
            <path
              d="M29.5445 50.4107C32.6631 50.4107 35.1912 48.3637 35.1912 45.8387C35.1912 43.3136 32.6631 41.2666 29.5445 41.2666C26.4258 41.2666 23.8977 43.3136 23.8977 45.8387C23.8977 48.3637 26.4258 50.4107 29.5445 50.4107Z"
              fill="url(#paint6_radial_1044_16076)"
            />
            <path
              d="M29.5442 42.6692C31.9668 42.6692 34.0798 43.7803 35.1545 45.4015C34.8813 43.0699 32.4768 41.2666 29.5442 41.2666C26.6115 41.2666 24.1889 43.0881 23.9338 45.4015C25.0085 43.7803 27.1215 42.6692 29.5442 42.6692Z"
              fill="url(#paint7_linear_1044_16076)"
            />
            <path
              d="M23.9703 26.6758C23.697 26.4572 23.2963 26.3662 22.8956 26.5483C20.6551 27.5866 17.6313 29.0803 12.2032 26.3297C11.8024 26.1294 11.4928 26.1294 11.2742 26.2387C13.2596 28.716 20.8554 30.2096 23.9703 26.6758Z"
              fill="url(#paint8_linear_1044_16076)"
            />
            <path
              d="M41.6937 31.5757C41.6937 31.5757 46.5572 31.266 48.0326 27.6412C48.1237 27.4044 48.1783 27.1676 48.1783 26.9308C48.1966 26.439 47.7594 25.9107 46.8851 26.3479C41.4569 29.0802 38.4514 27.6047 36.1927 26.5665C35.3183 26.1657 34.4986 27.0401 34.7354 27.8415C34.8083 28.0783 34.8447 28.3151 34.9722 28.5337C36.8302 31.9036 41.6937 31.5757 41.6937 31.5757Z"
              fill="url(#paint9_radial_1044_16076)"
            />
            <path
              d="M35.1187 26.6758C35.3919 26.4572 35.7926 26.3662 36.1934 26.5483C38.4338 27.5866 41.4576 29.0803 46.8858 26.3297C47.2865 26.1294 47.5962 26.1294 47.8147 26.2387C45.8293 28.716 38.2335 30.2096 35.1187 26.6758Z"
              fill="url(#paint10_linear_1044_16076)"
            />
            <path
              d="M21.7484 17.5867C21.7302 16.4209 20.4551 15.7105 18.2875 15.7469C16.4477 15.7834 12.4039 16.8581 9.67161 20.4829C9.16158 21.1569 9.96306 21.503 10.4549 21.0658C12.1489 19.5904 16.721 17.6413 20.3094 17.9692C21.7484 18.0967 21.7484 17.5867 21.7484 17.5867Z"
              fill="url(#paint11_linear_1044_16076)"
            />
            <path
              opacity="0.16"
              d="M43.4427 4.92676L38.1056 12.6319C37.8142 13.0508 37.7778 13.5973 38.0146 14.0527C38.2514 14.508 38.725 14.7813 39.2168 14.7813H47.523C48.2698 14.7813 48.707 14.1619 48.707 13.4151C48.707 12.6683 48.2698 12.049 47.523 12.049H41.8216L45.7743 6.34756C45.0275 5.83753 44.2442 5.36393 43.4427 4.92676Z"
              fill="#612D5B"
            />
            <path
              opacity="0.24"
              d="M40.5826 3.57818C39.8904 3.28673 39.1618 3.03172 38.4514 2.79492C38.6154 3.2503 38.9979 3.57818 39.5443 3.57818H40.5826Z"
              fill="#612D5B"
            />
            <path
              opacity="0.16"
              d="M53.4615 13.9067L51.3121 17.0033C51.057 17.3494 50.966 17.8048 51.0753 18.2238C51.2392 18.8977 51.8403 19.3349 52.4961 19.3349H52.5325C54.0262 19.3349 55.3194 19.4988 56.7038 19.9542C55.8477 17.7866 54.7548 15.7647 53.4615 13.9067Z"
              fill="#612D5B"
            />
            <path
              d="M33.6792 20.501H26.8485C26.3749 20.501 25.9377 20.246 25.7191 19.8088C25.5006 19.3717 25.537 18.8798 25.8102 18.4973L30.8194 11.284H27.1217C26.4113 11.284 26.0288 10.7194 26.0288 10.009C26.0288 9.29856 26.4113 8.73389 27.1217 8.73389H33.2603C33.7339 8.73389 34.1711 8.9889 34.3896 9.42607C34.6082 9.86324 34.5718 10.3551 34.2986 10.7376L29.2893 17.9509H33.6975C34.4079 17.9509 34.7904 18.5155 34.7904 19.2259C34.7904 19.9363 34.3896 20.501 33.6792 20.501Z"
              fill="url(#paint12_linear_1044_16076)"
            />
            <path
              d="M46.4305 14.2346H38.1243C37.6143 14.2346 37.1407 13.9613 36.9221 13.5059C36.7035 13.0506 36.7217 12.5041 37.0132 12.0851L43.2792 3.03211H38.434C37.6871 3.03211 37.25 2.41279 37.25 1.66596C37.25 0.919127 37.6871 0.299805 38.434 0.299805H45.884C46.3941 0.299805 46.8677 0.573035 47.0862 1.02842C47.3048 1.4838 47.2866 2.03026 46.9952 2.44922L40.7109 11.5023H46.4123C47.1591 11.5023 47.5963 12.1216 47.5963 12.8684C47.5963 13.6152 47.1773 14.2346 46.4305 14.2346Z"
              fill="url(#paint13_linear_1044_16076)"
            />
            <path
              d="M60.8022 18.5884H51.4031C50.8567 18.5884 50.3648 18.2788 50.1098 17.8052C49.8548 17.3316 49.8912 16.7487 50.2009 16.2933L57.4142 5.91055H51.7674C50.966 5.91055 50.4924 5.2548 50.4924 4.45332C50.4924 3.65185 50.966 2.99609 51.7674 2.99609H60.2011C60.7476 2.99609 61.2394 3.30575 61.4944 3.77935C61.7494 4.25295 61.713 4.83584 61.4033 5.29123L54.1901 15.674H60.8022C61.6037 15.674 62.0773 16.3297 62.0773 17.1312C62.0773 17.9327 61.6037 18.5884 60.8022 18.5884Z"
              fill="url(#paint14_linear_1044_16076)"
            />
            <defs>
              <radialGradient
                id="paint0_radial_1044_16076"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(23.8102 18.7428) scale(35.1591 35.1591)"
              >
                <stop stop-color="#FFE030" />
                <stop offset="1" stop-color="#FFB92E" />
              </radialGradient>
              <radialGradient
                id="paint1_radial_1044_16076"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(23.8102 18.7428) scale(27.6613 27.6613)"
              >
                <stop stop-color="#FFEA5F" />
                <stop offset="1" stop-color="#FFBC47" stop-opacity="0" />
              </radialGradient>
              <radialGradient
                id="paint2_radial_1044_16076"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(13.6663 37.8046) rotate(-2.7703) scale(12.2589 9.69986)"
              >
                <stop stop-color="#FF4C00" />
                <stop offset="0.1542" stop-color="#FF4C00" />
                <stop offset="0.1795" stop-color="#FF4C00" />
                <stop
                  offset="0.3996"
                  stop-color="#FB4C0B"
                  stop-opacity="0.7318"
                />
                <stop
                  offset="0.7799"
                  stop-color="#EF4B27"
                  stop-opacity="0.2683"
                />
                <stop offset="1" stop-color="#E74A3A" stop-opacity="0" />
              </radialGradient>
              <radialGradient
                id="paint3_radial_1044_16076"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(45.3904 37.8046) rotate(-177.23) scale(12.2589 9.69986)"
              >
                <stop stop-color="#FF4C00" />
                <stop offset="0.1542" stop-color="#FF4C00" />
                <stop offset="0.1795" stop-color="#FF4C00" />
                <stop
                  offset="0.3996"
                  stop-color="#FB4C0B"
                  stop-opacity="0.7318"
                />
                <stop
                  offset="0.7799"
                  stop-color="#EF4B27"
                  stop-opacity="0.2683"
                />
                <stop offset="1" stop-color="#E74A3A" stop-opacity="0" />
              </radialGradient>
              <linearGradient
                id="paint4_linear_1044_16076"
                x1="43.4799"
                y1="19.6263"
                x2="43.5294"
                y2="16.5578"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.00132565" stop-color="#3C2200" />
                <stop offset="1" stop-color="#7A4400" />
              </linearGradient>
              <radialGradient
                id="paint5_radial_1044_16076"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(17.5196 28.8169) rotate(-176.151) scale(5.23787 2.52708)"
              >
                <stop offset="0.00132565" stop-color="#7A4400" />
                <stop offset="1" stop-color="#643800" />
              </radialGradient>
              <radialGradient
                id="paint6_radial_1044_16076"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(29.1957 46.0993) rotate(70.3551) scale(5.65628 4.33876)"
              >
                <stop offset="0.00132565" stop-color="#7A4400" />
                <stop offset="1" stop-color="#643800" />
              </radialGradient>
              <linearGradient
                id="paint7_linear_1044_16076"
                x1="29.5442"
                y1="39.1026"
                x2="29.5442"
                y2="46.5579"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.00132565" stop-color="#3C2200" />
                <stop offset="1" stop-color="#512D00" />
              </linearGradient>
              <linearGradient
                id="paint8_linear_1044_16076"
                x1="16.691"
                y1="24.047"
                x2="18.8329"
                y2="29.6247"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.00132565" stop-color="#3C2200" />
                <stop offset="1" stop-color="#512D00" />
              </linearGradient>
              <radialGradient
                id="paint9_radial_1044_16076"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(41.5685 28.8174) rotate(-3.84889) scale(5.23786 2.52708)"
              >
                <stop offset="0.00132565" stop-color="#7A4400" />
                <stop offset="1" stop-color="#643800" />
              </radialGradient>
              <linearGradient
                id="paint10_linear_1044_16076"
                x1="42.3978"
                y1="24.0468"
                x2="40.2559"
                y2="29.6244"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.00132565" stop-color="#3C2200" />
                <stop offset="1" stop-color="#512D00" />
              </linearGradient>
              <linearGradient
                id="paint11_linear_1044_16076"
                x1="15.6081"
                y1="19.6273"
                x2="15.5586"
                y2="16.5588"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.00132565" stop-color="#3C2200" />
                <stop offset="1" stop-color="#7A4400" />
              </linearGradient>
              <linearGradient
                id="paint12_linear_1044_16076"
                x1="14.9867"
                y1="4.53355"
                x2="35.9344"
                y2="18.5594"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#80DAFE" />
                <stop offset="1" stop-color="#7000A3" />
              </linearGradient>
              <linearGradient
                id="paint13_linear_1044_16076"
                x1="36.2146"
                y1="-1.73868"
                x2="45.5955"
                y2="12.8336"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#80DAFE" />
                <stop offset="1" stop-color="#7000A3" />
              </linearGradient>
              <linearGradient
                id="paint14_linear_1044_16076"
                x1="51.2648"
                y1="-0.950315"
                x2="58.642"
                y2="18.1758"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#80DAFE" />
                <stop offset="1" stop-color="#7000A3" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <!-- deskripsi -->
        <h1
          class="font-header font-semibold text-[1.375rem] leading-[1.875rem] order-1"
        >
          Kamu Sabar
        </h1>
        <p
          class="order-2 px-10 text-center font-header text-secondary opacity-60"
        >
          Sudah pasti orang yang tidak sabar, tidak akan membaca website ini.
          jadi orang yang sabar itu disayang tuhan & kami.
        </p>
      </div>
      <!-- box three -->
      <div class="flex flex-col items-center gap-3">
        <!-- svg -->
        <div
          class="w-[18.25rem] h-[12.50rem] rounded-[0.625rem] bg-[#f4ebe4] flex flex-col items-center justify-center"
        >
          <img src="../../assets/reason/ayam.png" alt="ayam" />
        </div>
        <!-- deskripsi -->
        <h1
          class="font-header font-semibold text-[1.375rem] leading-[1.875rem] order-1"
        >
          Kok Gambar Ayam?
        </h1>
        <p
          class="order-2 px-10 text-center font-header text-secondary opacity-60"
        >
          Lah ngatur. Nggak tau lagi alasan yang ketiga, biar bagus aja
          desainnya. Kalo cuman dua jadinya nggak bagus hehe.
        </p>
      </div>
    </div>
    <!-- swipper active if in mobile web -->
    <swiper class="flex flex-col items-start lg:hidden">
      <swiper-slide>
        <!-- box one -->
        <div class="flex flex-col items-center gap-3 lg:items-start">
          <!-- svg -->
          <div
            class="w-[18.25rem] h-[12.50rem] rounded-[0.625rem] bg-[#f4ebe4] flex flex-col items-center justify-center"
          >
            <img src="../../assets/reason/love.png" alt="love" />
          </div>
          <!-- deskripsi -->
          <h1
            class="font-header font-semibold text-[1.375rem] leading-[1.875rem] order-1"
          >
            Kamu Jodoh Kami
          </h1>
          <p
            class="order-2 text-center sm:px-20 font-header text-secondary opacity-60"
          >
            Sudah pasti orang yang tidak punya kekasih & jodoh kami akan
            mengunjungi website ini.
          </p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <!-- box one -->
        <div class="flex flex-col items-center gap-3">
          <!-- svg -->
          <div
            class="w-[18.25rem] h-[12.50rem] rounded-[0.625rem] bg-[#f4ebe4] flex flex-col items-center justify-center"
          >
            <svg
              width="94"
              height="94"
              viewBox="0 0 72 72"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M34.5445 65.6998C50.6406 65.6998 63.689 52.6513 63.689 36.5552C63.689 20.4591 50.6406 7.41064 34.5445 7.41064C18.4484 7.41064 5.3999 20.4591 5.3999 36.5552C5.3999 52.6513 18.4484 65.6998 34.5445 65.6998Z"
                fill="url(#paint0_radial_1044_16075)"
              />
              <path
                opacity="0.5"
                d="M34.5445 65.6998C50.6406 65.6998 63.689 52.6513 63.689 36.5552C63.689 20.4591 50.6406 7.41064 34.5445 7.41064C18.4484 7.41064 5.3999 20.4591 5.3999 36.5552C5.3999 52.6513 18.4484 65.6998 34.5445 65.6998Z"
                fill="url(#paint1_radial_1044_16075)"
              />
              <path
                opacity="0.24"
                d="M34.5445 65.6998C50.6406 65.6998 63.689 52.6513 63.689 36.5552C63.689 20.4591 50.6406 7.41064 34.5445 7.41064C18.4484 7.41064 5.3999 20.4591 5.3999 36.5552C5.3999 52.6513 18.4484 65.6998 34.5445 65.6998Z"
                fill="url(#paint2_radial_1044_16075)"
              />
              <path
                opacity="0.24"
                d="M34.5445 65.6998C50.6406 65.6998 63.689 52.6513 63.689 36.5552C63.689 20.4591 50.6406 7.41064 34.5445 7.41064C18.4484 7.41064 5.3999 20.4591 5.3999 36.5552C5.3999 52.6513 18.4484 65.6998 34.5445 65.6998Z"
                fill="url(#paint3_radial_1044_16075)"
              />
              <path
                d="M42.3406 23.5857C42.3588 22.4199 43.6339 21.7095 45.8015 21.746C47.6412 21.7824 51.685 22.8571 54.4173 26.4819C54.9274 27.1559 54.1259 27.502 53.6341 27.0648C51.94 25.5894 47.368 23.6404 43.7796 23.9682C42.3406 24.0957 42.3406 23.5857 42.3406 23.5857Z"
                fill="url(#paint4_linear_1044_16075)"
              />
              <path
                d="M22.3946 37.5752C22.3946 37.5752 17.5311 37.2655 16.0557 33.6407C15.9646 33.4039 15.91 33.1671 15.91 32.9303C15.8918 32.4385 16.3289 31.9102 17.2033 32.3474C22.6314 35.0797 25.637 33.6043 27.8957 32.566C28.77 32.1652 29.5897 33.0396 29.3529 33.8411C29.28 34.0779 29.2436 34.3147 29.1161 34.5332C27.2581 37.9031 22.3946 37.5752 22.3946 37.5752Z"
                fill="url(#paint5_radial_1044_16075)"
              />
              <path
                opacity="0.16"
                d="M39.4084 24.4968H35.0003L40.0095 17.2835C40.2827 16.901 40.3192 16.3909 40.1006 15.972C39.882 15.553 39.4448 15.2798 38.9712 15.2798H32.8327C32.1223 15.2798 31.7397 15.8445 31.7397 16.5549C31.7397 17.2653 32.1223 17.8299 32.8327 17.8299H36.5304L31.5211 25.0432C31.2479 25.4257 31.2115 25.9358 31.4301 26.3547C31.6487 26.7737 32.0858 27.0469 32.5594 27.0469H39.3902C40.1006 27.0469 40.4831 26.4822 40.4831 25.7718C40.4831 25.0614 40.1188 24.4968 39.4084 24.4968Z"
                fill="#612D5B"
              />
              <path
                d="M34.5445 56.4107C37.6631 56.4107 40.1912 54.3637 40.1912 51.8387C40.1912 49.3136 37.6631 47.2666 34.5445 47.2666C31.4258 47.2666 28.8977 49.3136 28.8977 51.8387C28.8977 54.3637 31.4258 56.4107 34.5445 56.4107Z"
                fill="url(#paint6_radial_1044_16075)"
              />
              <path
                d="M34.5442 48.6692C36.9668 48.6692 39.0798 49.7803 40.1545 51.4015C39.8813 49.0699 37.4768 47.2666 34.5442 47.2666C31.6115 47.2666 29.1889 49.0881 28.9338 51.4015C30.0085 49.7803 32.1215 48.6692 34.5442 48.6692Z"
                fill="url(#paint7_linear_1044_16075)"
              />
              <path
                d="M28.9703 32.6758C28.697 32.4572 28.2963 32.3662 27.8956 32.5483C25.6551 33.5866 22.6313 35.0803 17.2032 32.3297C16.8024 32.1294 16.4928 32.1294 16.2742 32.2387C18.2596 34.716 25.8554 36.2096 28.9703 32.6758Z"
                fill="url(#paint8_linear_1044_16075)"
              />
              <path
                d="M46.6937 37.5757C46.6937 37.5757 51.5572 37.266 53.0326 33.6412C53.1237 33.4044 53.1783 33.1676 53.1783 32.9308C53.1966 32.439 52.7594 31.9107 51.8851 32.3479C46.4569 35.0802 43.4514 33.6047 41.1927 32.5665C40.3183 32.1657 39.4986 33.0401 39.7354 33.8415C39.8083 34.0783 39.8447 34.3151 39.9722 34.5337C41.8302 37.9036 46.6937 37.5757 46.6937 37.5757Z"
                fill="url(#paint9_radial_1044_16075)"
              />
              <path
                d="M40.1187 32.6758C40.3919 32.4572 40.7926 32.3662 41.1934 32.5483C43.4338 33.5866 46.4576 35.0803 51.8858 32.3297C52.2865 32.1294 52.5962 32.1294 52.8147 32.2387C50.8293 34.716 43.2335 36.2096 40.1187 32.6758Z"
                fill="url(#paint10_linear_1044_16075)"
              />
              <path
                d="M26.7484 23.5867C26.7302 22.4209 25.4551 21.7105 23.2875 21.7469C21.4477 21.7834 17.4039 22.8581 14.6716 26.4829C14.1616 27.1569 14.9631 27.503 15.4549 27.0658C17.1489 25.5904 21.721 23.6413 25.3094 23.9692C26.7484 24.0967 26.7484 23.5867 26.7484 23.5867Z"
                fill="url(#paint11_linear_1044_16075)"
              />
              <path
                opacity="0.16"
                d="M48.4427 10.9268L43.1056 18.6319C42.8142 19.0508 42.7778 19.5973 43.0146 20.0527C43.2514 20.508 43.725 20.7813 44.2168 20.7813H52.523C53.2698 20.7813 53.707 20.1619 53.707 19.4151C53.707 18.6683 53.2698 18.049 52.523 18.049H46.8216L50.7743 12.3476C50.0275 11.8375 49.2442 11.3639 48.4427 10.9268Z"
                fill="#612D5B"
              />
              <path
                opacity="0.24"
                d="M45.5826 9.57818C44.8904 9.28673 44.1618 9.03172 43.4514 8.79492C43.6154 9.2503 43.9979 9.57818 44.5443 9.57818H45.5826Z"
                fill="#612D5B"
              />
              <path
                opacity="0.16"
                d="M58.4615 19.9067L56.3121 23.0033C56.057 23.3494 55.966 23.8048 56.0753 24.2238C56.2392 24.8977 56.8403 25.3349 57.4961 25.3349H57.5325C59.0262 25.3349 60.3194 25.4988 61.7038 25.9542C60.8477 23.7866 59.7548 21.7647 58.4615 19.9067Z"
                fill="#612D5B"
              />
              <path
                d="M38.6792 26.501H31.8485C31.3749 26.501 30.9377 26.246 30.7191 25.8088C30.5006 25.3717 30.537 24.8798 30.8102 24.4973L35.8194 17.284H32.1217C31.4113 17.284 31.0288 16.7194 31.0288 16.009C31.0288 15.2986 31.4113 14.7339 32.1217 14.7339H38.2603C38.7339 14.7339 39.1711 14.9889 39.3896 15.4261C39.6082 15.8632 39.5718 16.3551 39.2986 16.7376L34.2893 23.9509H38.6975C39.4079 23.9509 39.7904 24.5155 39.7904 25.2259C39.7904 25.9363 39.3896 26.501 38.6792 26.501Z"
                fill="url(#paint12_linear_1044_16075)"
              />
              <path
                d="M51.4305 20.2346H43.1243C42.6143 20.2346 42.1407 19.9613 41.9221 19.5059C41.7035 19.0506 41.7217 18.5041 42.0132 18.0851L48.2792 9.03211H43.434C42.6871 9.03211 42.25 8.41279 42.25 7.66596C42.25 6.91913 42.6871 6.2998 43.434 6.2998H50.884C51.3941 6.2998 51.8677 6.57304 52.0862 7.02842C52.3048 7.4838 52.2866 8.03026 51.9952 8.44922L45.7109 17.5023H51.4123C52.1591 17.5023 52.5963 18.1216 52.5963 18.8684C52.5963 19.6152 52.1773 20.2346 51.4305 20.2346Z"
                fill="url(#paint13_linear_1044_16075)"
              />
              <path
                d="M65.8022 24.5884H56.4031C55.8567 24.5884 55.3648 24.2788 55.1098 23.8052C54.8548 23.3316 54.8912 22.7487 55.2009 22.2933L62.4142 11.9105H56.7674C55.966 11.9105 55.4924 11.2548 55.4924 10.4533C55.4924 9.65185 55.966 8.99609 56.7674 8.99609H65.2011C65.7476 8.99609 66.2394 9.30575 66.4944 9.77935C66.7494 10.253 66.713 10.8358 66.4033 11.2912L59.1901 21.674H65.8022C66.6037 21.674 67.0773 22.3297 67.0773 23.1312C67.0773 23.9327 66.6037 24.5884 65.8022 24.5884Z"
                fill="url(#paint14_linear_1044_16075)"
              />
              <defs>
                <radialGradient
                  id="paint0_radial_1044_16075"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(28.8102 24.7428) scale(35.1591 35.1591)"
                >
                  <stop stop-color="#FFE030" />
                  <stop offset="1" stop-color="#FFB92E" />
                </radialGradient>
                <radialGradient
                  id="paint1_radial_1044_16075"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(28.8102 24.7428) scale(27.6613 27.6613)"
                >
                  <stop stop-color="#FFEA5F" />
                  <stop offset="1" stop-color="#FFBC47" stop-opacity="0" />
                </radialGradient>
                <radialGradient
                  id="paint2_radial_1044_16075"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(18.6663 43.8046) rotate(-2.7703) scale(12.2589 9.69986)"
                >
                  <stop stop-color="#FF4C00" />
                  <stop offset="0.1542" stop-color="#FF4C00" />
                  <stop offset="0.1795" stop-color="#FF4C00" />
                  <stop
                    offset="0.3996"
                    stop-color="#FB4C0B"
                    stop-opacity="0.7318"
                  />
                  <stop
                    offset="0.7799"
                    stop-color="#EF4B27"
                    stop-opacity="0.2683"
                  />
                  <stop offset="1" stop-color="#E74A3A" stop-opacity="0" />
                </radialGradient>
                <radialGradient
                  id="paint3_radial_1044_16075"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(50.3904 43.8046) rotate(-177.23) scale(12.2589 9.69986)"
                >
                  <stop stop-color="#FF4C00" />
                  <stop offset="0.1542" stop-color="#FF4C00" />
                  <stop offset="0.1795" stop-color="#FF4C00" />
                  <stop
                    offset="0.3996"
                    stop-color="#FB4C0B"
                    stop-opacity="0.7318"
                  />
                  <stop
                    offset="0.7799"
                    stop-color="#EF4B27"
                    stop-opacity="0.2683"
                  />
                  <stop offset="1" stop-color="#E74A3A" stop-opacity="0" />
                </radialGradient>
                <linearGradient
                  id="paint4_linear_1044_16075"
                  x1="48.4799"
                  y1="25.6263"
                  x2="48.5294"
                  y2="22.5578"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.00132565" stop-color="#3C2200" />
                  <stop offset="1" stop-color="#7A4400" />
                </linearGradient>
                <radialGradient
                  id="paint5_radial_1044_16075"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(22.5196 34.8169) rotate(-176.151) scale(5.23787 2.52708)"
                >
                  <stop offset="0.00132565" stop-color="#7A4400" />
                  <stop offset="1" stop-color="#643800" />
                </radialGradient>
                <radialGradient
                  id="paint6_radial_1044_16075"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(34.1957 52.0993) rotate(70.3551) scale(5.65628 4.33876)"
                >
                  <stop offset="0.00132565" stop-color="#7A4400" />
                  <stop offset="1" stop-color="#643800" />
                </radialGradient>
                <linearGradient
                  id="paint7_linear_1044_16075"
                  x1="34.5442"
                  y1="45.1026"
                  x2="34.5442"
                  y2="52.5579"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.00132565" stop-color="#3C2200" />
                  <stop offset="1" stop-color="#512D00" />
                </linearGradient>
                <linearGradient
                  id="paint8_linear_1044_16075"
                  x1="21.691"
                  y1="30.047"
                  x2="23.8329"
                  y2="35.6247"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.00132565" stop-color="#3C2200" />
                  <stop offset="1" stop-color="#512D00" />
                </linearGradient>
                <radialGradient
                  id="paint9_radial_1044_16075"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(46.5685 34.8174) rotate(-3.84889) scale(5.23786 2.52708)"
                >
                  <stop offset="0.00132565" stop-color="#7A4400" />
                  <stop offset="1" stop-color="#643800" />
                </radialGradient>
                <linearGradient
                  id="paint10_linear_1044_16075"
                  x1="47.3978"
                  y1="30.0468"
                  x2="45.2559"
                  y2="35.6244"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.00132565" stop-color="#3C2200" />
                  <stop offset="1" stop-color="#512D00" />
                </linearGradient>
                <linearGradient
                  id="paint11_linear_1044_16075"
                  x1="20.6081"
                  y1="25.6273"
                  x2="20.5586"
                  y2="22.5588"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.00132565" stop-color="#3C2200" />
                  <stop offset="1" stop-color="#7A4400" />
                </linearGradient>
                <linearGradient
                  id="paint12_linear_1044_16075"
                  x1="19.9867"
                  y1="10.5336"
                  x2="40.9344"
                  y2="24.5594"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#80DAFE" />
                  <stop offset="1" stop-color="#7000A3" />
                </linearGradient>
                <linearGradient
                  id="paint13_linear_1044_16075"
                  x1="41.2146"
                  y1="4.26132"
                  x2="50.5955"
                  y2="18.8336"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#80DAFE" />
                  <stop offset="1" stop-color="#7000A3" />
                </linearGradient>
                <linearGradient
                  id="paint14_linear_1044_16075"
                  x1="56.2648"
                  y1="5.04968"
                  x2="63.642"
                  y2="24.1758"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#80DAFE" />
                  <stop offset="1" stop-color="#7000A3" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <!-- deskripsi -->
          <h1
            class="font-header font-semibold text-[1.375rem] leading-[1.875rem] order-1"
          >
            Kamu Sabar
          </h1>
          <p
            class="order-2 px-10 text-center font-header text-secondary opacity-60"
          >
            Sudah pasti orang yang tidak sabar, tidak akan membaca website ini.
            jadi orang yang sabar itu disayang tuhan & kami.
          </p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <!-- box one -->
        <div class="flex flex-col items-center gap-3 lg:items-start">
          <!-- svg -->
          <div
            class="w-[18.25rem] h-[12.50rem] rounded-[0.625rem] bg-[#f4ebe4] flex flex-col items-center justify-center"
          >
            <img src="../../assets/reason/ayam.png" alt="ayam" />
          </div>
          <!-- deskripsi -->
          <h1
            class="font-header font-semibold text-[1.375rem] leading-[1.875rem] order-1"
          >
            Kok Gambar Ayam?
          </h1>
          <p
            class="order-2 text-center sm:px-20 font-header text-secondary opacity-60"
          >
            Lah ngatur. Nggak tau lagi alasan yang ketiga, biar bagus aja
            desainnya. Kalo cuman dua jadinya nggak bagus hehe.
          </p>
        </div>
      </swiper-slide>
    </swiper>
    <!-- end wrapper deskripsi -->
  </div>
  <!-- end wrapper reasons -->
</template>
