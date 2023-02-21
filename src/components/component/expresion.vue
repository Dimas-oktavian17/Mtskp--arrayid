<script>
export default {
  props: ["inputText"],
  data() {
    return {
      benar: "True",
      salah: false,
      myInput: "",
      placeholderTxt: "Input data",
    };
  },
  methods: {
    kondisi() {
      if (this.myInput === "true") {
        ("loveeee");
      }
      if (this.myInput === "false") {
        ("falsee");
      }
    },
  },
};
</script>
<template>
  <!-- expresion wrapper -->
  <div
    class="container flex flex-col lg:flex-row items-start justify-center p-[4.063rem] gap-[1.875rem] bg-white shadow-expresion rounded-[1.25rem]"
  >
    <div class="flex flex-col items-center justify-center">
      <div class="pb-8">
        <figure class="w-auto h-auto">
          <img
            src="../../assets/code.png"
            alt="Expression"
            class="rounded-2xl"
          />
        </figure>
      </div>
      <div class="w-full max-w-xs">
        <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md">
          <div class="mb-4">
            <label
              class="block mb-2 text-2xl font-bold text-black font-header"
              for="answer"
            >
              Answer!
            </label>
            <p class="block mb-2 text-sm font-bold text-gray-600 font-header">
              *Answer "true" or "false"
            </p>
            <input
              class="w-full px-3 py-4 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="answer"
              type="text"
              v-model="myInput"
              :placeholder="inputText"
            />
            <p
              v-if="myInput === 'true'"
              class="block mb-2 text-sm font-bold text-gray-600 font-header"
            >
              Terimakasih udah mempercayiku & love you♡
            </p>
            <p
              v-if="myInput === 'false'"
              class="block mb-2 text-sm font-bold text-gray-600 font-header"
            >
              Gapapa mungkin kita belum jodoh'nya:)
            </p>
          </div>

          <div class="flex items-center justify-center pb-10">
            <button
              type="button"
              class="flex flex-row items-center order-6 px-5 py-3 text-base font-bold transition-all rounded-full justify-self-center font-main text-secondary2 lg:ml-0 lg:py-3 lg:px-10 bg-homePrimary shadow-btnfeature group hover:pr-8 hover:opacity-95"
              v-on:send="myInput"
            >
              Send
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
          <!-- <p class="block mb-2 text-sm font-bold text-gray-600 font-header"></p> -->
        </form>
      </div>
    </div>
  </div>
  <!-- end expresion -->
</template>
<!-- @click="$emit('clicked', 'Dimas') -->
