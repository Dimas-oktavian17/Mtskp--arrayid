<script>
export default {
  name: "Burger",
  data() {
    return {
      active: false,
    };
  },
  methods: {
    toggleActive() {
      this.$emit(event, "toggle-menu");
    },
  },
};
</script>
<template>
  <div class="flex md:order-2" :class="{ active: active }" @click="toggleActive">
    <div class="relative hidden mr-3 md:mr-0 md:block">
      <div
        class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
      ></div>
      <a href="#fitur">
        <button
          type="button"
          onclick="onLogout()"
          class="flex flex-row justify-center items-center py-[0.625rem] px-[1.563rem] bg-white rounded-full font-bold text-lg text-homePrimary"
        >
          Logout
        </button>
      </a>
    </div>
    <button
      data-collapse-toggle="mobile-menu-3"
      type="button"
      class="inline-flex items-center justify-center text-gray-400 rounded-lg md:hidden group hover:text-gray-900"
      aria-controls="mobile-menu-3"
      aria-expanded="false"
    >
      <span class="sr-only">Open main menu</span>
      <div class="flex flex-col items-end">
        <p
          class="bg-slate-300 transition duration-300 ease-in-out w-[30px] h-2 rounded-lg dark:bg-primary2"
        ></p>
        <p
          class="w-4 h-2 my-1 transition duration-300 ease-in-out rounded-lg bg-slate-300"
        ></p>
        <p
          class="w-2 h-2 transition duration-300 ease-in-out rounded-lg bg-slate-300"
        ></p>
      </div>
    </button>
  </div>
</template>
