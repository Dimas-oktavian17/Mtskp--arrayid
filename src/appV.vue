<script>
import "./assets/style.css";
export default {
  data() {
    return {
      nama: "Dimas",
      umur: 18,
      asal: "Surabaya",
    };
  },
};
</script>

<template>
  <!-- <main class="bg-black w-full h-full">
    <p class="greeting"> -->
  <!-- this how to panggil function -->
  <!-- {{ nama }}
      {{ umur }}
      {{ asal }}
    </p>
  </main> -->
  <header class="hidden-me container" id="beranda">
    <nav class="border-gray-200 px-2 mb-10 font-header" id="nav">
      <div
        class="fixed container backdrop-blur-md w-[95%] z-[999] mx-auto flex flex-wrap items-center justify-between rounded-xl lg:w-[98%]"
      >
        <a href="#beranda" class="flex">
          <!-- <svg class="h-10 mr-3" width="51" height="70" viewBox="0 0 51 70" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0)">
                                <path d="M1 53H27.9022C40.6587 53 51 42.7025 51 30H24.0978C11.3412 30 1 40.2975 1 53Z"
                                    fill="#76A9FA"></path>
                                <path
                                    d="M-0.876544 32.1644L-0.876544 66.411C11.9849 66.411 22.4111 55.9847 22.4111 43.1233L22.4111 8.87674C10.1196 8.98051 0.518714 19.5571 -0.876544 32.1644Z"
                                    fill="#A4CAFE"></path>
                                <path d="M50 5H23.0978C10.3413 5 0 15.2975 0 28H26.9022C39.6588 28 50 17.7025 50 5Z"
                                    fill="#1C64F2"></path>
                            </g>
                            <defs>
                                <clipPath id="clip0">
                                    <rect width="51" height="70" fill="white"></rect>
                                </clipPath>
                            </defs>
                        </svg> -->
          <svg
            class="h-10 mr-3 fill-primary dark:fill-primary2"
            width="51"
            height="70"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
            <path
              d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"
            />
          </svg>
          <span
            class="self-center text-lg font-semibold whitespace-nowrap dark:text-white"
            >Expression</span
          >
        </a>
        <div class="flex md:order-2">
          <div class="relative mr-3 md:mr-0 hidden md:block">
            <div
              class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
            ></div>
            <a href="#fitur">
              <button
                type="button"
                onclick="onLogout()"
                class="font-header text-white font-semibold text-lg shadow-sm shadow-primary bg-primary hover:bg-blue-600 rounded-lg px-5 py-2.5 mr-2 mb-2 dark:text-dark dark:bg-slate-200 dark:hover:bg-slate-300 dark:shadow-slate-200"
              >
                Logout
              </button>
            </a>
          </div>
          <button
            data-collapse-toggle="mobile-menu-3"
            type="button"
            class="md:hidden group text-gray-400 hover:text-gray-900 rounded-lg inline-flex items-center justify-center"
            aria-controls="mobile-menu-3"
            aria-expanded="false"
            id="hamburger"
          >
            <span class="sr-only">Open main menu</span>
            <div class="flex flex-col items-end">
              <p
                class="bg-blue-600 transition duration-300 ease-in-out w-[30px] h-2 rounded-lg dark:bg-primary2 dark:active:bg-primary2hover"
              ></p>
              <p
                class="bg-blue-600 transition duration-300 ease-in-out w-4 h-2 my-1 rounded-lg dark:bg-primary2 dark:active:bg-primary2hover"
              ></p>
              <p
                class="bg-blue-600 transition duration-300 ease-in-out w-2 h-2 rounded-lg dark:bg-primary2 dark:active:bg-primary2hover"
              ></p>
            </div>
            <svg
              class="w-6 h-6 hidden"
              id="hamburger"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <svg
              class="hidden w-6 h-6"
              id="close"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          class="hidden backdrop-blur-md md:backdrop-blur-0 md:flex justify-between items-center w-full md:w-auto md:order-1"
          id="mobile-menu-3"
        >
          <ul
            class="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium"
          >
            <li>
              <a
                href="#beranda"
                class="link bg-primary font-header font-semibold text-base md:bg-transparent text-white block pl-3 pr-4 py-2 md:text-primary md:p-0 rounded dark:bg-slate-700 dark:text-slate-50 dark:hover:text-slate-100 lg:dark:bg-transparent"
                aria-current="page"
                >Beranda</a
              >
            </li>
            <li>
              <a
                href="#fitur"
                class="link font-header text-gray-700 text-base font-normal hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-primary md:p-0 dark:lg:hover:bg-transparent dark:hover:bg-slate-600 dark:text-primary2hover dark:hover:text-slate-50 dark:border-slate-600"
              >
                Fitur-fitur
              </a>
            </li>
            <li>
              <a
                href="#teknologi"
                class="link font-header text-gray-700 text-base font-normal hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-primary md:p-0 dark:lg:hover:bg-transparent dark:hover:bg-slate-600 dark:text-primary2hover dark:hover:text-slate-50 dark:border-slate-600"
              >
                Teknologi
              </a>
            </li>
            <li>
              <a
                href="#about"
                class="link font-header text-gray-700 text-base font-normal hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-primary md:p-0 dark:lg:hover:bg-transparent dark:hover:bg-slate-600 dark:text-primary2hover dark:hover:text-slate-50 dark:border-slate-600"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#faq"
                class="link font-header text-gray-700 text-base font-normal hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-primary md:p-0 dark:lg:hover:bg-transparent dark:hover:bg-slate-600 dark:text-primary2hover dark:hover:text-slate-50 dark:border-slate-600"
              >
                FAQ
              </a>
            </li>
            <br />
            <li class="lg:hidden">
              <a href="#fitur">
                <button
                  type="button"
                  onclick="onLogout()"
                  class="w-full font-header text-white font-semibold text-lg shadow-sm shadow-primary bg-primary hover:bg-blue-600 rounded-lg px-5 py-2.5 mr-2 mb-2 dark:text-dark dark:bg-slate-200 dark:hover:bg-slate-300 dark:shadow dark:shadow-slate-200"
                >
                  Logout
                </button>
              </a>
            </li>
            <!-- Darkmode -->
            <label
              for="default-toggle"
              class="inline-flex relative items-center cursor-pointer"
            >
              <input
                type="checkbox"
                value=""
                id="default-toggle"
                class="sr-only peer"
              />
              <div
                class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
              ></div>
              <span
                class="ml-3 text-sm font-medium text-dark dark:text-primary2hover"
              >
                Dark-Mode
              </span>
            </label>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
