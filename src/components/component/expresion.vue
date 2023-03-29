<script>
import expression from "../../assets/expression/Expression.webp";
import buffer from "../../assets/expression/buffer.png";
import sendible from "../../assets/expression/sendible.png";
export default {
  components: {},
  props: ["inputText"],
  data() {
    return {
      expresion: {
        src: expression,
        alt: "Expression",
      },
      content: [
        {
          figure: buffer,
          title:
            "Buffer.com – Buffer is the most intuitive, affordable, and authentic way to reach more people on social media.",
          link: "Learn More",
          href: "https://buffer.com/",
        },
        {
          figure: sendible,
          title:
            "Sendible.com – Grow your audience, attract new customers, and reach your social media goals with an all-in-one platform.",
          link: "Learn More",
          href: "https://www.sendible.com/",
        },
      ],
    };
  },
};
</script>
<template>
  <!-- expresion wrapper -->
  <div
    class="container flex flex-col lg:flex-row items-start bg-gradient-to-r from-slate-50 to-slate-200 justify-center p-[4.063rem] gap-[1.875rem] bg-white shadow-expresion rounded-[1.25rem]"
  >
    <div class="flex flex-col items-center justify-center">
      <div class="flex flex-col items-start pb-8 lg:flex-row">
        <!-- wrapper -->
        <div
          v-for="contents in content"
          :key="contents"
          class="flex flex-col items-start justify-between w-full lg:w-1/2"
        >
          <figure class="">
            <img :src="contents.figure" :alt="contents.title" />
          </figure>
          <h1 class="py-[25px] font-header font-normal text-xl text-dark">
            {{ contents.title }}
          </h1>
          <a
            :href="contents.href"
            class="flex flex-row items-center justify-between order-6 pb-12 text-base font-bold transition-all bg-transparent font-main text-dark group hover:pr-8 hover:opacity-95"
          >
            {{ contents.link }}
            <svg
              class="ml-1 transition-all group-hover:ml-4"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="black"
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
              /></svg
          ></a>
        </div>
      </div>
      <!-- <div class="w-full max-w-xs">
        <ContactForm></ContactForm>
      </div> -->
    </div>
  </div>
  <!-- end expresion -->
</template>
