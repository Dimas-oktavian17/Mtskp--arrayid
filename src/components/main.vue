<script>
import kinesisHomeVue from "./component/kinesisHome.vue";
import kinesisHomeVueTwo from "./component/kinesisHomeTwo.vue";
import kinesisCenter from "./component/kinesesiCenter.vue";
import kinesisCenterTwo from "./component/kinesisCenterTwo.vue";
import kinesisEnd from "./component/kinesisEnd.vue";
import kinesisEndTwo from "./component/kinesisEndTwo.vue";
export default {
  name: "mainVue",
  components: {
    kinesisHomeVue,
    kinesisHomeVueTwo,
    kinesisCenter,
    kinesisCenterTwo,
    kinesisEnd,
    kinesisEndTwo,
  },
};
</script>
<template>
  <!-- Home -->
  <div class="flex flex-row items-center justify-between pt-4">
    <!-- Icon Start -->
    <section class="lg:flex hidden flex-col -space-x-12 space-y-12 w-[10%]">
      <!-- Icon home yt -->
      <div class="flex flex-col self-start justify-start cursor-pointer">
        <kinesisHomeVue></kinesisHomeVue>
      </div>
      <!-- Icon home blur -->
      <div class="flex flex-col items-center justify-center cursor-pointer">
        <kinesisCenter></kinesisCenter>
      </div>
      <!-- Icon home Ig -->
      <div class="flex flex-col items-end justify-end cursor-pointer">
        <kinesisEnd></kinesisEnd>
      </div>
    </section>
    <!-- end icon start -->
    <!-- Home deskripsi -->
    <section
      class="flex flex-col items-start justify-center lg:items-center lg:w-4/5"
    >
      <h1
        class="pb-5 pl-10 font-semibold text-left xxs:text-xs sm:text-base lg:pl-0 lg:text-center font-header text-homeSecondary"
      >
        Expression
      </h1>
      <h2
        class="order-2 pl-10 lg:px-24 xl:px-52 text-4xl sm:text-[3rem] leading-none font-normal lg:text-center text-left text-white font-header"
      >
        Sebuah Expression dari dalam diri, tapi binggung menyampaikanya!
      </h2>
      <p
        class="pt-[2.125rem] pl-10 sm:pr-8 lg:px-32 xl:px-[16rem] font-header font-normal text-lg text-left lg:text-center text-white order-4 pb-[3.75rem]"
      >
        Adalah benar apa yang kamu baca barusan. Expression yang mainstream akan
        mengungkapkan pada sebuah chat, karena kami anti-mainstream maka kami
        akan melakukan sebaliknya.
      </p>
      <div
        class="flex flex-row justify-center items-center pl-10 lg:pl-0 gap-[15px] order-6"
      >
        <!-- btn orange -->
        <a
          href="#features"
          class="text-xs text-center py-3 px-5 flex flex-row justify-center items-center sm:py-3 lg:py-4 sm:px-5 lg:px-10 sm:rounded-full bg-homeSecondary shadow-btnSecondary font-main font-bold text-[#F4F7FF] sm:text-base hover:transition-all hover:opacity-80"
        >
          Memulai Sekarang
        </a>
        <!-- black btn -->
        <a
          href="#alternatives"
          class="flex flex-row items-center justify-center order-1 px-5 py-3 text-sm font-bold text-white bg-transparent rounded-md sm:text-base group hover:transition-all hover:shadow-lg lg:py-4 lg:px-10 font-main"
        >
          <!-- Play icon -->
          <svg
            class="transition-all group-hover:rotate-90"
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.99999 18.8334C14.6024 18.8334 18.3333 15.1024 18.3333 10.5C18.3333 5.89765 14.6024 2.16669 9.99999 2.16669C5.39762 2.16669 1.66666 5.89765 1.66666 10.5C1.66666 15.1024 5.39762 18.8334 9.99999 18.8334Z"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.33331 7.16669L13.3333 10.5L8.33331 13.8334V7.16669Z"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <!-- end play icon -->
          <span class="pl-4"> Pelajarin Dulu </span>
        </a>
      </div>
    </section>
    <!-- home deskripsi end -->
    <!-- Icon end -->
    <section
      class="lg:flex flex-col hidden space-x-10 space-y-10 lg:space-x-12 lg:space-y-12 w-[10%]"
    >
      <!-- Icon home yt -->
      <div class="flex flex-col self-start cursor-pointer">
        <kinesisHomeVueTwo></kinesisHomeVueTwo>
      </div>
      <!-- Icon home blur -->
      <div class="flex flex-col self-start cursor-pointer">
        <kinesisCenterTwo></kinesisCenterTwo>
      </div>
      <!-- Icon home Ig -->
      <div class="flex flex-col items-start justify-start cursor-pointer">
        <kinesisEndTwo></kinesisEndTwo>
      </div>
    </section>
    <!-- end icon end -->
  </div>
</template>
