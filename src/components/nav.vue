<script>
// in non-<script setup>
export default {
  name: "navVue",
  components: {},
  data() {
    return {
      navOpen: true,
      menus: [
        {
          menu: "Features",
          url: "#features",
        },
        {
          menu: "Reasons",
          url: "#reasons",
        },
        {
          menu: "Alternatives",
          url: "#alternatives",
        },
      ],
    };
  },
  props: {
    title: String,
  },
  methods: {
    logout() {
      let login = document.querySelector("#login");
      let main = document.querySelector("#main");
      let animate = document.querySelector('[aria-label="animation"]');
      let sec = document.querySelector("section");
      let loaded = setInterval(() => {
        animate.classList.remove("hidden");
        sec.classList.add("overflow-hidden");
        login.classList.add("hidden");
        main.classList.add("hidden");
      }, 0);
      setTimeout(() => {
        clearInterval(loaded);
        login.classList.remove("hidden");
        main.classList.add("hidden");
        animate.classList.remove("hidden");
        sec.classList.remove("hidden");
        localStorage.clear();
        location.reload();
      }, 5000);
    },
  },
};
</script>
<template>
  <header class="container" id="beranda">
    <div class="px-2 mb-10 border-gray-200 font-header">
      <div
        id="sidemenu"
        class="text-focus-in fixed container bg-[#1b1525] w-[95%] z-[999] mx-auto flex flex-wrap items-center justify-between rounded-xl lg:w-[98%]"
      >
        <a href="#beranda" class="flex ml-4 group">
          <svg
            class="transition-all delay-1000 group-hover:animate-ping"
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="50"
              height="50"
              rx="25"
              fill="white"
              fill-opacity="0.08"
            />
            <path
              d="M15.76 29.106L19.792 25.038L15.76 20.988H18.658L22.69 25.038L18.658 29.106H15.76ZM24.9745 31.626C24.5545 31.626 24.2065 31.494 23.9305 31.23C23.6665 30.966 23.5345 30.648 23.5345 30.276C23.5345 29.892 23.6665 29.568 23.9305 29.304C24.2065 29.04 24.5545 28.908 24.9745 28.908C25.3945 28.908 25.7365 29.04 26.0005 29.304C26.2765 29.568 26.4145 29.892 26.4145 30.276C26.4145 30.648 26.2765 30.966 26.0005 31.23C25.7365 31.494 25.3945 31.626 24.9745 31.626ZM31.2684 29.106L27.2544 25.038L31.2684 20.988H34.1844L30.1344 25.038L34.1844 29.106H31.2684Z"
              fill="white"
            />
          </svg>
          <span
            class="self-center pl-4 text-lg font-bold whitespace-nowrap dark:text-white"
            :title="title"
          >
            {{ title }}
          </span>
        </a>
        <div class="flex md:order-2">
          <div class="relative hidden mr-3 md:mr-0 md:block">
            <div
              class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
            ></div>
            <a href="#">
              <button
                type="button"
                @click="logout()"
                class="flex flex-row items-center justify-center px-8 py-2 mr-4 text-lg font-bold bg-white rounded-full text-homePrimary"
              >
                Logout
              </button>
            </a>
          </div>
          <button
            @click="navOpen = !navOpen"
            data-collapse-toggle="mobile-menu-3"
            type="button"
            class="inline-flex items-center justify-center text-gray-400 transition-all duration-1000 rounded-lg md:hidden group hover:text-gray-900"
            aria-controls="mobile-menu-3"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <div class="flex flex-col items-end pr-4">
              <p
                :class="{
                  ' origin-bottom-left rotate-0 bg-slate-300 transition duration-1000 ease-in-out w-[30px] h-2 rounded-lg':
                    navOpen,
                }"
                class="origin-bottom-left rotate-[45deg] w-[40px] h-2 bg-slate-300 rounded-lg duration-1000 ease-in-out"
              ></p>

              <p
                :class="{
                  ' origin-top-right rotate-0 w-4 h-2 my-1 transition duration-1000 ease-in-out rounded-lg bg-slate-300':
                    navOpen,
                }"
                class="w-4 h-2 my-1 transition duration-1000 ease-in-out origin-right scale-100 rotate-45 rounded-lg bg-slate-300"
              ></p>
              <p
                :class="{
                  'rotate-45 origin-top-right w-2 h-2 transition duration-1000 ease-in-out rounded-lg bg-slate-300':
                    navOpen,
                }"
                class="rotate-[45deg] origin-top-right w-[30px] h-2 transition duration-1000 ease-in-out rounded-lg bg-slate-300"
              ></p>
            </div>
          </button>
        </div>

        <div
          :class="{ hidden: navOpen }"
          class="items-center justify-between w-full backdrop-blur-md md:backdrop-blur-0 md:flex md:w-auto md:order-1"
          id="mobile-menu-3"
        >
          <ul
            class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium"
          >
            <li>
              <a
                href="#beranda"
                @click="navOpen = !navOpen"
                class="block py-2 pl-3 pr-4 text-base font-bold rounded text-homeSecondary bg-primary font-main md:bg-transparent md:p-0"
                aria-current="page"
              >
                Beranda
              </a>
            </li>
            <li v-for="menu in menus" :key="menu">
              <a
                :href="menu.url"
                @click="navOpen = !navOpen"
                class="block py-2 pl-3 pr-4 text-base font-normal border-b border-gray-100 text-navli font-main hover:bg-opacity-80 md:hover:bg-transparent md:border-0 md:hover:opacity-80 md:p-0"
              >
                {{ menu.menu }}
              </a>
            </li>
            <br />
            <li class="lg:hidden">
              <a href="#">
                <button
                  type="button"
                  @click="logout()"
                  class="w-full font-header text-homePrimary font-semibold text-lg shadow-sm rounded-lg px-5 py-2.5 mr-2 mb-2 bg-gradient-to-r from-slate-50 to-slate-200"
                >
                  Logout
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>
