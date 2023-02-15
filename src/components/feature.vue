<template>
  <!-- wrapper feature -->
  <div
    class="container flex flex-col lg:flex-row items-center py-[6.25rem] gap-[8.188rem]"
  >
    <!-- wrapper deskripsi -->
    <div class="flex flex-col items-start w-full lg:w-2/5">
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
        <h1 class="text-base font-semibold font-header text-homeSecondary">
          KENAPA SIH?
        </h1>
      </div>
      <h2
        class="order-2 pb-5 pl-10 text-4xl font-bold lg:pl-0 font-header text-homePrimary"
      >
        Kenapa Kami Tidak Memberikan Insight Apapun?
      </h2>
      <!-- deskripsi -->
      <p
        class="order-4 text-base font-normal pl-10 pr-8 lg:pl-0 font-header text-homePrimary opacity-60 pb-[3.125rem]"
      >
        Di sini kita akan klarifikasi mengapa kita tidak memberikan insight
        apapun di tool ini kepada kamu. Pada dasarnya hal ini kami lakukan
        semata-mata ingin menyelamatkan planet bumi.
      </p>
      <!-- button -->

      <button
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
      </button>
    </div>
    <!-- wrapper fitur -->
    <div class="flex flex-col items-start w-full p-4 lg:w-3/5 lg:p-0">
      <!-- top feature -->
      <div class="flex flex-row items-start gap-[1px]">
        <!-- box one -->
        <div
          class="flex flex-col items-start p-[1.094rem] lg:p-[2.188rem] gap-[1.1188rem] bg-homePrimary rounded-[0.625rem]"
        >
          <!-- header -->
          <div class="flex flex-row items-center gap-[1.313rem]">
            <!-- icon -->
            <div
              class="flex flex-row justify-center items-center p-[0.625rem] rounded-[0.313rem] bg-[#FFFFFF08]"
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
            <h1 class="order-1 text-base font-semibold text-white font-header">
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
          class="flex flex-col items-start p-[1.094rem] lg:p-[2.188rem] transition-all gap-[1.1188rem] bg-transparent group hover:bg-homePrimary rounded-[0.625rem]"
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
                <g clip-path="url(#clip0_4_357)">
                  <path
                    d="M16.6667 1.66663H3.33335C2.41288 1.66663 1.66669 2.41282 1.66669 3.33329V6.66663C1.66669 7.5871 2.41288 8.33329 3.33335 8.33329H16.6667C17.5872 8.33329 18.3334 7.5871 18.3334 6.66663V3.33329C18.3334 2.41282 17.5872 1.66663 16.6667 1.66663Z"
                    stroke="#FC881D"
                    class="group-hover:stroke-white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.6667 11.6666H3.33335C2.41288 11.6666 1.66669 12.4128 1.66669 13.3333V16.6666C1.66669 17.5871 2.41288 18.3333 3.33335 18.3333H16.6667C17.5872 18.3333 18.3334 17.5871 18.3334 16.6666V13.3333C18.3334 12.4128 17.5872 11.6666 16.6667 11.6666Z"
                    stroke="#FC881D"
                    class="group-hover:stroke-white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5 5H5.00833"
                    stroke="#FC881D"
                    class="group-hover:stroke-white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5 15H5.00833"
                    stroke="#FC881D"
                    class="group-hover:stroke-white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_4_357">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <h1
              class="order-1 text-base font-semibold text-homePrimary group-hover:text-white font-header group-hover:transition-all group-hover:duration-1000"
            >
              Database
            </h1>
          </div>
          <!-- deskripsi -->
          <p
            class="order-1 text-base font-normal text-homePrimary opacity-60 group-hover:text-white group-hover:transition-all group-hover:duration-1000"
          >
            Data insight yang banyak kan bakal disimpen di database, ya kalo
            datanya banyak kan jadi gede juga size database-nya.
          </p>
        </div>
      </div>
      <!-- bottom feature -->
      <div class="flex flex-row items-start gap-[1px]">
        <!-- box three -->
        <div
          class="flex flex-col items-start p-[1.094rem] lg:p-[2.188rem] transition-all gap-[1.1188rem] bg-transparent group hover:bg-homePrimary rounded-[0.625rem]"
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
                <g clip-path="url(#clip0_4_357)">
                  <path
                    d="M16.6667 1.66663H3.33335C2.41288 1.66663 1.66669 2.41282 1.66669 3.33329V6.66663C1.66669 7.5871 2.41288 8.33329 3.33335 8.33329H16.6667C17.5872 8.33329 18.3334 7.5871 18.3334 6.66663V3.33329C18.3334 2.41282 17.5872 1.66663 16.6667 1.66663Z"
                    stroke="#FC881D"
                    class="group-hover:stroke-white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.6667 11.6666H3.33335C2.41288 11.6666 1.66669 12.4128 1.66669 13.3333V16.6666C1.66669 17.5871 2.41288 18.3333 3.33335 18.3333H16.6667C17.5872 18.3333 18.3334 17.5871 18.3334 16.6666V13.3333C18.3334 12.4128 17.5872 11.6666 16.6667 11.6666Z"
                    stroke="#FC881D"
                    class="group-hover:stroke-white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5 5H5.00833"
                    stroke="#FC881D"
                    class="group-hover:stroke-white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5 15H5.00833"
                    stroke="#FC881D"
                    class="group-hover:stroke-white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_4_357">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <h1
              class="order-1 text-base font-semibold text-homePrimary group-hover:text-white font-header group-hover:transition-all group-hover:duration-1000"
            >
              Database
            </h1>
          </div>
          <!-- deskripsi -->
          <p
            class="order-1 text-base font-normal text-homePrimary opacity-60 group-hover:text-white group-hover:transition-all group-hover:duration-1000"
          >
            Data insight yang banyak kan bakal disimpen di database, ya kalo
            datanya banyak kan jadi gede juga size database-nya.
          </p>
        </div>
        <!-- box four -->
        <div
          class="flex flex-col items-start p-[1.094rem] lg:p-[2.188rem] transition-all gap-[1.1188rem] bg-transparent group hover:bg-homePrimary rounded-[0.625rem]"
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
                <g clip-path="url(#clip0_4_357)">
                  <path
                    d="M16.6667 1.66663H3.33335C2.41288 1.66663 1.66669 2.41282 1.66669 3.33329V6.66663C1.66669 7.5871 2.41288 8.33329 3.33335 8.33329H16.6667C17.5872 8.33329 18.3334 7.5871 18.3334 6.66663V3.33329C18.3334 2.41282 17.5872 1.66663 16.6667 1.66663Z"
                    stroke="#FC881D"
                    class="group-hover:stroke-white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.6667 11.6666H3.33335C2.41288 11.6666 1.66669 12.4128 1.66669 13.3333V16.6666C1.66669 17.5871 2.41288 18.3333 3.33335 18.3333H16.6667C17.5872 18.3333 18.3334 17.5871 18.3334 16.6666V13.3333C18.3334 12.4128 17.5872 11.6666 16.6667 11.6666Z"
                    stroke="#FC881D"
                    class="group-hover:stroke-white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5 5H5.00833"
                    stroke="#FC881D"
                    class="group-hover:stroke-white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5 15H5.00833"
                    stroke="#FC881D"
                    class="group-hover:stroke-white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_4_357">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <h1
              class="order-1 text-base font-semibold text-homePrimary group-hover:text-white font-header group-hover:transition-all group-hover:duration-1000"
            >
              Database
            </h1>
          </div>
          <!-- deskripsi -->
          <p
            class="order-1 text-base font-normal text-homePrimary opacity-60 group-hover:text-white group-hover:transition-all group-hover:duration-1000"
          >
            Data insight yang banyak kan bakal disimpen di database, ya kalo
            datanya banyak kan jadi gede juga size database-nya.
          </p>
        </div>
      </div>
    </div>
  </div>
  <!-- end wrapper feature-->
</template>
